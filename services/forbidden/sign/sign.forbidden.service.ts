import {ApiResponseError} from "@shared/http/abstract/serverApi";
import {FORBIDDEN_REASON} from "@shared/services/httpError.service";
import {errorService} from "@shared/services/error.service";

export class SignForbiddenService {
	static loginError(err: ApiResponseError) {
		if (err.code === FORBIDDEN_REASON.ACCOUNT_SIGN_IN_WITH_INVALID_CREDENTIALS) {
			errorService.addError('Логин или пароль недействительны');
		} else if (err.code === FORBIDDEN_REASON.ACCOUNT_SIGN_IN_WHEN_DISABLED) {
			errorService.addError('Менеджер пока не утвердил вашу заявку на регистрацию - пожалуйста, ожидайте или свяжитесь с менеджером.');
		} else if (err.code === FORBIDDEN_REASON.ACCOUNT_SIGN_IN_WHEN_CUSTOMER_OVERDUE_BAN) {
			errorService.addError('Вследствие бездействия, ваш аккаунт был отключён. Свяжитесь с менеджером.');
		} else if (err.code === FORBIDDEN_REASON.ACCOUNT_SIGN_IN_WHEN_CUSTOMER_AGREEMENT_BAN) {
			errorService.addError('В следствие нарушения договора, ваш аккаунт был забанен. Свяжитесь с менеджером.');
		}
	}
}
