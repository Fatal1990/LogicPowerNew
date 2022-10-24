import API from "@/http/API";

export class LogicPowerService {
	static getStreets() {
		return API.Delivery.Driver.LogicPower.getStreets();
	}

	static getWarehouses() {
		return API.Delivery.Driver.LogicPower.getWarehouses();
	}
}
