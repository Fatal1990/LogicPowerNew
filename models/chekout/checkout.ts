import {OrderBag} from "@shared/models/product/types";

export interface PartialCheckoutBag {
	isRecipientPaysDelivery: boolean
	orderBag: OrderBag
	podAmount?: number
	note?: string
}

export interface AvailableQuantityProduct {
	productId: string,
	availableQuantity: number
}
