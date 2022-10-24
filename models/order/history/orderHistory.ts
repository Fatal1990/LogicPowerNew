import {OrderBag} from "@shared/models/product/types";
import {Product} from "@shared/models/product/product";
import {Money} from "@shared/models/money/money";
import {ILocaleableValue, Jsonable} from "@shared/models/tools/tools";
import {Company} from "@/models/user/user";
import {PersonNames} from "@/models/user/types";
import {Type} from "class-transformer";
import {DeliveryDriver} from "@models/delivery/driver/driver";
import {DeliveryMethod} from "@models/delivery/method";
import {ProductViewService} from "@shared/services/product/product.view.service";
import {Manager} from "@models/manager/manager";
import {LocaleableValue} from "@shared/models/translate/localeableValue";

export enum OrderOriginStatus {
	b2b = 'b2b',
	baf = "baf"
}

export enum OrderProcessingStatus {
	pending = 'pending', // В обработке
	registered = 'registered', // Принят
	canceled = 'canceled', // Отменён
	transferred = 'transferred', // Передан на склад
	collected = 'collected', // Сборка
	assembled = 'assembled', // Собран
	shipment = 'shipment', // Ожидает отправки
	received = 'received' // Получен
}

export enum DeliveryTrackingStatus {
	shipped = 'shipped', // Отправлен
	delivered = 'delivered', // Доставлен
	canceled = 'canceled', // Отменён
	received = 'received' // Получен
}

export class DeliveryTracking {
	status: DeliveryTrackingStatus;
	updatedAt: number;
}

export class OrderHistory extends Jsonable<OrderHistory>() {
	id: string;
	createdAt: number;
	number: string | null;

	status: OrderProcessingStatus;

	@Type(() => OrderBag)
	bag: OrderBag;

	@Type(() => RecipientHistory)
	recipient: RecipientHistory;

	@Type(() => DeliveryHistory)
	delivery: DeliveryHistory;

	@Type(() => DeliveryTracking)
	deliveryTracking: DeliveryTracking;

	@Type(() => Parcel)
	parcel: Parcel | null;

	@Type(() => Manager)
	managerUser: Manager | null;

	note: string;

	@Type(() => ProductHistory)
	products: ProductHistory[];
}

export class RecipientHistory {
	@Type(() => Company)
	company: Company;
	phone: string;

	@Type(() => PersonNames)
	name: PersonNames;
}

export class AddressHistory {
	@ILocaleableValue() region: LocaleableValue | null;
	@ILocaleableValue() city: LocaleableValue | null;
	@ILocaleableValue() street: LocaleableValue | null;
	@ILocaleableValue() location: LocaleableValue | null;
	@ILocaleableValue() warehouse: LocaleableValue | null;
	@ILocaleableValue() postcode: LocaleableValue | null;

	house: string | null;
	flat: string | null;
}

export class DeliveryHistory {
	origin: OrderOriginStatus;
	driver: DeliveryDriver;
	method: DeliveryMethod;

	isRecipientPaysDelivery: boolean;
	pod: Money | null;

	@Type(() => AddressHistory)
	address: AddressHistory;
}

export class Parcel {
	id: string | null;
	weight: number | null;
	volume: number | null;
	places: number | null;
}

export class ProductHistory {
	quantity: number;
	serialNumbers: string[];

	price: Money;

	@Type(() => Product)
	product: Product;

	get TotalSum() {
		return ProductViewService.getTotalForMe(this);
	}
}

