import {Jsonable, PlainIgnore, PlainNoSpace} from "@shared/models/tools/tools";
import {
	usreouRegExp,
	ruleRegExp,
	myRequired,
	ClassValidation,
	rule,
	tinRegExp
	, noSpaces, standardStrLength, phone
} from "@/_shared/models/validators";
import {requiredIf} from "@vuelidate/validators";
import {TAX_STATUS} from "@models/logReg";

export class RecipientForm extends Jsonable<RecipientForm>() {
	firstName: string;
	middleName: string;
	lastName: string;

	@PlainNoSpace() phone: string;

	companyTaxStatus: TAX_STATUS;
	companyItn: string;

	companyName: string;
	companyUsreou: string;

	validations(): ClassValidation<RecipientForm> {
		return {
			phone: {
				myRequired,
				...phone()
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

			companyTaxStatus: {
				myRequired,
			},

			companyName: {
				standardStrLength,
				requiredIf: rule('requiredField', requiredIf(() => {
					return !!(this.companyItn || this.companyUsreou);
				}))
			},

			companyUsreou: {
				format: ruleRegExp('usreouRegExp', usreouRegExp),
				requiredIf: rule('requiredField', requiredIf(() => {
					if (this.companyTaxStatus === TAX_STATUS.legalEntity) {
						this.companyItn = '';
						return true;
					}
					return false;
				}))
			},
			companyItn: {
				format: ruleRegExp('tinRegExp', tinRegExp),
			},
		}
	}
}
