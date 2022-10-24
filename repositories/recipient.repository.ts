import API from "@/http/API";
import {Recipient} from "@models/recipient/recipient";

class RecipientRepository {
	getList(): Promise<Recipient[]> {
		return API.Account.Recipient.list()
	}
}

export const recipientRepository = new RecipientRepository();
