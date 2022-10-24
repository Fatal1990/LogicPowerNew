import {Jsonable, PlainIgnore} from "@shared/models/tools/tools";
import {ClassValidation, myRequired} from "@shared/models/validators";

export class LogicPowerCourierForm extends Jsonable<LogicPowerCourierForm>() {
	streetId: string;
	house: string;
	flat: string;

	validations(): ClassValidation<LogicPowerCourierForm> {
		return {
			streetId: {
				myRequired
			},
			house: {
				myRequired
			},
			flat: {

			},
		}
	}
}

