import {Jsonable} from "@shared/models/tools/tools";
import {
	ClassValidation,
	myRequired,
} from "@shared/models/validators";
import {DeliveryMethod} from "@models/delivery/method";
import {DeliveryDriver, DriverForm} from "@models/delivery/driver/driver";

export class RecipientDeliveryForm<F extends DriverForm = any> extends Jsonable<RecipientDeliveryForm>() {
	recipientId: string;
	driver: DeliveryDriver;
	method: DeliveryMethod;

	methodParameters?: F

	validations(): ClassValidation<RecipientDeliveryForm> {
		return {
			recipientId: {
				myRequired
			},
			driver: {
				myRequired
			},
			method: {
				myRequired
			},
		}
	}
}
