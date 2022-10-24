<template>
  <section class="header-catalog" :style="{'--sticky-bottom': StickyBottom + 'px'}">
    <CanActive :id="canActiveService.names['header-catalog']"
               :excludeIds="[canActiveService.names['header-menu']]"
               v-slot="{isActive, toggle}"
    >
      <div class="header-catalog__bg" :class="{active: isActive}" @click="toggle"></div>
      <button class="header-catalog__btn" @click="toggle">
        <SvgIcon class="header-catalog__btn-icon" :icon="icons['catalog']"/>
        <span class="header-catalog__btn-title">
          Каталог товаров
        </span>
      </button>
      <Catalog
          class="header-catalog__body"
          v-if="isActive"
          :style="{'--sticky-bottom': StickyBottom + 'px'}"
      />
    </CanActive>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import {headerViewService} from "@services/header/view/header.view.service";
import CanActive from "@shared/components/ui/CanActive.vue";
import Catalog from "@components/common/header/catalog/Catalog.vue";

@Component({
  name: "CatalogComponent",
  components: {Catalog, CanActive, SvgIcon},
})
export default class CatalogComponent extends Vue {
  get StickyBottom() {
    return headerViewService.stickyRowBottom;
  }
}
</script>

<style lang="scss" scoped>
.header-catalog {
  --sticky-bottom: 0;

  @include mobile() {
    display: none;
  }

  &__bg {
    position: fixed;
    top: var(--sticky-bottom);
    left: 0;
    right: 0;
    bottom: 0;

    backdrop-filter: blur(16px);
    z-index: -1;

    transition: opacity $anim-time, visibility $anim-time;

    opacity: 0;
    visibility: hidden;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 10px;

    color: white;
    background-color: $color-main;
    border-radius: 6px;
  }

  &__btn-icon {
    height: 18px;
    width: 18px;
  }

  &__btn-title {
    @include font(16, 18, 700);
  }

  &__body {
    --sticky-bottom: 0;
    --right-btn: 0px;

    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;

    //height: Calc(100vh - var(--sticky-bottom));
    min-width: 350px;
    width: 100%;
    max-width: 400px;

    background-color: white;
    border-bottom-left-radius: 6px;
    box-shadow: 0 0 2px rgba(20, 20, 20, 0.1), 0 0 8px rgba(20, 20, 20, 0.08);

    animation: showCatalog $anim-time ease-in-out;
    animation-fill-mode: forwards;

    @keyframes showCatalog {
      from {
        opacity: 0;
        visibility: hidden;
      }

      to {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
