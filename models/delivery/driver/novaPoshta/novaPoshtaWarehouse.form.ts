import {Jsonable, PlainIgnore} from "@shared/models/tools/tools";
import {ClassValidation, myRequired} from "@shared/models/validators";

export class NovaPoshtaWarehouseForm extends Jsonable<NovaPoshtaWarehouseForm>() {
	@PlainIgnore()
	regionId: string;

	cityId: string;
	warehouseId: string;

	validations(): ClassValidation<NovaPoshtaWarehouseForm> {
		return {
			regionId: {
				myRequired
			},
			cityId: {
				myRequired
			},
			warehouseId: {
				myRequired
			},
		}
	}
}
