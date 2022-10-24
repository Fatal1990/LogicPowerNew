import {reactive} from "vue";
import {User} from "@/models/user/user";
import API from "@/http/API";
import {BehaviorSubject} from "rxjs";
import {translateService} from "@shared/services/translate/translate.service";
import {authService} from "@services/auth/auth.service";
import {DictLanguage} from "@shared/models/translate/types";

export class UserService {
	currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

	constructor() {
		authService.currentToken
			.subscribe((token) => {
				if (token) this.fetchUser();
				else if (!token) this.clearUser();
			})

		translateService.currLangOrigin.subscribe((lang: DictLanguage) => {
			const user = this.currentUser.getValue();
			if (user && user.locale !== lang) {
				// Хотя мы и выдернули пользователя текущего, это ссылка на объект,
				// который разослан по всем компонентам.
				// Изменили свойство объекта - изменилось везде.
				user.locale = lang;
				API.Account.setUserLocale(lang);
			}
		})
	}

	fetchUser() {
		API.Account.getCurrenUser().then(user => {
			this.currentUser.next(user);
			if (user) translateService.setCurrLang(user.locale);
		})
	}

	private clearUser() {
		this.currentUser.next(null);
	}
}

export const userService = reactive(new UserService());
