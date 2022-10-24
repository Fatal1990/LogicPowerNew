import ServerApi from "@shared/http/abstract/serverApi";
import {AddTokenBody} from "@models/token/http";
import {ApiToken} from "@models/token/apiToken";

export class TokenApi extends ServerApi {
	protected baseUrl = 'token';


	list(): Promise<Partial<ApiToken>[]> {
		return this.get('list').then(res => {
			return res.data;
		});
	}

	add(tokenBody: AddTokenBody): Promise<any> {
		return this.post('add', tokenBody);
	}

	remove(id: string): Promise<any> {
		return this.post('remove', {id});
	}
}

