import {PlainIgnore, Jsonable, PlainNoSpace, PlainNoTrim, PlainLang} from "@/_shared/models/tools/tools";
import {requiredIf, sameAs} from "@vuelidate/validators";
import {
	usreouRegExp,
	email,
	ruleRegExp,
	myRequired,
	ClassValidation,
	rule,
	tinRegExp,
	password, noSpaces, mustBeTrue, correctUrl, standardStrLength, phone
} from "@/_shared/models/validators";
import {Expose, Transform} from "class-transformer";

export enum TAX_STATUS {
	legalEntity = 'legalEntity',
	individual = 'individual',
	individualEntrepreneur = 'individualEntrepreneur'
}

export class RegForm extends Jsonable<RegForm>() {
	companyName: string;

	email: string;
	@PlainNoSpace() phone: string;

	@PlainNoTrim() password: string;
	@PlainIgnore() confirmPassword: string;

	firstName: string;
	middleName: string;
	lastName: string;

	@PlainLang() locale: string;

	companyTaxStatus: TAX_STATUS;
	companyUsreou: string;
	companyItn: string;

	companyUrl: string;
	companyRegionId: string;

	@PlainIgnore() agreePolicy: boolean;

	validations(): ClassValidation<RegForm> {
		return {
			email: {
				myRequired,
				...email(),
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

			locale: {},

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
				myRequired,
				noSpaces,
				standardStrLength
			},

			companyName: {
				myRequired,
				standardStrLength
			},

			companyTaxStatus: {
				myRequired,
			},

			companyUsreou: {
				// myRequired,
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
				// myRequired,
				format: ruleRegExp('tinRegExp', tinRegExp),
				requiredIf: rule('requiredField', requiredIf(() => {
					if (this.companyTaxStatus === TAX_STATUS.individual ||
						this.companyTaxStatus === TAX_STATUS.individualEntrepreneur) {
						this.companyUsreou = '';
						return true;
					}
					return false;
				}))
			},

			companyUrl: {
				...correctUrl()
			},

			companyRegionId: {},

			agreePolicy: {
				mustBeTrue: mustBeTrue('requiredAgree')
			}
		}
	}
}

export class LogForm extends Jsonable<LogForm>() {
	emailOrPhone: string;
	@PlainNoTrim() password: string;

	@Expose()
	@Transform(() => false, {toClassOnly: true})
	isRapidExpiration: boolean;


	validations(): ClassValidation<LogForm> {
		return {
			emailOrPhone: {
				myRequired,
			},
			password: {
				myRequired,
			},
			isRapidExpiration: {},
		}
	}
}

export class StartPasswordResetForm extends Jsonable<StartPasswordResetForm>() {
	emailOrPhone: string;

	validations(): ClassValidation<StartPasswordResetForm> {
		return {
			emailOrPhone: {
				myRequired,
			},
		}
	}
}

export class FinishPasswordResetForm extends Jsonable<FinishPasswordResetForm>() {
	@PlainNoTrim() token: string;
	@PlainNoTrim() newPassword: string;
	@PlainIgnore() confirmNewPassword: string;

	validations(): ClassValidation<FinishPasswordResetForm> {
		return {
			token: {
				myRequired,
			},
			newPassword: {
				myRequired,
				...password()
			},
			confirmNewPassword: {
				myRequired,
				sameAsPassword: rule('passwordMatch', sameAs(this.newPassword))
			}
		}
	}
}
