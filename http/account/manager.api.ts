import ServerApi from "@shared/http/abstract/serverApi";
import {ManagerForm} from "@models/manager/manager.form";
import {Manager} from "@models/manager/manager";

export class ManagerApi extends ServerApi {
	protected baseUrl = 'manager';

	add(form: ManagerForm) {
		return this.post('add', ManagerForm.toJson(form));
	}

	remove(id: string) {
		return this.post('remove', {
			id
		});
	}

	list() {
		return this.get('list')
			.then(res => {
				return Manager.fromJson(res.data as []);
			});
	}

}

