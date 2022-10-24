import API from "@/http/API";

export class AutoluxService {
	static getCities() {
		return API.Delivery.Driver.Autolux.getCities();
	}

	static getWarehouses(cityId: string) {
		return API.Delivery.Driver.Autolux.getWarehouses(cityId);
	}
}
