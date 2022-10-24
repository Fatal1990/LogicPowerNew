import ServerApi from "@shared/http/abstract/serverApi";
import {LogForm} from "@models/logReg";
export class SignInApi extends ServerApi {
	protected baseUrl = 'in';

	credentials(form: LogForm): Promise<any> {
		return this.post('credentials', LogForm.toJson(form), {requireAuth: false});
	}

	token(token: string): Promise<any> {
		return this.post('token', {token}, {requireAuth: false});
	}
}

