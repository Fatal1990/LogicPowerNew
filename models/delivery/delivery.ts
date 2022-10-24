import {Type} from "class-transformer";
import {Region} from "@shared/models/region";
import {ILocaleableValue, Jsonable} from "@shared/models/tools/tools";
import {DeliveryMethod} from "@models/delivery/method";
import {DeliveryDriver} from "@models/delivery/driver/driver";
import {DeliveryViewService} from "@services/delivery/delivery.view.service";
import {WarehouseViewService} from "@services/delivery/warehouse.view.service";
import {LocaleableValue} from "@shared/models/translate/localeableValue";

export class Delivery {
	id: string;
	driver: DeliveryDriver;
	method: DeliveryMethod;

	isActive: boolean = false;

	@Type(() => MethodData)
	methodData: MethodData;

	get FullName() {
		return DeliveryViewService.getFullName(this);
	}
}

export class City extends Jsonable<City>() {
	id: string;

	@ILocaleableValue()
	name: LocaleableValue;
}

export class Street extends Jsonable<Street>() {
	id: string;

	@ILocaleableValue()
	name: LocaleableValue;
}

export class Warehouse extends Jsonable<Warehouse>() {
	id: string;

	@ILocaleableValue()
	name: LocaleableValue;

	@ILocaleableValue()
	address: LocaleableValue;

	maxWeight: number | null;

	get Title() {
		return WarehouseViewService.getTitle(this);
	}
}

export class MethodData {
	@Type(() => Region)
	region?: Region;

	@Type(() => City)
	city?: City;

	@Type(() => Warehouse)
	warehouse?: Warehouse;

	@Type(() => Street)
	street?: Street;

	house?: string;
	flat: string | null;
}
