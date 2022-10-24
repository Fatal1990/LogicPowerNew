import ServerApi from "@/_shared/http/abstract/serverApi";
import {MaintenanceApi} from "@/http/shared/maintenance/maintenance.api";
import {ExportApi} from "@/http/shared/export/export.api";

export class SharedApi extends ServerApi {
	protected baseUrl = "shared"

	Maintenance = new MaintenanceApi(this);
	Export = new ExportApi(this);
}
