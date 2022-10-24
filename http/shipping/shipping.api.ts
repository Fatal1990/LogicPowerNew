import ServerApi from "@/_shared/http/abstract/serverApi";
import {DriverApi} from "@/http/shipping/driver/driver.api";

export class ShippingApi extends ServerApi {
	protected baseUrl = "shipping"

	Driver = new DriverApi(this);
}
