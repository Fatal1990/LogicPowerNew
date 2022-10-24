import ServerApi from "@/_shared/http/abstract/serverApi";
import {Criteria, HttpCriteria} from "@shared/models/product/filter/criteria";
import {HttpProductQuery} from "@shared/models/http/product/filter";


export class ProductCriteriaApi extends ServerApi {
	protected baseUrl = "criteria"

	getWithParams(params: HttpProductQuery): Promise<HttpCriteria> {
		return this.get('', {
			params,
		})
			.then(({data}) => {
				return data;
			})
	}
}
