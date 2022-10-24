import AbstractApi from "@/_shared/http/abstract/abstractApi";
import {contentfulClient} from "@/http/contentful/contentful.config";
import {ContentfulEntryList} from "@/_shared/models/contentful/type";
import {CNTFTransformer} from "@/_shared/models/contentful/tools";
import {MainSliderItem} from "@shared/models/view/mainSliderItem";

export class HomeSliderApi extends AbstractApi {
	getSliders(): Promise<MainSliderItem[]> {
		return contentfulClient.getEntries({
			content_type: 'slider',
			locale: '*'
		}).then((data: ContentfulEntryList<MainSliderItem>) => {
			return data.items
				.map(el => CNTFTransformer.transform(el.fields as any))
				.map(el => MainSliderItem.fromJson(el));
		});
	}
}
