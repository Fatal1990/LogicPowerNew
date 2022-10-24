import {ApiResponseError} from "@shared/http/abstract/serverApi";
import {FORBIDDEN_REASON} from "@shared/services/httpError.service";
import {errorService} from "@shared/services/error.service";

export class DeliveryForbiddenService {
	static addError(err: ApiResponseError) {
		if (err.code === FORBIDDEN_REASON.ACCOUNT_RECIPIENT_INVALID_ID) {
			errorService.addError('Недействительный получатель');
		} else if (err.code === FORBIDDEN_REASON.ACCOUNT_RECIPIENT_DELIVERY_ADD_WITH_INVALID_METHOD_PARAMETERS) {
			errorService.addError('Недействительные параметры доставки');
		}
		// Форма должна заполняться без ошибок, ошибка тут равносильна 422
		// Бросаем, что видела консоль и с
		throw err;
	}
}
