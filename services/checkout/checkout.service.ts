import {CheckoutForm, PartCartCheckoutForm, PartCheckoutForm} from "@models/chekout/checkout.form";
import {reactive} from "vue";
import API from "@/http/API";
import {HttpCheckoutPost} from "@models/chekout/http";
import {OrderHistory} from "@models/order/history/orderHistory";
import {Currency} from "@shared/models/money/currency";
import {cartPartCheckoutFormService} from "@services/cart/cartPartCheckoutForm.service";
import {productCartService} from "@services/cart/productCart.service";

export class CheckoutService {
	static isInited: boolean = false;

	static init(): void {
		this.isInited = true;
	}

	static clearState() {
		this.isInited = false;
	}

	static getCartForms(): PartCartCheckoutForm[] {
		return reactive(cartPartCheckoutFormService.getState(productCartService.getCurrList()));
	}

	private static buildPartCheckoutForms(): Partial<CheckoutForm>[] {
		return this.getCartForms().map((value) => {
			return CheckoutForm.fromJson({
				isRecipientPaysDelivery: value.isRecipientPaysDelivery,
				pod: value.podAmount ? {
					amount: value.podAmount,
					currency: Currency.UAH
				} : null,
				orderBag: value.orderBag,
				note: value.note,
			})
		})
	}

	private static buildForms(partCheckoutForm: PartCheckoutForm): CheckoutForm[] {
		return this.buildPartCheckoutForms().map(partCartForm =>
			CheckoutForm.fromJson({
				...partCartForm,
				...PartCheckoutForm.toJson(partCheckoutForm)
			})
		);

	}

	static checkout(form: PartCheckoutForm): Promise<void> {
		const fullForms: CheckoutForm[] = this.buildForms(form);
		const httpForms: HttpCheckoutPost[] = fullForms.map(el => CheckoutForm.toJson(el)) as HttpCheckoutPost[];

		return API.Purchase.Order.checkout(httpForms)
			.then((httpOrderCompleteList) => {
				CheckoutCompleteService.init(httpOrderCompleteList);
				cartPartCheckoutFormService.clearState();
			})
	}
}

export class CheckoutCompleteService {
	static completeOrderList: OrderHistory[] = [];
	static isInit: boolean = false;

	static init(rawCompleteOrderList: Partial<OrderHistory>[]) {
		this.completeOrderList = OrderHistory.fromJson(rawCompleteOrderList);
		this.isInit = true;
	}

	static clearState() {
		this.completeOrderList = [];
		this.isInit = false;
	}
}
