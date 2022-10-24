import {Jsonable, PlainIgnore} from "@shared/models/tools/tools";
import {ClassValidation, myRequired,} from "@shared/models/validators";

export class UkrposhtaCourierForm extends Jsonable<UkrposhtaCourierForm>() {
	@PlainIgnore()
	regionId: string;

	cityId: string;
	streetId: string;
	house: string;
	flat: string;

	validations(): ClassValidation<UkrposhtaCourierForm> {
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

