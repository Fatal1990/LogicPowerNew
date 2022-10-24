import API from "@/http/API";
import {ApiToken} from "@models/token/apiToken";

class ApiTokenRepository {
	getList(): Promise<ApiToken[]> {
		return API.Account.Token.list().then(list => {
			return ApiToken.fromJson(list);
		});
	}
}

export const apiTokenRepository = new ApiTokenRepository();
