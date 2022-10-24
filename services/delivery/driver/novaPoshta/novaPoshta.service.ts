import API from "@/http/API";

export class NovaPoshtaService {
	static getRegions() {
		return API.Delivery.Driver.NovaPoshta.getRegions();
	}

	static getCities(regionId: string) {
		return API.Delivery.Driver.NovaPoshta.getCities(regionId);
	}

	static getStreets(cityId: string) {
		return API.Delivery.Driver.NovaPoshta.getStreets(cityId);
	}

	static getWarehouses(cityId: string) {
		return API.Delivery.Driver.NovaPoshta.getWarehouses(cityId);
	}
}
