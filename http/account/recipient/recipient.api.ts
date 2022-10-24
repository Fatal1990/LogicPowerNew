import ServerApi from "@shared/http/abstract/serverApi";
import {RecipientForm} from "@models/recipient/recipient.form";
import {Recipient} from "@models/recipient/recipient";
import {RecipientDeliveryApi} from "@/http/account/recipient/recipientDelivery.api";

export class RecipientApi extends ServerApi {
	protected baseUrl = 'recipient';

	Delivery = new RecipientDeliveryApi(this);

	add(form: RecipientForm) {
		return this.post('add', RecipientForm.toJson(form));
	}

	remove(id: string) {
		return this.post('remove', {
			id
		});
	}

	list() {
		return this.get('list')
			.then(res => {
				return Recipient.fromJson(res.data as []);
			});
	}

}

