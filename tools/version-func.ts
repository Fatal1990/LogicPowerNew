import Vue from "vue";

export function setObjectValue<T extends Record<string, any>>(target: T, key: string, value: any) {
	Vue.set(target, key, value);
}
