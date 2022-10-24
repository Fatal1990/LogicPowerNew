import ServerApi from "@/_shared/http/abstract/serverApi";
import {Maintenance} from "@models/maintenance";

export class MaintenanceApi extends ServerApi {
	protected baseUrl = "maintenanceMode"

	getMode(): Promise<Maintenance> {
		return this.get('', {requireAuth: false})
			.then(({data}) => Maintenance.fromJson(data as object));
	}
}
