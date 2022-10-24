import {OrderHistory, ProductHistory} from "@models/order/history/orderHistory";
import {OrderBag, OrderBagType} from "@shared/models/product/types";
import {productCartService} from "@services/cart/productCart.service";

export class OrderCopyService {
	static copyToCart(orderHistory: OrderHistory) {
		return Promise.all(orderHistory.products.map(el => this.addProductToCart(el, orderHistory.bag)));
	}

	private static getOrderBag(product: ProductHistory, bag: OrderBag): OrderBag | undefined {
		const bags = product.product.orderBags;
		if (!bags.length) return undefined;
		const preOrderBag = bags.find(el => el.type === OrderBagType.PreOrder);
		return bags.find(el => bag.isEqual(el)) || preOrderBag;
	}

	private static addProductToCart(product: ProductHistory, oldBag: OrderBag) {
		const orderBag = this.getOrderBag(product, oldBag);
		if (!orderBag) return;
		return productCartService.changeQuantity(product.product, product.quantity, orderBag)
	}
}
