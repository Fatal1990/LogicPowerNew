import {UkrposhtaCourierForm} from "@models/delivery/driver/ukrposhta/ukrposhtaCourier.form";
import {UkrposhtaWarehouseForm} from "@models/delivery/driver/ukrposhta/ukrposhtaWarehouse.form";
import {AutoluxCourierForm} from "@models/delivery/driver/autolux/autoluxCourierForm";
import {AutoluxWarehouseForm} from "@models/delivery/driver/autolux/autoluxWarehouse.form";
import {DeliveryWarehouseForm} from "@models/delivery/driver/delivery/deliveryWarehouse.form";
import {DeliveryCourierForm} from "@models/delivery/driver/delivery/deliveryCourier.form";
import {NovaPoshtaWarehouseForm} from "@models/delivery/driver/novaPoshta/novaPoshtaWarehouse.form";
import {NovaPoshtaCourierForm} from "@models/delivery/driver/novaPoshta/novaPoshtaCourier.form";
import {LogicPowerWarehouseForm} from "@models/delivery/driver/logicpower/logicPowerWarehouse.form";
import {LogicPowerCourierForm} from "@models/delivery/driver/logicpower/logicPowerCourier.form";

export enum DeliveryDriver {
	novaPoshta = 'novaPoshta',
	delivery = 'delivery',
	autolux = 'autolux',
	ukrposhta = 'ukrposhta',
	logicPower = 'logicPower'
}

export enum ViewDeliveryDriver {
	novaPoshta = 'novaPoshta',
	delivery = 'delivery',
	autolux = 'autolux',
	ukrposhta = 'ukrposhta',
}

export type DriverForm =
	UkrposhtaWarehouseForm | UkrposhtaCourierForm |
	AutoluxWarehouseForm | AutoluxCourierForm |
	DeliveryWarehouseForm | DeliveryCourierForm |
	NovaPoshtaWarehouseForm | NovaPoshtaCourierForm |
	LogicPowerWarehouseForm | LogicPowerCourierForm;
