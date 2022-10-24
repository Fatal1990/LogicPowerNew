import API from "@/http/API";
import {RecipientForm} from "@models/recipient/recipient.form";
import {BehaviorSubject, Observable} from "rxjs";
// import {} from "rxjs/dist/types";
import {recipientRepository} from "@/repositories/recipient.repository";
import {Recipient} from "@models/recipient/recipient";
import {authService} from "@services/auth/auth.service";

class RecipientService {
	private recipientList: BehaviorSubject<Recipient[]> = new BehaviorSubject<Recipient[]>([]);
	recipientList$: Observable<Recipient[]> = this.recipientList.asObservable();

	constructor() {
		// Чтоб никто не увидел менеджеров от прошлого входа
		authService.currentToken.subscribe(token => {
			if (!token) this.recipientList.next([]);
		})
	}

	fetchRecipients() {
		return recipientRepository.getList()
			.then(list => {
				this.recipientList.next(list)
			})
	}

	fetchAndGetRecipients(): Observable<Recipient[]> {
		this.fetchRecipients();
		return this.recipientList$;
	}

	add(form: RecipientForm) {
		return API.Account.Recipient.add(form);
	}

	remove(id: string) {
		return API.Account.Recipient.remove(id);
	}
}

export const recipientService = new RecipientService();
