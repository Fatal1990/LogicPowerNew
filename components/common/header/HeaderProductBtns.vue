<template>
  <nav class="header-btns">
    <a class="header-btns__item compare" href="#">
    <SvgIcon :icon="icons['compare']"/>
    <span class="header-btns__title">Сравнение</span>
    <span class="header-btns__counter" v-if="true">
      3 
    </span>
    </a>
    <button class="header-btns__item cart" @click="popupService.show(popupService.names['cart-popup'])">
    <SvgIcon :icon="icons['cart']"/>
    <span class="header-btns__title">Корзина</span>
    <span class="header-btns__counter" v-if="true">
      2
    </span>
    </button>
  </nav>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  name: "HeaderProductBtnsComponent",
  components: {SvgIcon},
})
export default class HeaderProductBtnsComponent extends Vue {

}
</script>

<style lang="scss" scoped>
.header-btns {
  display: flex;
  align-items: center;
  gap: 24px;

  &__item {
    position: relative;
    min-width: 64px;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;
    @include anim($anim-small-time);

    &:hover {
      color: $color-main-light;
    }

    @include bigMobile() {
      min-width: 32px;
    }

    @include mobile() {
      &.compare {
        display: none;
      }
    }
  }

  &__title {
    width: max-content;
    @include font(12, 14);

    @include bigMobile() {
      display: none;
    }
  }

  &__counter {
    position: absolute;
    top: -2px;
    right: -2px;
    transform: translateY(-50%);

    min-width: 20px;
    height: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 0 4px;

    color: white;
    @include font(14, 14);

    background-color: red;
    border-radius: 8px;

    @include smallestScreen() {
      min-width: 18px;
      height: 14px;
      border-radius: 7px;

      @include font(12, 12);
    }

    @include bigMobile() {
      top: -6px;
      right: -6px;
    }
  }
}
</style>
