import API from "@/http/API";
import {reactive} from "vue";
import {Maintenance} from "@models/maintenance";

class MaintenanceService {
	state: Maintenance | null = null;

	getMode() {
		if (this.state) return Promise.resolve(this.state);
		return API.Shared.Maintenance.getMode().then((state) => {
			this.state = state;
		});
	}
}

export const maintenanceService = reactive(new MaintenanceService());
