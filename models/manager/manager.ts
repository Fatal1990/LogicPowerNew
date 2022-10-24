import {Jsonable} from "@shared/models/tools/tools";
import {Company, Customer} from "@/models/user/user";
import {ICanActive} from "@shared/models/view/product/types";
import {Expose, Type} from "class-transformer";
import {PersonNames} from "@/models/user/types";

export class Manager extends Jsonable<Manager>() implements ICanActive {
	id: string;
	email: string;
	phone: string;
	@Type(() => PersonNames)
	name: PersonNames;
	locale: string;

	@Type(() => Customer)
	customer: Customer;
	@Type(() => Company)
	company: Company;

	get FullName() {
		return this.name.FullName;
	}

	@Expose()
	IsActive: boolean;
}
