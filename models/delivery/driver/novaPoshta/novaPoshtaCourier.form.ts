import {Jsonable, PlainIgnore} from "@shared/models/tools/tools";
import {ClassValidation, myRequired} from "@shared/models/validators";

export class NovaPoshtaCourierForm extends Jsonable<NovaPoshtaCourierForm>() {
	@PlainIgnore()
	regionId: string;

	cityId: string;
	streetId: string;
	house: string;
	flat: string;

	validations(): ClassValidation<NovaPoshtaCourierForm> {
		return {
			regionId: {
				myRequired
			},
			cityId: {
				myRequired
			},
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

