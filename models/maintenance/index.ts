import {Jsonable} from "@shared/models/tools/tools";

export class Maintenance extends Jsonable<Maintenance>() {
	isEnabled: boolean;
	message: string | null;
}
