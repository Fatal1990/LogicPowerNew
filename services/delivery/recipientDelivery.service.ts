import API from "@/http/API";
import {RecipientDeliveryForm} from "@models/delivery/recipientDelivery.form";

class RecipientDeliveryService {
	add(form: RecipientDeliveryForm) {
		return API.Account.Recipient.Delivery.add(form);
	}

	remove(id: string) {
		return API.Account.Recipient.Delivery.remove(id);
	}
}

export const recipientDeliveryService = new RecipientDeliveryService();
