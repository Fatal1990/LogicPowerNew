import ServerApi from "@/_shared/http/abstract/serverApi";
import {Product} from "@/_shared/models/product/product";
import {HttpProductQuery} from "@shared/models/http/product/filter";
import {FetchPaginationResult, PaginationParams} from "@shared/models/http/list.types";


export class ProductSeenApi extends ServerApi {
	protected baseUrl = "seen"

	add(id: string) {
		return this.post('add', {
			id
		});
	}
}
