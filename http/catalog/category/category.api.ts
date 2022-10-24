import ServerApi from "@/_shared/http/abstract/serverApi";
import {CategoryListApi} from "@/http/catalog/category/list/categoryList.api";

export class CategoryApi extends ServerApi {
	protected baseUrl = "category"

	List = new CategoryListApi(this);
}
