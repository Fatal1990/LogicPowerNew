import ServerApi from "@shared/http/abstract/serverApi";
import {RegForm} from "@models/logReg";
import {SignInApi} from "@/http/account/sign/in/signIn.api";

export class SignApi extends ServerApi {
	protected baseUrl = 'sign';

	In = new SignInApi(this);

	up(form: RegForm): Promise<any> {
		return this.post('up', RegForm.toJson(form), {requireAuth: false});
	}

	out(): Promise<any> {
		return this.post('out', {});
	}
}

