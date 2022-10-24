import {CartProduct, Product} from "@shared/models/product/product";
import {productRepository} from "@/repositories/product/product.repository";
import {OrderBag} from "@shared/models/product/types";
import API from "@/http/API";
import {ProductForbiddenService} from "@services/forbidden/product/product.forbidden.service";
import {BehaviorSubject, Observable, tap} from "rxjs";

export class ProductCartService {
	private cartList: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);
	cartListOrigin: Observable<CartProduct[]> = this.cartList.asObservable().pipe(
		tap({
			// subscribe: () => console.log('subscribe'),
			// complete: () => console.log('complete'),
			// unsubscribe: () => console.log('unsubscribe'),
			// finalize: () => console.log('finalize'),
		}),
	);

	getCurrList() {
		return this.cartList.getValue();
	}

	fetchCart(): Observable<CartProduct[]> {
		productRepository.getCartList()
			.then(list => {
				this.cartList.next(list)
			})

		return this.cartListOrigin;
	}

	findOneByParams(id: string, bag: OrderBag): CartProduct | undefined {
		return this.cartList.getValue().find(el => el.product.id === id && el.orderBag.type === bag.type);
	}

	private addToCart(p: Product, quantity: number, orderBag: OrderBag) {
		const arr: CartProduct[] = this.cartList.getValue();
		const el = this.findOneByParams(p.id, orderBag);

		if (!el) {
			const cartProduct = CartProduct.fromJson({
				product: p,
				quantity: quantity,
				orderBag,
				isActive: true
			} as Partial<CartProduct>)
			// Добавляем элемент в начало
			this.cartList.next([cartProduct].concat(arr))
		}

		if (el) {
			el.quantity += quantity;
		}

		return API.Catalog.Product.Cart.add({
			id: p.id,
			quantity,
			orderBag: orderBag
		})
			.catch(err => {
				this.fetchCart();
				throw err;
			});
	}

	private removeFromCart(p: Product, quantity: number, orderBag: OrderBag) {
		const arr: CartProduct[] = this.cartList.getValue();
		const el = this.findOneByParams(p.id, orderBag);

		if (!el) return Promise.reject();

		const oldQuantity = el.quantity;

		if (oldQuantity < quantity) return Promise.reject();

		if (oldQuantity === quantity) {
			this.cartList.next(arr.filter(el => el.product.id !== p.id))
		}

		if (oldQuantity > quantity) {
			el.quantity -= quantity;
		}

		return API.Catalog.Product.Cart.remove({
			id: p.id,
			quantity,
			orderBag: orderBag
		})
			.catch(err => {
				this.fetchCart();
				throw err;
			});
	}

	async changeQuantity(product: Product, quantity: number, bag: OrderBag) {
		const cartProduct = this.findOneByParams(product.id, bag);

		if (!cartProduct) return this.addToCart(product, quantity, bag);

		const diff = quantity - cartProduct.quantity;

		if (diff > 0) {
			return this.addToCart(cartProduct.product, diff, bag)
		} else if (diff < 0) {
			return this.removeFromCart(cartProduct.product, Math.abs(diff), bag);
		}

		return Promise.resolve();
	}

	productUpdate(cartProduct: CartProduct, isActive: boolean) {
		const oldActive = cartProduct.isActive;
		cartProduct.isActive = isActive;

		return API.Catalog.Product.Cart.update({
			id: cartProduct.product.id,
			orderBag: cartProduct.orderBag,
			isActive
		})
			.catch(err => {
				cartProduct.isActive = oldActive;
				ProductForbiddenService.stateCartError(err);
			});
	}
}

export const productCartService = new ProductCartService();
