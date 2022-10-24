import ServerApi from "@/_shared/http/abstract/serverApi";
import {Category} from "@/_shared/models/category";

export class CategoryListApi extends ServerApi {
	protected baseUrl = "list"

	getAll(): Promise<Category[]> {
		return this.get('tree')
			.then(({data}) => {
				return Category.fromJson(data as any[])
			})
			.then(data => {
				return data
			});
	}
}
