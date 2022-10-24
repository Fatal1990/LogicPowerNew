import {BAN_REASON, User} from "@/models/user/user";

export class UserBanService {
	private CheckoutBans: BAN_REASON[] = [
		BAN_REASON.debt,
		BAN_REASON.price
	];

	private LoginBans: BAN_REASON[] = [
		BAN_REASON.overdue,
		BAN_REASON.agreement
	];


	constructor(private u: User | null) {
	}

	get Bans() {
		return this.u?.Bans || [];
	}

	get HasBanOnCheckout() {
		return this.Bans.some(uBan => this.CheckoutBans.some(cBan => cBan === uBan.reason));
	}

	get HasBanOnLogin() {
		return this.Bans.some(uBan => this.LoginBans.some(lBan => lBan === uBan.reason));
	}

	get ErrorBanStr(): string {
		const strList: string[] = ['Пользователь имеет запреты: '];

		if (this.HasBanOnCheckout) strList.push('Запрет на оформление заказа.');
		if (this.HasBanOnLogin) strList.push('Запрет на вход в аккаунт.');

		return strList.join(' ');
	}
}
