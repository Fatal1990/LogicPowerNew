import ServerApi from "@/_shared/http/abstract/serverApi";
import {ProductListApi} from "@/http/catalog/product/list/productList.api";
import {ProductCriteriaApi} from "@/http/catalog/product/criteria/criteria.api";
import {ProductItemApi} from "@/http/catalog/product/item/productItem.api";
import {ProductSeenApi} from "@/http/catalog/product/seen/productSeen.api";
import {ProductCartApi} from "@/http/catalog/product/cart/productCart.api";

export class ProductApi extends ServerApi {
	protected baseUrl = "product"

	Criteria = new ProductCriteriaApi(this);
	List = new ProductListApi(this);
	Seen = new ProductSeenApi(this);
	Item = new ProductItemApi(this);
	Cart = new ProductCartApi(this);
}
