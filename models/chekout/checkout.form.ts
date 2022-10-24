import {Jsonable, PlainIgnore, PlainNoSpace} from "@shared/models/tools/tools";
import {
	usreouRegExp,
	ruleRegExp,
	myRequired,
	ClassValidation,
	rule,
	tinRegExp,
	noSpaces, standardStrLength, phone,
} from "@/_shared/models/validators";
import {maxLength, requiredIf} from "@vuelidate/validators";
import {HttpCheckoutPost} from "@models/chekout/http";
import {Money} from "@shared/models/money/money";
import {OrderBag} from "@shared/models/product/types";
import {PartialCheckoutBag} from "@models/chekout/checkout";
import {TAX_STATUS} from "@models/logReg";
import {Type} from "class-transformer";
import {User} from "@/models/user/user";

export class CheckoutForm extends Jsonable<CheckoutForm>() implements HttpCheckoutPost {
	isRecipientPaysDelivery: boolean;

	@Type(() => OrderBag)
	orderBag: OrderBag;
	pod: Money | null;
	note: string | undefined;

	recipientDeliveryId: string;
	managerUserId: string;

	validations(): ClassValidation<CheckoutForm> {
		return {
			isRecipientPaysDelivery: {
				myRequired
			},
			pod: {},
			note: {
				maxLength: rule('maxLength', maxLength(1024)),
			},
			recipientDeliveryId: {
				myRequired
			},
			managerUserId: {},
			orderBag: {
				myRequired
			}
		}
	}
}

export class PartCartCheckoutForm extends Jsonable<PartCartCheckoutForm>() implements PartialCheckoutBag {
	isRecipientPaysDelivery: boolean;
	@PlainIgnore() isPod: boolean;

	@Type(() => OrderBag)
	orderBag: OrderBag;

	podAmount?: number;
	note: string;

	validations(): ClassValidation<PartCartCheckoutForm> {
		return {
			isRecipientPaysDelivery: {
				myRequired
			},
			isPod: {},
			podAmount: {
				requiredIf: rule('requiredField', requiredIf(() => {
					if (this.isPod) return true
					else {
						this.podAmount = undefined;
						return false;
					}
				}))
			},
			orderBag: {
				myRequired
			},
			note: {
				maxLength: rule('maxLength', maxLength(1024)),
			},
		}
	}
}

export class PartCheckoutForm extends Jsonable<PartCheckoutForm>() {
	@PlainIgnore() recipientId: string;
	recipientDeliveryId: string;

	@PlainIgnore() user: User;
	managerUserId: string;

	validations(): ClassValidation<PartCheckoutForm> {
		return {
			recipientId: {
				myRequired
			},
			recipientDeliveryId: {
				myRequired
			},
			user: {
				myRequired
			},
			managerUserId: {

			},
		}
	}
}


