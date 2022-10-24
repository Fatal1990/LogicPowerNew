import {Jsonable, PlainIgnore} from "@shared/models/tools/tools";
import {ClassValidation, myRequired} from "@shared/models/validators";

export class AutoluxWarehouseForm extends Jsonable<AutoluxWarehouseForm>() {
	@PlainIgnore()
	cityId: string;
	warehouseId: string;

	validations(): ClassValidation<AutoluxWarehouseForm> {
		return {
			cityId: {
				myRequired
			},
			warehouseId: {
				myRequired
			},
		}
	}
}
