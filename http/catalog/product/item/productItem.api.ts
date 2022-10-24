import ServerApi from "@/_shared/http/abstract/serverApi";
import {ProductHttpResource} from "@shared/models/http/product/product";

export class ProductItemApi extends ServerApi {
	protected baseUrl = "item"

	getProductBySlug(slug: string): Promise<ProductHttpResource> {
		return this.get('slug', {
			params: {slug},
		})
			.then(({data}) => {
				return data
			});
	}

}
