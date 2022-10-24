import {Jsonable} from "@shared/models/tools/tools";
import {
	ClassValidation,
	rule,
	myRequired
} from "@shared/models/validators";
import {maxLength, sameAs} from "@vuelidate/validators";

export class ApiTokenForm extends Jsonable<ApiTokenForm>() {
	name: string;

	validations(): ClassValidation<ApiTokenForm> {
		return {
			name: {
				myRequired,
				maxLength: rule('maxLength', maxLength(1024)),
			},
		}
	}
}
