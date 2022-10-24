import {ApiResponseError} from "@shared/http/abstract/serverApi";
import {FORBIDDEN_REASON} from "@shared/services/httpError.service";
import {errorService} from "@shared/services/error.service";

export class CheckoutForbiddenService {
	static checkoutError(err: ApiResponseError) {
		if (err.code === FORBIDDEN_REASON.ORDER_CHECKOUT_WITH_OUT_OF_REACH_ORDER_PRODUCT_QUANTITY) {
			console.log('403 - Лимит товаров');
		}
		if (err.code === FORBIDDEN_REASON.ORDER_CHECKOUT_WITHOUT_ACTIVE_PRODUCTS) {
			errorService.addError('Отсутствуют активные товары в коризне');
		}
	}
}
