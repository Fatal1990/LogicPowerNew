import API from "@/http/API";
import {ApiToken} from "@models/token/apiToken";
import {BehaviorSubject, Observable} from "rxjs";
import {apiTokenRepository} from "@/repositories/token/apiToken.repository";
import {ApiTokenForm} from "@models/token/apiToken.form";
import {PriceType} from "@shared/models/product/types";

export class ApiTokenService {
	private tokenList: BehaviorSubject<ApiToken[]> = new BehaviorSubject<ApiToken[]>([]);
	tokenList$: Observable<ApiToken[]> = this.tokenList.asObservable();

	fetchTokens() {
		return apiTokenRepository.getList()
			.then(list => {
				this.tokenList.next(list)
			})
	}

	fetchAndGetTokens(): Observable<ApiToken[]> {
		this.fetchTokens();
		return this.tokenList$;
	}

	add(form: ApiTokenForm) {
		const formPlain = ApiTokenForm.toJson(form);
		return API.Account.Token.add({
			name: formPlain.name || '',
			productPriceTypes: [PriceType.RRP, PriceType.Personal]
		});
	}

	remove(apiToken: ApiToken) {
		return API.Account.Token.remove(apiToken.id);
	}
}

export const apiTokenService = new ApiTokenService();
