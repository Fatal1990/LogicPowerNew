import {FinishPasswordResetForm, StartPasswordResetForm} from "@/models/logReg";
import ServerApi from "@/_shared/http/abstract/serverApi";

export class PasswordApi extends ServerApi {
	protected baseUrl = 'password';

	startResetPassword(form: StartPasswordResetForm) {
		return this.post('reset/initiate', StartPasswordResetForm.toJson(form), {requireAuth: false});
	}

	finishResetPassword(form: FinishPasswordResetForm) {
		return this.post('reset/complete', FinishPasswordResetForm.toJson(form), {requireAuth: false});
	}
}
