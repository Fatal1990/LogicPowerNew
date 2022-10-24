import ServerApi from "@/_shared/http/abstract/serverApi";
import {Street, Warehouse} from "@models/delivery/delivery";

export class LogicPowerApi extends ServerApi {
	protected baseUrl = "logicPower/address"

	getStreets(): Promise<Street[]> {
		return this.get('streets')
			.then(({data}) => Street.fromJson(data as []));
	}

	getWarehouses(): Promise<Warehouse[]> {
		return this.get('warehouses')
			.then(({data}) => Warehouse.fromJson(data as []));
	}
}
