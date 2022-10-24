import {OrderOriginStatus} from "@models/order/history/orderHistory";
import {translateService} from "@shared/services/translate/translate.service";
import {DictionaryWord} from "@shared/models/translate/types";

type TranslateMap = Record<OrderOriginStatus, DictionaryWord>

export class OrderOriginViewService {
	private static translateMap: TranslateMap = {
		[OrderOriginStatus.b2b]: 'b2bOrigin',
		[OrderOriginStatus.baf]: 'bafOrigin',
	}

	static getTitle(origin: OrderOriginStatus) {
		return translateService.getWord(this.translateMap[origin]);
	}
}
