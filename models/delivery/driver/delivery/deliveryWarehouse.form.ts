import {Jsonable, PlainIgnore} from "@shared/models/tools/tools";
import {ClassValidation, myRequired} from "@shared/models/validators";

export class DeliveryWarehouseForm extends Jsonable<DeliveryWarehouseForm>() {
	@PlainIgnore()
	regionId: string;

	@PlainIgnore()
	cityId: string;

	warehouseId: string;

	validations(): ClassValidation<DeliveryWarehouseForm> {
		return {
			regionId: {myRequired},
			cityId: {myRequired},
			warehouseId: {
				myRequired
			},
		}
	}
}
