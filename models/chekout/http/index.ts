import {OrderBag} from "@shared/models/product/types";
import {Money} from "@shared/models/money/money";


export interface HttpCheckoutPost {
	isRecipientPaysDelivery: boolean;
	orderBag: OrderBag;
	pod: Money | null;
	note: string | undefined;

	recipientDeliveryId: string;
	managerUserId: string;
}
