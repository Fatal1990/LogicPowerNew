import ServerApi from "@/_shared/http/abstract/serverApi";
import {HttpProductQuery} from "@shared/models/http/product/filter";
import {FetchPaginationResult, HttpPaginationParams, PaginationParams} from "@shared/models/http/list.types";
import {
	ProductSeenHttpResource,
	ProductHttpResource,
	ProductCartHttpResource
} from "@shared/models/http/product/product";


export class ProductListApi extends ServerApi {
	protected baseUrl = "list"

	getAll(params: HttpPaginationParams & HttpProductQuery): Promise<FetchPaginationResult<ProductHttpResource>> {
		return this.get('all', {
			params: {
				...params
			},
		})
			.then(({data}) => data);
	}

	getSeen(limit: number): Promise<ProductSeenHttpResource[]> {
		return this.get('seen', {
			params: {
				limit
			},
		})
			.then(({data}) => data)
	}

	getKit(kitId: string): Promise<ProductHttpResource[]> {
		return this.get('kit', {
			params: {
				kitId
			}
		})
			.then(({data}) => data)
	}

	getReference(referenceId: string): Promise<ProductHttpResource[]> {
		return this.get('reference', {
			params: {
				referenceId
			},
		})
			.then(({data}) => {
				return data
			})
	}

	getCart(): Promise<ProductCartHttpResource[]> {
		return this.get('cart')
			.then(({data}) => data)
	}
}
