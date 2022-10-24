import {Jsonable, PlainIgnore, PlainNoSpace, PlainNoTrim} from "@shared/models/tools/tools";
import {
	ClassValidation,
	email,
	phone,
	password,
	myRequired,
	noSpaces,
	rule,
	standardStrLength,
} from "@shared/models/validators";
import {sameAs} from "@vuelidate/validators";

export class ManagerForm extends Jsonable<ManagerForm>() {
	email: string;
	@PlainNoSpace() phone: string;

	@PlainNoTrim() password: string;
	@PlainIgnore() confirmPassword: string;

	firstName: string;
	middleName: string;
	lastName: string;

	validations(): ClassValidation<ManagerForm> {
		return {
			email: {
				myRequired,
				...email()
			},
			phone: {
				myRequired,
				...phone()
			},
			password: {
				myRequired,
				...password(),
			},

			confirmPassword: {
				myRequired,
				sameAsPassword: rule('passwordMatch', sameAs(this.password))
			},

			firstName: {
				myRequired,
				noSpaces,
				standardStrLength
			},
			lastName: {
				myRequired,
				noSpaces,
				standardStrLength
			},
			middleName: {
				noSpaces,
				standardStrLength
			},
		}
	}
}
