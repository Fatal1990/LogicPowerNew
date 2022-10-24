import ServerApi from "@/_shared/http/abstract/serverApi";
import {UkrposhtaApi} from "@/http/shipping/driver/ukrposhta/ukrposhta.api";
import {AutoluxApi} from "@/http/shipping/driver/autolux/autolux.api";
import {DeliveryApi} from "@/http/shipping/driver/delivery/delivery.api";
import {NovaPoshtaApi} from "@/http/shipping/driver/novaPoshta/novaPoshta.api";
import {LogicPowerApi} from "@/http/shipping/driver/logicPower/logicPower.api";

export class DriverApi extends ServerApi {
	protected baseUrl = "driver"

	Ukrposhta = new UkrposhtaApi(this);
	Autolux = new AutoluxApi(this);
	Delivery = new DeliveryApi(this);
	NovaPoshta = new NovaPoshtaApi(this);
	LogicPower = new LogicPowerApi(this);
}
