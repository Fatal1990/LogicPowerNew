import {routeHelper} from "@shared/helpers/route.helper";
import {IBaseCategory} from "@shared/models/category";
import {isArray} from "lodash";
import {reactive} from "vue";
import {VueRoute} from "@/tools/version-types";


class CategoryCatalogViewService {
	private currCategory: IBaseCategory | null = null;

	getIsCategoryActive(category: IBaseCategory, route: VueRoute): boolean {
		if (this.currCategory?.id === category.id) return true;
		const slug = route.params[routeHelper.params['slug']];
		return category.slug.contains(isArray(slug) ? slug[0] : slug);
	}

	setCurrCategory(category: IBaseCategory | undefined) {
		if (!category) return;
		this.currCategory = category;
	}

	clearCurrCategory() {
		this.currCategory = null;
	}
}

export const categoryCatalogViewService = reactive(new CategoryCatalogViewService())
