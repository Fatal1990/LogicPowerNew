import {translateService} from "@shared/services/translate/translate.service";
import {DeliveryMethod} from "@models/delivery/method";
import {DeliveryDriver} from "@models/delivery/driver/driver";
import {TipValPair} from "@shared/models/view";
import {DeliveryHistory, OrderOriginStatus} from "@models/order/history/orderHistory";
import {MethodViewService} from "@services/delivery/delivery.view.service";
import {DictionaryWord} from "@shared/models/translate/types";

interface IDeliveryHistoryViewStrategyTipShortKeys {
	readonly Region: string | undefined;
	readonly City: string | undefined;
	readonly Street: string | undefined;
	readonly House: string | undefined;
	readonly Flat: string | undefined;
	readonly WarehouseName: string | undefined;

	readonly Postcode: string | undefined;
}

interface IDeliveryViewStrategyKeys extends IDeliveryHistoryViewStrategyTipShortKeys {
	readonly LocationWarehouseOrBafAddress: string | undefined;

	readonly Driver: string | undefined;
	readonly Method: string | undefined;
}

export interface IDeliveryViewStrategy extends IDeliveryViewStrategyKeys {
	readonly DataList: TipValPair[];

	toString(): string;
}

type ShortTipsMap = Record<keyof IDeliveryHistoryViewStrategyTipShortKeys, DictionaryWord>;
type TipMap = Record<keyof IDeliveryViewStrategyKeys, DictionaryWord>;

abstract class AbstractDeliveryHistoryViewStrategy implements IDeliveryViewStrategy {
	protected constructor(protected d: DeliveryHistory) {
	}

	protected shortTipMap: ShortTipsMap = {
		Region: "regionShortTip",
		City: "cityShortTip",
		Street: "streetShortTip",
		House: "houseShortTip",
		Flat: "flatShortTip",
		WarehouseName: "warehouseShortTip",
		Postcode: "postcodeShortTip",
	}

	protected tipMap: TipMap = {
		Method: "methodTip",
		Driver: "driverTip",
		Region: "regionTip",
		City: "cityTip",
		Street: "streetTip",
		House: "houseTip",
		Flat: "flatTip",
		WarehouseName: "warehouseTip",
		LocationWarehouseOrBafAddress: "locationTip",
		Postcode: "postcodeTip"
	}

	get Driver(): string | undefined {
		return translateService.getWord(this.d.driver);
	}

	get Method() {
		return new MethodViewService(this.d.method, this.d.driver).ViewMethod;
	}

	get Region() {
		return this.d.address.region ? this.d.address.region.Value : undefined
	}

	get City() {
		return this.d.address.city ? this.d.address.city.Value : undefined
	}

	get Street() {
		return this.d.address.street ? this.d.address.street.Value : undefined
	}

	get House() {
		return this.d.address.house || undefined
	}

	get Flat() {
		return this.d.address.flat || undefined;
	}

	get WarehouseName() {
		const dataList: any[] = [];
		dataList.push(this.d.address.warehouse?.Value);
		dataList.push(this.d.address.location?.Value);

		return dataList.filter(el => el).join(' - ');
	}

	get LocationWarehouseOrBafAddress() {
		return this.d.address.location ? this.d.address.location.Value : undefined;
	}

	get Postcode() {
		return this.d.address.postcode ? this.d.address.postcode.Value : undefined;
	}

	get ShortDataList() {
		const dataList: string[] = [];

		Object.keys(this.shortTipMap).forEach(key => {
			if (this[key]) {
				const tipWithData = translateService.getWord(this.shortTipMap[key], {$params: {val: this[key]}});
				dataList.push(tipWithData);
			}
		})

		return dataList;
	}

	get DataList(): TipValPair[] {
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

	toString() {
		return this.ShortDataList.join(', ');
	}
}

class DefaultDriverDeliveryViewStrategy extends AbstractDeliveryHistoryViewStrategy {
	constructor(d: DeliveryHistory) {
		super(d);
	}

	get ShortDataList() {
		const dataList: string[] = [];
		this.Driver && dataList.push(this.Driver);
		return dataList.concat(...super.ShortDataList);
	}
}

class LogicPowerDeliveryHistoryViewStrategy extends AbstractDeliveryHistoryViewStrategy {
	constructor(d: DeliveryHistory) {
		super(d);
	}

	get Driver() {
		return undefined
	}

	get Region() {
		return undefined
	}

	get City() {
		return undefined
	}

	get ShortDataList() {
		const dataList: string[] = [];
		if (this.d.method === DeliveryMethod.warehouse)
			dataList.push(translateService.getWord('pickupMethod'))
		else if (this.d.method === DeliveryMethod.courier)
			dataList.push(translateService.getWord('deliveryWithinOdessaMethod'))

		return dataList.concat(...super.ShortDataList);
	}
}

class BafDeliveryHistoryViewStrategy extends AbstractDeliveryHistoryViewStrategy {
	constructor(d: DeliveryHistory) {
		super(d);
	}

	get DataList(): TipValPair[] {
		const dataList: TipValPair[] = [];

		dataList.push({
			tip: translateService.getWord(this.tipMap["LocationWarehouseOrBafAddress"]),
			val: this.LocationWarehouseOrBafAddress || ' - '
		})

		return dataList;
	}

	get ShortDataList() {
		const dataList: string[] = [];

		dataList.push(translateService.getWord('warehouseShortTip', {$params: {val: this.LocationWarehouseOrBafAddress || ' - '}}))

		return dataList;
	}
}

export class DeliveryHistoryViewService {
	static getViewStrategy(d: DeliveryHistory): IDeliveryViewStrategy {
		if (d.origin === OrderOriginStatus.baf) {
			return new BafDeliveryHistoryViewStrategy(d);
		}

		if (d.driver === DeliveryDriver.logicPower) {
			return new LogicPowerDeliveryHistoryViewStrategy(d);
		}

		return new DefaultDriverDeliveryViewStrategy(d);
	}

	static getFullName(d: DeliveryHistory) {
		const strategy: IDeliveryViewStrategy = this.getViewStrategy(d);
		return strategy.toString();
	}
}
