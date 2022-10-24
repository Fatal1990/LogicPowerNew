<template>
  <nav class="nav" ref="navListHTML">
    <div class="nav__w">
      <ul class="nav__list" @scroll="onNavScroll" ref="navItems">
        <li
          class="nav__item"
          v-for="item in navList"
          :key="item.id"
          @click="clickNav(item.id)"
          ref="navItemList"
        >
          <h3
            class="nav__title"
            :class="{
              active: item.id === CurrentNav,
            }"
          >
            {{ item.title }}
          </h3>
        </li>
      </ul>
      <div
        class="nav__color-line"
        :style="{
          '--line-width': colorLineWidth + 'px',
          '--pos-x': colorLinePosX + 'px',
        }"
      ></div>
      <div class="nav__line"></div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ProductNav } from "@/models/view/card_product/nav";
import { Prop } from "vue-property-decorator";
import {Component, Vue} from "~/tools/version-types";

@Component({
  name: "CardProductNavComponent",
})
export default class CardProductNavComponent extends Vue {
  @Prop({ required: true }) CurrentNav: ProductNav;

  declare $refs: {
    navListHTML: HTMLElement;
    navItems: HTMLElement;
    navItemList: HTMLElement[];
  };

  colorLineWidth: number = 0;
  colorLinePosX: number = 0;

  navList = [
    {
      id: ProductNav.ALL,
      title: "Всё о товаре",
    },
    {
      id: ProductNav.SPEC,
      title: "Характеристики",
    },
    {
      id: ProductNav.REVIEWS,
      title: "Отзывы",
    },
    {
      id: ProductNav.MEDIA,
      title: "Видео",
    },
    {
      id: ProductNav.DOWNLOADS,
      title: "Загрузки",
    },
  ];

  getIndex(id: ProductNav) {
    return this.navList.findIndex((el) => el.id === id);
  }

  calcColorLineWidth(index: number) {
    const currNavItemWidth = this.$refs.navItemList[index].scrollWidth;
    this.colorLineWidth = currNavItemWidth;
  }

  clickNav(id: ProductNav) {
    this.$emit("navChange", id);
    this.calcColorLineWidth(this.getIndex(id));
    this.calcColorLinePosX(this.getIndex(id));
  }

  calcColorLinePosX(index: number) {
    this.colorLinePosX =
      this.$refs.navItemList[index].offsetLeft - this.$refs.navItems.scrollLeft;
  }

  onResize() {
    this.calcColorLineWidth(this.getIndex(this.CurrentNav));
    this.calcColorLinePosX(this.getIndex(this.CurrentNav));
  }

  onNavScroll() {
    this.calcColorLinePosX(this.getIndex(this.CurrentNav));
  }

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  unmounted() {
    window.removeEventListener("resize", this.onResize);
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;

  @extend %flex-column;
  align-items: center;

  position: sticky;
  top: $height-header;
  z-index: 100;

  background-color: $color-bg-grey-white;

  @include mobile {
    align-items: flex-start;
  }

  &__w {
    position: relative;
    @extend %width-main;
  }

  &__line {
    @extend %width-main;
    height: 3px;

    position: absolute;
    bottom: 0;

    background-color: $color-bg-grey-lighter;

    z-index: -1;

    @include mobile() {
      height: 1px;
    }
  }

  &__color-line {
    --line-width: 0;
    --pos-x: 0;

    width: var(--line-width);

    height: 3px;

    position: absolute;
    bottom: 0;

    transform: translateX(var(--pos-x));

    background-color: $color-main;

    z-index: 1;

    transition: 0.4s ease;

    @include mobile() {
      height: 1px;
      transition: 0.1s ease;
    }
  }

  &__list {
    width: 100%;

    @include flex-container(row, space-between, flex-start);

    overflow-x: auto;

    @include scrollbarStyle(0px);

    @include mobile {
      gap: 16px;

      padding: 0 16px;
    }
  }

  &__item {
    width: 100%;
  }

  &__title {
    @include fontUnify(20, 24);
    text-align: center;

    white-space: nowrap;

    padding: 8px 0;

    cursor: pointer;
    transition: 0.2s ease;

    @include bigMobile {
      @include fontUnify(14, 20);
    }

    @include mobile {
      padding: 4px 0;
    }

    &:hover {
      color: $color-main;
    }

    &.active {
      color: $color-main;
    }
  }
}
</style>
