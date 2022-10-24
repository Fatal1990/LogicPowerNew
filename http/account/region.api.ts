import ServerApi from "@/_shared/http/abstract/serverApi";
import {Region} from "@shared/models/region";

export class RegionApi extends ServerApi {
	protected baseUrl = 'region';

	getCurrentRegion(): Promise<Region> {
		return this.get('current', {requireAuth: false}).then(({data}) => {
			return Region.fromJson(data as object);
		});
	}

	getGetRegionList(): Promise<Region[]> {
		return this.get('list', {requireAuth: false}).then(({data}) => {
			return Region.fromJson(data as []);
		});
	}
}
