import API from "@/http/API";

export class UkrposhtaService {
	static getRegions() {
		return API.Delivery.Driver.Ukrposhta.getRegions();
	}

	static getCities(regionId: string) {
		return API.Delivery.Driver.Ukrposhta.getCities(regionId);
	}

	static getStreets(cityId: string) {
		return API.Delivery.Driver.Ukrposhta.getStreets(cityId);
	}
}
