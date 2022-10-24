import API from "@/http/API";
import {reactive} from "vue";
import {
	CartProduct,
	CartProductFactory,
	Product,
	SeenProductFactory, ProductFactory
} from "@shared/models/product/product";
import {HttpProductQuery} from "@shared/models/http/product/filter";
import {FetchPaginationResult, HttpPaginationParams} from "@shared/models/http/list.types";

enum KIT_IDS {
	TOP = '000000001'
}

class ProductRepository {
	async findOneBySlug(slug: string): Promise<Product> {
		return API.Catalog.Product.Item.getProductBySlug(slug)
			.then(ProductFactory.build);
	}

	async findAllByQuery(query: HttpPaginationParams & HttpProductQuery): Promise<FetchPaginationResult<Product>> {
		return API.Catalog.Product.List
			.getAll({
				...query
			})
			.then(data => {
				return {
					items: ProductFactory.build(data.items),
					totalItems: data.totalItems
				}
			});
	}

	async getSeenList(limit: number = 25): Promise<Product[]> {
		return API.Catalog.Product.List.getSeen(limit)
			.then(SeenProductFactory.build);
	}

	async getTopList(): Promise<Product[]> {
		return API.Catalog.Product.List.getKit(KIT_IDS.TOP)
			.then(ProductFactory.build);
	}

	async getReferenceList(productId: string): Promise<Product[]> {
		return API.Catalog.Product.List.getReference(productId)
			.then(ProductFactory.build);
	}

	async getCartList(): Promise<CartProduct[]> {
		return API.Catalog.Product.List.getCart()
			.then(CartProductFactory.build);
	}
}

export const productRepository = reactive(new ProductRepository());
