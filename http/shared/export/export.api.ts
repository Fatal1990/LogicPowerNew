import ServerApi from "@/_shared/http/abstract/serverApi";
import {FullDictionary} from "@shared/models/translate/types";

export class ExportApi extends ServerApi {
	protected baseUrl = "export"

	getTranslations(): Promise<FullDictionary> {
		return this.get('translations', {requireAuth: false})
			.then(({response}) => {
				return response.data;
			});
	}
}
