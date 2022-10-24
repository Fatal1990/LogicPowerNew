import ServerApi from "@shared/http/abstract/serverApi";
import {RecipientDeliveryForm} from "@models/delivery/recipientDelivery.form";

export class RecipientDeliveryApi extends ServerApi {
	protected baseUrl = 'delivery';

	add(form: RecipientDeliveryForm) {
		return this.post('add', RecipientDeliveryForm.toJson(form));
	}

	remove(id: string) {
		return this.post('remove', {
			id
		});
	}
}

