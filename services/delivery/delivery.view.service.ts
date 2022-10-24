import {Delivery} from "@models/delivery/delivery";
import {translateService} from "@shared/services/translate/translate.service";
import {RecipientDeliveryForm} from "@models/delivery/recipientDelivery.form";
import {DeliveryMethod, ViewDeliveryMethod} from "@models/delivery/method";
import {DeliveryDriver} from "@models/delivery/driver/driver";
import {TipValPair} from "@shared/models/view";
import {isExist} from "@shared/models/view/tools";
import {DictionaryWord} from "@shared/models/translate/types";

interface IDeliveryViewStrategyTipShortKeys {
	readonly Region: string | undefined;
	readonly City: string | undefined;
	readonly Street: string | undefined;
	readonly House: string | undefined;
	readonly Flat: string | undefined;
	readonly Warehouse: string | undefined;
	readonly Weight: string | undefined;
}

interface IDeliveryViewStrategyKeys extends IDeliveryViewStrategyTipShortKeys {
	readonly Driver: string | undefined;
	readonly Method: string | undefined;
}

export interface IDeliveryViewStrategy extends IDeliveryViewStrategyKeys {
	readonly DataList: TipValPair[];

	toString(): string;
}

type ShortTipsMap = Record<keyof IDeliveryViewStrategyTipShortKeys, DictionaryWord>;
type TipMap = Record<keyof IDeliveryViewStrategyKeys, DictionaryWord>;

abstract class AbstractDeliveryViewStrategy implements IDeliveryViewStrategy {
	protected constructor(protected d: Delivery) {
	}

	protected shortTipMap: ShortTipsMap = {
		Region: "regionShortTip",
		City: "cityShortTip",
		Street: "streetShortTip",
		House: "houseShortTip",
		Flat: "flatShortTip",
		Warehouse: "warehouseShortTip",
		Weight: "warehouseWeightShortTip",
	}

	protected tipMap: TipMap = {
		Method: "methodTip",
		Driver: "driverTip",
		Region: "regionTip",
		City: "cityTip",
		Street: "streetTip",
		House: "houseTip",
		Flat: "flatTip",
		Warehouse: "warehouseTip",
		Weight: "warehouseWeightTip",
	}

	get Driver(): string | undefined {
		return translateService.getWord(this.d.driver);
	}

	get Method() {
		return new MethodViewService(this.d.method, this.d.driver).ViewMethod;
	}

	get Region() {
		return this.d.methodData.region ? this.d.methodData.region.name.Value : undefined
	}

	get City() {
		return this.d.methodData.city ? this.d.methodData.city.name.Value : undefined
	}

	get Street() {
		return this.d.methodData.street ? this.d.methodData.street.name.Value : undefined
	}

	get House() {
		return this.d.methodData.house || undefined
	}

	get Flat() {
		return this.d.methodData.flat || undefined;
	}

	get Warehouse() {
		return this.d.methodData.warehouse ? this.d.methodData.warehouse.name + ' - ' + this.d.methodData.warehouse.address : undefined;
	}

	get Weight() {
		return this.d.methodData.warehouse && isExist(this.d.methodData.warehouse.maxWeight) ? this.d.methodData.warehouse.maxWeight.toString() : undefined;
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

class DefaultDriverDeliveryViewStrategy extends AbstractDeliveryViewStrategy {
	constructor(d: Delivery) {
		super(d);
	}

	get ShortDataList() {
		const dataList: string[] = [];
		this.Driver && dataList.push(this.Driver);
		return dataList.concat(...super.ShortDataList);
	}
}

class LogicPowerDriverDeliveryViewStrategy extends AbstractDeliveryViewStrategy {
	constructor(d: Delivery) {
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

type PartialForm = Pick<RecipientDeliveryForm, 'method'> & Partial<Pick<RecipientDeliveryForm, 'driver'>>;
type MethodMap = Record<ViewDeliveryMethod, PartialForm>;

export class DeliveryViewService {
	private static methodMap: MethodMap = {
		[ViewDeliveryMethod.warehouse]: {
			method: DeliveryMethod.warehouse
		},
		[ViewDeliveryMethod.courier]: {
			method: DeliveryMethod.courier
		},
		[ViewDeliveryMethod.pickup]: {
			method: DeliveryMethod.warehouse,
			driver: DeliveryDriver.logicPower
		},
		[ViewDeliveryMethod.deliveryWithinOdessa]: {
			method: DeliveryMethod.courier,
			driver: DeliveryDriver.logicPower
		}
	}

	static configureFormWithViewDeliveryMethod(form: RecipientDeliveryForm, val: ViewDeliveryMethod): RecipientDeliveryForm {
		if (!val) return form;

		form.method = this.methodMap[val].method;
		if (this.methodMap[val].driver) form.driver = this.methodMap[val].driver!;

		return form;
	}

	static getViewStrategy(d: Delivery): IDeliveryViewStrategy {
		if (d.driver === DeliveryDriver.logicPower) {
			return new LogicPowerDriverDeliveryViewStrategy(d);
		}

		return new DefaultDriverDeliveryViewStrategy(d);
	}

	static getFullName(d: Delivery) {
		const strategy: IDeliveryViewStrategy = this.getViewStrategy(d);
		return strategy.toString();
	}
}

export class MethodViewService {
	constructor(private method: DeliveryMethod, private driver: DeliveryDriver) {
	}

	get ViewMethod(): string {
		let method = '';
		/// TODO рефактор, сделай через map
		/// Подумай о двухсторонней трансформации
		if (this.driver === DeliveryDriver.logicPower) {
			if (this.method === DeliveryMethod.warehouse)
				method = translateService.getWord('pickupMethod');
			else if (this.method === DeliveryMethod.courier)
				method = translateService.getWord('deliveryWithinOdessaMethod');
		} else {
			if (this.method === DeliveryMethod.warehouse)
				method = translateService.getWord('warehouseMethod');
			else if (this.method === DeliveryMethod.courier)
				method = translateService.getWord('courierMethod');
		}

		return method;
	}
}
