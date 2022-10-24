import ServerApi from "@/_shared/http/abstract/serverApi";
import {Region} from "@shared/models/region";
import {City, Street} from "@models/delivery/delivery";

export class UkrposhtaApi extends ServerApi {
	protected baseUrl = "ukrposhta/address"

	getRegions(): Promise<Region[]> {
		return this.get('regions')
			.then(({data}) => Region.fromJson(data as []));
	}

	getCities(regionId: string): Promise<City[]> {
		return this.get('cities', {
			params: {regionId}
		})
			.then(({data}) => City.fromJson(data as []));
	}

	getStreets(cityId: string): Promise<Street[]> {
		return this.get('streets', {
			params: {cityId}
		})
			.then(({data}) => Street.fromJson(data as []));
	}
}
