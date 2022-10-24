import API from "@/http/API";
import {PromiseWrapper} from "@shared/models/tools/promise";
import {CurrencyRate} from "@shared/models/money/currency";

class CurrencyRepository {
	promiseWrapper: PromiseWrapper<CurrencyRate[]> | null;

	getCurrencyRates() {
		if (!this.promiseWrapper || this.promiseWrapper.IsRejected) {
			this.promiseWrapper = new PromiseWrapper<CurrencyRate[]>(API.Finance.getCurrencyRates());
		}

		return this.promiseWrapper.value;
	}
}

export const currencyRepository = new CurrencyRepository();
