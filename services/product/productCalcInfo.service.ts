import {IProductQuantity} from "@shared/models/product/product";
import {ProductSpecExtractorService} from "@services/product/product.service";
import {Money} from "@shared/models/money/money";
import {Currency} from "@shared/models/money/currency";
import {ProductViewService} from "@shared/services/product/product.view.service";
import {ProductFormatInfoService} from "@services/product/productFormatInfo.service";

export class ProductCalcInfoService {
	static calcWeight(list: IProductQuantity[]): number {
		return list.reduce((prev, curr) => {
			return prev +
				parseFloat(
					'' + ProductSpecExtractorService.getWeightSpec(curr.product).option.value.Value
				) * curr.quantity;
		}, 0);
	}

	static getWeight(list: IProductQuantity[]) {
		return ProductFormatInfoService.formatWeight(this.calcWeight(list));
	}

	static calcVolume(list: IProductQuantity[]) {
		const volumeNum = list.reduce((prev, curr) => {
			return prev +
				parseFloat(
					'' + ProductSpecExtractorService.getVolumeSpec(curr.product).option.value.Value
				) * curr.quantity;
		}, 0);
		return ProductFormatInfoService.formatVolume(volumeNum);
	}

	private static calcListAmount(list: IProductQuantity[]) {
		return list.reduce((prev, curr) => {
			return prev + ProductViewService.getTotalSum(curr).amount;
		}, 0);
	}

	static calcTotalSum(list: IProductQuantity[]): Money {
		const amount = this.calcListAmount(list);
		const isAmount = !!amount;

		return {
			amount: isAmount ? amount : Number.POSITIVE_INFINITY,
			currency: isAmount ? list[0].product.Price!.currency : Currency.USD
		}
	}
}
