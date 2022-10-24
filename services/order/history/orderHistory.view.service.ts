import {DeliveryTrackingStatus, OrderHistory, OrderProcessingStatus} from "@models/order/history/orderHistory";
import {OrderBagViewService} from "@services/order/orderBag.view.service";
import {TipValPair} from "@shared/models/view";
import {translateService} from "@shared/services/translate/translate.service";
import {MethodViewService} from "@services/delivery/delivery.view.service";
import {ProductCalcInfoService} from "@services/product/productCalcInfo.service";
import {Money} from "@shared/models/money/money";
import {ProductFormatInfoService} from "@services/product/productFormatInfo.service";
import {DeliveryHistoryViewService} from "@services/delivery/history/deliveryHistory.view.service";
import {DictionaryWord} from "@shared/models/translate/types";

interface OrderHistoryInfoKeys {
	Manager: string | undefined;
	Recipient: string | undefined;
	Method: string | undefined;
	Address: string | undefined;
	Pod: string | undefined;
	DeliveryPays: string | undefined;
	Volume: string | undefined;
	Weight: string | undefined;
}

type TipMap = Record<keyof OrderHistoryInfoKeys, DictionaryWord>;

class OrderHistoryInfoExtractor implements OrderHistoryInfoKeys {
	get TTN(): string | undefined {
		return this.order.parcel?.id || undefined;
	}

	get Manager(): string | undefined {
		return this.order.managerUser?.FullName;
	}

	get Recipient(): string | undefined {
		return this.order.recipient.name.FullName;
	}

	get Method(): string | undefined {
		return new MethodViewService(this.order.delivery.method, this.order.delivery.driver).ViewMethod;
	}

	get Address(): string | undefined {
		return DeliveryHistoryViewService.getViewStrategy(this.order.delivery).toString();
	}

	get Pod(): string | undefined {
		return this.order.delivery.pod ? this.order.delivery.pod.amount + ' ' + this.order.delivery.pod.currency : '';
	}

	get DeliveryPays(): string | undefined {
		return this.order.delivery.isRecipientPaysDelivery ? translateService.getWord('recipientPays') : '';
	}

	get Volume(): string | undefined {
		const volume = this.order.parcel?.volume;
		return volume ? ProductFormatInfoService.formatVolume(volume)
			: ProductCalcInfoService.calcVolume(this.order.products);
	}

	get Weight(): string | undefined {
		const weight = this.order.parcel?.weight;
		return weight ? ProductFormatInfoService.formatWeight(weight)
			: ProductCalcInfoService.getWeight(this.order.products);
	}

	get TotalSum(): Money {
		return ProductCalcInfoService.calcTotalSum(this.order.products);
	}

	constructor(private order: OrderHistory) {
	}

	tipMap: TipMap = {
		Manager: 'completeManagerTip',
		Recipient: 'completeRecipientTip',
		Method: 'completeMethodTip',
		Address: 'completeAddressTip',
		Pod: 'completePodTip',
		DeliveryPays: 'completeDeliveryPaysTip',
		Volume: 'volume',
		Weight: 'weight',
	}

	get SpecList(): TipValPair[] {
		const dataList: TipValPair[] = [];
		Object.keys(this.tipMap).forEach(key => {
			if (this[key]) {
				dataList.push({
					tip: translateService.getWord(this.tipMap[key]),
					val: this[key]
				})
			}
		})
		return dataList;
	}
}

export class OrderHistoryViewService {
	Info: OrderHistoryInfoExtractor;

	constructor(public order: OrderHistory) {
		this.Info = new OrderHistoryInfoExtractor(order);
	}

	get Date() {
		return OrderHistoryViewService.calcDate(this.order.createdAt)
	}

	get OrderNumber(): string | null {
		return this.order.number;
	}

	get FullBagTitle() {
		return OrderBagViewService.getFullTitle(this.order.bag);
	}

	get BagTypeTitle() {
		return OrderBagViewService.getTypeTitle(this.order.bag);
	}

	get Status(): OrderProcessingStatus | DeliveryTrackingStatus {
		if (this.order.status === OrderProcessingStatus.shipment && this.order.deliveryTracking) {
			return this.order.deliveryTracking.status;
		}
		return this.order.status;
	}

	get DeliveryOrigin() {
		return this.order.delivery.origin
	}

	get ProductList() {
		return this.order.products;
	}

	private static calcDate(createdAt: number) {
		const date = new Date(createdAt * 1000);

		// getMonth() is zero-based
		const mm = date.getMonth() + 1;
		const dd = date.getDate();

		return [
			(dd > 9 ? '' : '0') + dd,
			(mm > 9 ? '' : '0') + mm,
			date.getFullYear()
		].join('.');
	}
}
