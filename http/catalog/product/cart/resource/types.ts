import {OrderBag, OrderBagType} from "@shared/models/product/types";

export type HttpProductCartQuantity = {
	id: string,
	orderBag: OrderBag,
	quantity: number
}

export type HttpProductCartState = {
	id: string,
	orderBag: OrderBag,
	isActive: boolean
}
