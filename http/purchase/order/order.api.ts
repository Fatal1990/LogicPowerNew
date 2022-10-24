import ServerApi from "@/_shared/http/abstract/serverApi";
import {HttpCheckoutPost} from "@models/chekout/http";
import {OrderHistory} from "@models/order/history/orderHistory";

export class OrderApi extends ServerApi {
	protected baseUrl = "order"

	checkout(forms: HttpCheckoutPost[]): Promise<Partial<OrderHistory>[]> {
		return this.post('checkout', forms)
			.then(res => {
				return res.data;
			});
	}

	getList(): Promise<Partial<OrderHistory>[]> {
		return this.get('list')
			.then(res => {
				return res.data;
			});
	}
}
