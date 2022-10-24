import API from "@/http/API";
import {ManagerForm} from "@models/manager/manager.form";
import {BehaviorSubject, Observable} from "rxjs";
import {managerRepository} from "@/repositories/manager.repository";
import {Manager} from "@models/manager/manager";
import {authService} from "@services/auth/auth.service";

class ManagerService {
	private managerList: BehaviorSubject<Manager[]> = new BehaviorSubject<Manager[]>([]);
	managerList$: Observable<Manager[]> = this.managerList.asObservable();

	constructor() {
		// Чтоб никто не увидел менеджеров от прошлого входа
		authService.currentToken.subscribe(token => {
			if (!token) this.managerList.next([]);
		})
	}

	fetchManagers() {
		return managerRepository.getList()
			.then(list => {
				this.managerList.next(list)
			})
	}

	fetchAndGetManagers(): Observable<Manager[]> {
		this.fetchManagers();
		return this.managerList$;
	}

	add(form: ManagerForm) {
		return API.Account.Manager.add(form)
	}

	remove(id: string) {
		return API.Account.Manager.remove(id);
	}
}

export const managerService = new ManagerService();
