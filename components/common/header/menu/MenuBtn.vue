<template>
  <CanActive :id="canActiveService.names['header-menu']"
             :excludeIds="[canActiveService.names['header-catalog']]"
             v-slot="{isActive, toggle}"
  >
    <button class="menu-btn"
            :class="{active: isActive}"
            @click="toggle"
    >
      <span></span>
    </button>
  </CanActive>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import MenuComponent from "@components/common/header/menu/Menu.vue";
import CanActive from "@shared/components/ui/CanActive.vue";

@Component({
  name: "MenuBtnComponent",
  components: {CanActive, MenuComponent},
})
export default class MenuBtnComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.menu-btn {
  position: relative;
  $rWidth: 24px;
  $rHeight: 2px;
  $pad: 6px;
  $btnColor: white;
  $ownPad: 12px;

  color: $btnColor;

  width: $rWidth + $ownPad * 2;
  height: $rHeight * 3 + $pad * 2 + $ownPad * 2;
  padding: $ownPad;

  display: block;
  background-color: inherit;
  border-radius: 6px;
  cursor: pointer;

  border: 1px solid #8a8a8a;

  @include animAll();

  &:hover {
    background-color: transparentize(white, 0.8);
  }

  & > * {
    position: absolute;
    display: inline-flex;
    width: $rWidth;
    height: $rHeight;

    background-color: currentColor;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;

      width: $rWidth;
      height: $rHeight;

      background-color: currentColor;
    }

    &::before {
      top: calc(-100% - #{$pad});
    }

    &::after {
      top: calc(100% + #{$pad});
    }
  }

  &.active {
    & > * {
      background-color: transparent;

      &::before,
      &::after {
        top: 50%;
        left: 50%;

        width: $rWidth + 2px;
      }

      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
        transform-origin: center;
      }

      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
}

</style>
