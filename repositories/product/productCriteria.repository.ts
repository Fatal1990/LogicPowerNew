import API from "@/http/API";
import {Criteria} from "@shared/models/product/filter/criteria";
import {reactive} from "vue";
import {productService} from "@services/product/product.service";
import {ProductQuery} from "@shared/models/product/query";
import {CriteriaService} from "@shared/services/product/filter/criteria.service";

class ProductCriteriaRepository {
	async getCriteria(query: ProductQuery): Promise<Criteria> {
		return API.Catalog.Product.Criteria.getWithParams(await productService.getHttpQuery(query))
			.then(raw => Criteria.fromJson(raw))
			.then(criteria => CriteriaService.recoverState(criteria, query));
	}
}

export const productCriteriaRepository = reactive(new ProductCriteriaRepository());

