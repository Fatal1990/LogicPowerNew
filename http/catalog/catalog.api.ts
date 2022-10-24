import ServerApi from "@/_shared/http/abstract/serverApi";
import {CategoryApi} from "@/http/catalog/category/category.api";
import {ProductApi} from "@/http/catalog/product/product.api";

export class CatalogApi extends ServerApi {
	protected baseUrl = "catalog"

	Category = new CategoryApi(this);
	Product = new ProductApi(this);
}
