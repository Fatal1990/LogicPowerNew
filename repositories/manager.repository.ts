import API from "@/http/API";
import {Manager} from "@models/manager/manager";

class ManagerRepository {
	getList(): Promise<Manager[]> {
		return API.Account.Manager.list()
	}
}

export const managerRepository = new ManagerRepository();
