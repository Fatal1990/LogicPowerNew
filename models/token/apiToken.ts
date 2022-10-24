import {PriceType} from "@shared/models/product/types";
import {Jsonable} from "@shared/models/tools/tools";
import {ICanActive} from "@shared/models/view/product/types";

export class ApiToken extends Jsonable<ApiToken>() implements ICanActive {
	id: string;
	createdAt: number;
	name: string;
	token: string;
	productPriceTypes: PriceType[];
	seenAt: number | null;

	IsActive: boolean;
}
