import {reactive} from "vue";

class HeaderViewService {
	fullHeaderHeight: number = 0;
	headerHeight: number = 0;
	stickyRowBottom: number = 0;

	isBreadcrumbsWhite: boolean = false;
	isBreadcrumbsAbsolute: boolean = false;
}

export const headerViewService = reactive(new HeaderViewService());
