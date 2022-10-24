import {CartProduct} from "@shared/models/product/product";
import {PartCartCheckoutForm} from "@models/chekout/checkout.form";
import {OrderBag, OrderBagPlain} from "@shared/models/product/types";
import {authService} from "@services/auth/auth.service";

class CartPartCheckoutFormService {
	constructor() {
		authService.currentToken.subscribe(token => {
			if (!token) this.clearState();
		});
	}

	private partCartCheckoutFormMap: Map<OrderBagPlain, PartCartCheckoutForm> = new Map<OrderBagPlain, PartCartCheckoutForm>();

	private storageKey: string = 'cartPartCheckoutData';

	private getUniqueOrderBags(cartList: CartProduct[]): OrderBag[] {
		const map: Map<OrderBagPlain, OrderBag> = new Map<OrderBagPlain, OrderBag>();
		cartList.forEach(el => map.set(el.orderBag.Plain, el.orderBag));
		return Array.from(map, ([key, val]) => val);
	}

	private buildNewForms(cartList: CartProduct[]): PartCartCheckoutForm[] {
		if (!cartList.length) return [];
		const bags = this.getUniqueOrderBags(cartList);
		const oldForms = this.getFromStorage();
		return bags.map(bag => this.buildForm(bag, oldForms.find(oldForm => bag.isEqual(oldForm.orderBag))));
	}

	// merged old form, if exists, with new built
	private buildForm(bag: OrderBag, oldForm?: PartCartCheckoutForm): PartCartCheckoutForm {
		return PartCartCheckoutForm.fromJson({
			isRecipientPaysDelivery: false,
			isPod: false,
			orderBag: bag,
			...oldForm
		})
	}

	private getFromStorage(): PartCartCheckoutForm[] {
		const rawStr = localStorage.getItem(this.storageKey);
		if (!rawStr) return [];
		const raw: Partial<PartCartCheckoutForm>[] = JSON.parse(rawStr);
		return PartCartCheckoutForm.fromJson(raw);
	}

	getState(cartList?: CartProduct[]): PartCartCheckoutForm[] {
		if (cartList && cartList.length) return this.buildNewForms(cartList);
		return this.getFromStorage();
	}

	saveState(forms: PartCartCheckoutForm[]) {
		localStorage.setItem(this.storageKey, JSON.stringify(forms))
	}

	clearState() {
		localStorage.removeItem(this.storageKey)
	}
}

export const cartPartCheckoutFormService = new CartPartCheckoutFormService();
