import {CartableProduct, CartableProductFactory, Product} from "@shared/models/product/product";
import API from "@/http/API";
import {productRepository} from "@/repositories/product/product.repository";
import {ProductAttr, RelateCategory} from "@models/product/view";
import {FetchPaginationResult, HttpPaginationParams} from "@shared/models/http/list.types";
import {HttpProductQuery} from "@shared/models/http/product/filter";
import {ProductQuery} from "@shared/models/product/query";
import {categoryRepository} from "@shared/repositories/category.repository";

export class ProductSpecExtractorService {
	private static mainAttrNameList: string[] = [
		'Гарантия, мес'
	];
	private static weightName: string = 'Вес, кг';
	private static volumeName: string = 'Объем, м.куб';


	static getMainAttrs(product: Product): ProductAttr[] {
		const arr: ProductAttr[] = [];

		arr.push({
			tip: 'Бренд',
			val: product.manufacturer.name
		});

		product.barcode && arr.push({
			tip: 'Штрих-код',
			val: product.barcode
		});

		this.mainAttrNameList.forEach(el => {
			const spec = product.specifications.find(spec => spec.name.contains(el))!;
			if (spec) {
				arr.push({
					tip: spec.name,
					val: spec.option.value
				})
			}
		});

		return arr;
	}

	static getWeightSpec(product: Product) {
		return this.getSpec(product, this.weightName)!
	}

	static getVolumeSpec(product: Product) {
		return this.getSpec(product, this.volumeName)!
	}

	private static getSpec(product: Product, specName: string) {
		return product.specifications.find(el => el.name.contains(specName));
	}

}

class ProductRelateCategoryService {
	private static isCategoryUnique(category: Product['categories'][number], index, categoryArr: Product['categories']) {
		return categoryArr.findIndex(el => el.id === category.id) === index;
	}

	static getUniqueCategories(list: Product[]) {
		const cCountMap = {};
		const cList = list
			.map(product => product.categories)
			.flat();

		cList.forEach(el => {
			if (cCountMap[el.id]) {
				cCountMap[el.id] += 1;
			} else cCountMap[el.id] = 1;
		})

		return cList
			.filter(this.isCategoryUnique)
			.map(category => {
				return {
					category,
					counter: cCountMap[category.id]
				}
			})
	}
}

class ProductService {
	getGalleryList(query: HttpPaginationParams & HttpProductQuery): Promise<FetchPaginationResult<CartableProduct>> {
		return productRepository.findAllByQuery(query).then(paginationList => {
			return {
				items: paginationList.items.map(product => CartableProductFactory.build({product, quantity: 0})),
				totalItems: paginationList.totalItems
			};
		});
	}

	getRelatedCategoryList(p: Product): Promise<RelateCategory[]> {
		return productRepository.getReferenceList(p.id)
			.then(pList => {
				return ProductRelateCategoryService.getUniqueCategories(pList);
			})
	}

	async getPaginateQuery(paginateParams: HttpPaginationParams, query: ProductQuery): Promise<HttpPaginationParams & HttpProductQuery> {
		const httpQuery = await this.getHttpQuery(query);
		return {
			...paginateParams,
			...httpQuery
		}
	}

	async getHttpQuery(query: ProductQuery): Promise<HttpProductQuery> {
		const httpQuery: HttpProductQuery = {} as any;

		httpQuery.searchQuery = query.searchQuery;

		httpQuery.maxPrice = query.maxPrice;
		httpQuery.minPrice = query.minPrice;
		httpQuery.manufacturers = query.manufacturers;
		httpQuery.specifications = query.specifications;

		httpQuery.referenceId = query.referenceId;

		if (query.categoryId) {
			httpQuery.categoryId = query.categoryId;
		} else if (query.categorySlug) {
			const category = await categoryRepository.findBySlug(query.categorySlug);
			if (category)
				httpQuery.categoryId = category.id;
			else {
				throw new Error('Такой категории не существует');
			}
		}

		return httpQuery
	}

	addToSeen(p: Product) {
		return API.Catalog.Product.Seen.add(p.id);
	}
}

export const productService = new ProductService();
