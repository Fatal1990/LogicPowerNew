import SuperVue from "vue";
import {RawLocation, VueRouter as VueRouterModule} from "vue-router/types/router";
import ClassComponent from "nuxt-class-component";
import {Route} from "vue-router";

export type VueApp = SuperVue;

export const Options = ClassComponent;
export const Component = ClassComponent;
export const Vue = SuperVue;
export type Vue = SuperVue;
export type VueRouter = VueRouterModule;

export type VueLink = RawLocation;
export type VueRoute = Route;

