import API from "@/http/API";
import {OrderHistory} from "@models/order/history/orderHistory";

export class OrderHistoryRepository {
	static findAll(): Promise<OrderHistory[]> {
		return API.Purchase.Order.getList()
			.then(list => {
				return OrderHistory.fromJson(list)
			});
	}
}
