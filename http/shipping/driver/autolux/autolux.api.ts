import ServerApi from "@/_shared/http/abstract/serverApi";
import {City, Warehouse} from "@models/delivery/delivery";

export class AutoluxApi extends ServerApi {
	protected baseUrl = "autolux/address"

	getCities(): Promise<City[]> {
		return this.get('cities')
			.then(({data}) => City.fromJson(data as []));
	}

	getWarehouses(cityId: string): Promise<Warehouse[]> {
		return this.get('warehouses', {
			params: {cityId}
		})
			.then(({data}) => Warehouse.fromJson(data as []));
	}
}
