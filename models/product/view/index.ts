import {Product} from "@shared/models/product/product";

export type ProductAttr = {
	tip: any,
	val: any
};

export type RelateCategory = {
	category: Product['categories'][number],
	counter: number
};

