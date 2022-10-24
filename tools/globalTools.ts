import {PopupService, popupService} from "@shared/services/popup.service";
import {Icon} from "@/tools/type/icons";
import {routeHelper, RouteHelper} from "@shared/helpers/route.helper";
import {breadcrumbService, BreadcrumbService} from "@shared/services/breadcrumb.service";
import {createIcons, globalFunctions} from "@shared/tools/globalFunc";
import {CanActiveService, canActiveService} from "@shared/services/canActive.service";

type GlobalFunctionList = ReturnType<typeof globalFunctions>

declare module 'vue/types/vue' {
	interface Vue {
		$globalFunc: GlobalFunctionList;
		_T: GlobalFunctionList['translate'];
		getLocaleable: GlobalFunctionList['getLocaleable']
		icons: Record<Icon, Icon>;
		routeHelper: RouteHelper
		popupService: PopupService
		canActiveService: CanActiveService
		breadcrumbService: BreadcrumbService
	}
}

export const GlobalTools = {
	install(Vue, options: unknown) {
		const func = globalFunctions()
		Vue.prototype.$globalFunc = func;
		Vue.prototype._T = func.translate;
		Vue.prototype.getLocaleable = func.getLocaleable;

		Vue.prototype.icons = createIcons();

		Vue.prototype.routeHelper = routeHelper;
		Vue.prototype.popupService = popupService;
		Vue.prototype.canActiveService = canActiveService;

		Vue.prototype.breadcrumbService = breadcrumbService;
	}
}
