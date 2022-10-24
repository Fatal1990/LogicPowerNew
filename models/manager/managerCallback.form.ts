import {Jsonable} from "@shared/models/tools/tools";
import {ClassValidation, myRequired, phone} from "@shared/models/validators";

export class ManagerCallbackForm extends Jsonable<ManagerCallbackForm>() {
	phone: string;

	validations(): ClassValidation<ManagerCallbackForm> {
		return {
			phone: {
				myRequired,
				...phone()
			},
		}
	}
}
