import ServerApi from "@/_shared/http/abstract/serverApi";
import {CurrencyRate} from "@shared/models/money/currency";

export class FinanceApi extends ServerApi {
	protected baseUrl = "finance"

	getCurrencyRates(): Promise<CurrencyRate[]> {
		return this.get('currencyRates')
			.then(res => {
				return res.data;
			});
	}
}
