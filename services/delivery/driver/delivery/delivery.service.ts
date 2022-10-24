import API from "@/http/API";

export class DeliveryService {
	static getRegions() {
		return API.Delivery.Driver.Delivery.getRegions();
	}

	static getCities(regionId: string) {
		return API.Delivery.Driver.Delivery.getCities(regionId);
	}

	static getWarehouses(cityId: string) {
		return API.Delivery.Driver.Delivery.getWarehouses(cityId);
	}
}
