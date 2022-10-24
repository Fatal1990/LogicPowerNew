import ServerApi, {ApiResponse} from "@/_shared/http/abstract/serverApi";
import {HttpProductCartQuantity, HttpProductCartState} from "@/http/catalog/product/cart/resource/types";

export class ProductCartApi extends ServerApi {
	protected baseUrl = "cart"

	add(state: HttpProductCartQuantity) {
		console.log('add', state)
		return this.post('add', state);
	}

	remove(state: HttpProductCartQuantity) {
		console.log('remove', state)
		return this.post('remove', state);
	}

	update(state: HttpProductCartState) {
		console.log('state', state)
		return this.post('state', state);
	}
}
