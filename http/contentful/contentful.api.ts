import AbstractApi from "@/_shared/http/abstract/abstractApi";
import {HomeSliderApi} from "@/http/contentful/homeSlider.api";

export class ContentfulApi extends AbstractApi {
	HomeSlider = new HomeSliderApi();
}

