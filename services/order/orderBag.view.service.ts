import {OrderBag, OrderBagType} from "@shared/models/product/types";
import {translateService} from "@shared/services/translate/translate.service";
import {Currency} from "@shared/models/money/currency";
import {DictionaryWord} from "@shared/models/translate/types";

type CurrencyPriorityMap = Record<Currency, number>;
type BagTypePriorityMap = Record<OrderBagType, number>;

export class OrderBagViewService {
	private static CurrencyPriorityMap: CurrencyPriorityMap = {
		[Currency.USD]: 1,
		[Currency.UAH]: 2
	}

	private static BagTypePriorityMap: BagTypePriorityMap = {
		[OrderBagType.Order]: 1,
		[OrderBagType.PreOrder]: 2,
	}

	private static getSortScore(bag: OrderBag): number {
		return this.CurrencyPriorityMap[bag.currency] + this.BagTypePriorityMap[bag.type]
	}

	static sortCallback(orderBag1: OrderBag, orderBag2: OrderBag): number {
		// Обязательно обращаться по имени класса, ибо используется в скопах, this переопределяется
		const score1 = OrderBagViewService.getSortScore(orderBag1);
		const score2 = OrderBagViewService.getSortScore(orderBag2);

		return score1 - score2;
	}

	static translateCurrencyMap: Record<Currency, DictionaryWord> = {
		[Currency.UAH]: 'whichBagUAH',
		[Currency.USD]: 'whichBagUSD',
	}

	static translateBagTypeMap: Record<OrderBagType, DictionaryWord> = {
		[OrderBagType.Order]: 'whichBagOrder',
		[OrderBagType.PreOrder]: 'whichBagPreOrder',
	}

	static getFullTitle(orderBag: OrderBag) {
		return translateService.getWord(this.translateCurrencyMap[orderBag.currency]) +
			' ' +
			translateService.getWord(this.translateBagTypeMap[orderBag.type]).toLowerCase();
	}

	static getTypeTitle(orderBag: OrderBag) {
		return translateService.getWord(this.translateBagTypeMap[orderBag.type]);
	}
}
