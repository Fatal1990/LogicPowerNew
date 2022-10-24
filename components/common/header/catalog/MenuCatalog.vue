<template>
  <CanActive :id="canActiveService.names['menu-catalog']"
             v-slot="{isActive}"
  >
    <aside class="menu-catalog"
           :class="{active: isActive}"
    >
      <div class="menu-catalog__header">
        <button class="menu-catalog__back-btn" @click="canActiveService.close(canActiveService.names['menu-catalog'])">
          <span class="menu-catalog__back-btn-icon-w">
            <SvgIcon class="menu-catalog__back-btn-icon" :icon="icons['arrow-stick-left']"/>
          </span>
          <span>
            Назад
          </span>
        </button>
      </div>
      <Catalog class="menu-catalog__catalog"
               :isVertical="true"
               :class="{active: isActive}"
      />
    </aside>
  </CanActive>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import Catalog from "@components/common/header/catalog/Catalog.vue";
import CanActive from "@shared/components/ui/CanActive.vue";

@Component({
  name: "MenuCatalogComponent",
  components: {CanActive, Catalog, SvgIcon},
})
export default class MenuCatalogComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.menu-catalog {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  background-color: white;

  overflow-y: auto;
  @include scrollbarStyle();


  @include anim();

  &.active {
    left: 0;
  }

  &__header {
    display: flex;
    flex-direction: column;

    padding: 16px;

    border-bottom: 1px solid #d1d1d1;
  }

  &__back-btn {
    display: flex;
    align-items: center;
    gap: 16px;
    @include animAll();
  }

  &__back-btn-icon-w {
    @include fixedHW(24px, 24px);
    display: flex;
    align-items: center;
    justify-content: center;

    color: $color-main;

    border: 1.5px solid currentColor;
    border-radius: 50%;
  }

  &__back-btn-icon {
    @include fixedHW(14px, 14px);
  }

  &__back-btn:hover &__back-btn-icon {
    transform: translateX(-2px);
  }

  &__catalog {
    width: 100%;
  }
}
</style>
