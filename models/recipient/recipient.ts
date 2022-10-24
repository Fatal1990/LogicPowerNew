import {Jsonable} from "@shared/models/tools/tools";
import {PersonNames} from "@/models/user/types";
import {Delivery} from "@models/delivery/delivery";
import {Type} from "class-transformer";
import {Company} from "@/models/user/user";

export class Recipient extends Jsonable<Recipient>() {
	id: string;
	phone: string;

	@Type(() => PersonNames)
	name: Partial<PersonNames>;

	@Type(() => Delivery)
	deliveries: Delivery[];

	@Type(() => Company)
	company: Company;

	get FullName() {
		return this.name.FullName;
	}
}



