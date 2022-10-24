import {Jsonable} from "@shared/models/tools/tools";
import {ClassValidation, myRequired} from "@shared/models/validators";

export class UkrposhtaWarehouseForm extends Jsonable<UkrposhtaWarehouseForm>() {
	warehouseId: string

	validations(): ClassValidation<UkrposhtaWarehouseForm> {
		return {
			warehouseId: {
				myRequired
			},
		}
	}
}
