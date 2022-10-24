import {DeliveryTrackingStatus, OrderProcessingStatus} from "@models/order/history/orderHistory";
import {translateService} from "@shared/services/translate/translate.service";
import {DictionaryWord} from "@shared/models/translate/types";

type TranslateMap = Record<OrderProcessingStatus | DeliveryTrackingStatus, DictionaryWord>

export class OrderStatusViewService {
	private static translateMap: TranslateMap = {
		[OrderProcessingStatus.assembled]: 'assembledStatus',
		[OrderProcessingStatus.canceled]: 'canceledStatus',
		[OrderProcessingStatus.pending]: 'pendingStatus',
		[OrderProcessingStatus.transferred]: 'transferredStatus',
		[OrderProcessingStatus.collected]: 'collectedStatus',
		[OrderProcessingStatus.received]: 'receivedStatus',
		[OrderProcessingStatus.registered]: 'registeredStatus',
		[OrderProcessingStatus.shipment]: 'shipmentStatus',
		//==============================================
		[DeliveryTrackingStatus.shipped]: 'shippedStatus',
		[DeliveryTrackingStatus.received]: 'receivedStatus',
		[DeliveryTrackingStatus.canceled]: 'canceledStatus',
		[DeliveryTrackingStatus.delivered]: 'deliveredStatus',
	}

	static getTitle(status: OrderProcessingStatus | DeliveryTrackingStatus) {
		return translateService.getWord(this.translateMap[status]);
	}
}
