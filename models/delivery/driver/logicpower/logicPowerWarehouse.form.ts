import {Jsonable, PlainIgnore} from "@shared/models/tools/tools";
import {ClassValidation, myRequired} from "@shared/models/validators";

export class LogicPowerWarehouseForm extends Jsonable<LogicPowerWarehouseForm>() {
	warehouseId: string;

	validations(): ClassValidation<LogicPowerWarehouseForm> {
		return {
			warehouseId: {
				myRequired
			},
		}
	}
}
