import ServerApi from "@/_shared/http/abstract/serverApi";
import {OrderApi} from "@/http/purchase/order/order.api";

export class PurchaseApi extends ServerApi {
	protected baseUrl = "purchase"

	Order = new OrderApi(this);
}
