import {SignApi} from "@/http/account/sign/sign.api";
import {PasswordApi} from "@/http/account/password.api";
import {RegionApi} from "@/http/account/region.api";
import {User} from "@/models/user/user";
import ServerApi from "@/_shared/http/abstract/serverApi";
import {ManagerApi} from "@/http/account/manager.api";
import {RecipientApi} from "@/http/account/recipient/recipient.api";
import {TokenApi} from "@/http/account/token/token.api";
import {DictLanguage} from "@shared/models/translate/types";

export class AccountApi extends ServerApi {
	protected baseUrl = "account"

	Sign = new SignApi(this);
	Manager = new ManagerApi(this);
	Recipient = new RecipientApi(this);
	Password = new PasswordApi(this);
	Region = new RegionApi(this);
	Token = new TokenApi(this);

	getCurrenUser(): Promise<User> {
		return this.get('me')
			.then(({data}) => {
				return User.fromJson(data as object);
			})
	}

	setUserLocale(locale: DictLanguage) {
		return this.post('locale', {locale});
	}
}
