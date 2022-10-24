import {UkrposhtaCourierForm} from "@models/delivery/driver/ukrposhta/ukrposhtaCourier.form";
import {Expose} from "class-transformer";

export class DeliveryCourierForm extends UkrposhtaCourierForm {
	@Expose({name: 'ukrposhtaCityId', toPlainOnly: true})
	cityId: string;
	@Expose({name: 'ukrposhtaStreetId', toPlainOnly: true})
	streetId: string;
}

