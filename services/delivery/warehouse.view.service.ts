import {Warehouse} from "@models/delivery/delivery";
import {CartProduct} from "@shared/models/product/product";
import {ProductCalcInfoService} from "@services/product/productCalcInfo.service";
import {productCartService} from "@services/cart/productCart.service";
import {isExist} from "@shared/models/view/tools";
import {translateService} from "@shared/services/translate/translate.service";

export class WarehouseViewService {
	static calcIsPassesByWeight(w: Warehouse | undefined | null) {
		if (!w) return true;
		const cartList: CartProduct[] = productCartService.getCurrList();
		return w && isExist(w.maxWeight) ? ProductCalcInfoService.calcWeight(cartList) <= w.maxWeight : true;
	}

	static getTitle(w: Warehouse | undefined | null) {
		if (!w) return '';
		const address = w.address.Value
		const weight = w.maxWeight ?
			` ( ${translateService.getWord('warehouseWeightShortTip', {$params: {val: w.maxWeight}})} )`
			: '';
		return address + weight;
	}
}
