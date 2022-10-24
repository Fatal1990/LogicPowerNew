import {ApiResponseError} from "@shared/http/abstract/serverApi";
import {FORBIDDEN_REASON} from "@shared/services/httpError.service";
import {errorService} from "@shared/services/error.service";

export class ProductForbiddenService {
	static addCartError(err: ApiResponseError) {
		if (err.code === FORBIDDEN_REASON.CATALOG_PRODUCT_INVALID_ID) {
			errorService.addError('Недействительный идентификатор продукта');
		} else if (err.code === FORBIDDEN_REASON.CATALOG_PRODUCT_CART_ADD_UNACCEPTABLE_PRODUCT) {
			errorService.addError('Этот товар нельзя добавить в корзину');
		}
	}

	static removeCartError(err: ApiResponseError) {
		if (err.code === FORBIDDEN_REASON.CATALOG_PRODUCT_INVALID_ID) {
			errorService.addError('Недействительный идентификатор продукта');
		} else if (err.code === FORBIDDEN_REASON.CATALOG_PRODUCT_CART_MISSING_ID) {
			errorService.addError('Такого продукта нет в корзине');
		} else if (err.code === FORBIDDEN_REASON.CATALOG_PRODUCT_CART_REMOVE_WITH_OUT_OF_REACH_QUANTITY) {
			errorService.addError('Недоступное кол-во для удаления');
		}
	}

	static stateCartError(err: ApiResponseError) {
		if (err.code === FORBIDDEN_REASON.CATALOG_PRODUCT_INVALID_ID) {
			errorService.addError('Недействительный идентификатор продукта');
		} else if (err.code === FORBIDDEN_REASON.CATALOG_PRODUCT_CART_MISSING_ID) {
			errorService.addError('Такого продукта нет в корзине');
		}
	}

	static addSeenError(err: ApiResponseError) {
		if (err.code === FORBIDDEN_REASON.CATALOG_PRODUCT_INVALID_ID) {
			// errorService.addError('Недействительный идентификатор продукта');
		}
	}
}
