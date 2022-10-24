<template>
  <div class="content__block">
    <div class="content__title-w" @click="dropDownProd()">
      <h4 class="content__title">
        {{ title }}
      </h4>
      <div class="content__title-mob-arrow">
        <img
          class="content__title-mob-arrow-img"
          src="@/assets/icons/nav-arrow-down.svg"
          alt=""
          :class="{ active: isActive }"
        />
      </div>
    </div>
    <div
      class="content__block-list-w"
      :class="{ active: isActive }"
      :style="{ '--list-height': listHeight + 'px' }"
    >
      <ul class="content__block-list" :class="{ thin: thin }" ref="listOfItem">
        <li
          class="content__block-list-item"
          v-for="item of list"
          :key="item.id"
          ref="ProdItem"
        >
          <a class="content__block-list-link" href="#"> {{ item.title }}</a>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import {Component, Vue} from "~/tools/version-types";

interface FooterListItem {
  id: number;
  title: string;
}

@Component({
  name: "FooterListComponent",
})
export default class FooterListComponent extends Vue {
  @Prop({ required: true }) title: string;
  @Prop({ required: true }) list: FooterListItem[];

  @Prop({ default: false }) thin: boolean;

  declare $refs: {
    listOfItem: HTMLElement;
  };

  isActive: boolean = false;
  listHeight: number = 0;

  dropDownProd() {
    if (innerWidth <= 680) {
      if (this.listHeight === 0) {
        this.listHeight = this.$refs.listOfItem.scrollHeight;
      } else this.listHeight = 0;

      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  &__block {
    @extend %flex-column;
    gap: 24px;

    @include mobile {
      border-bottom: 1px solid $color-main;
    }
  }

  &__title-w {
    @include flex-container(row, space-between, center);
  }

  &__title {
    position: relative;
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    color: $color-main;
  }

  &__title-mob-arrow {
    display: none;

    @include mobile {
      display: block;
    }
  }

  &__title-mob-arrow-img {
    transition: 0.5s ease;
    &.active {
      transform: rotate(180deg);
    }
  }

  &__block-list-w {
    --list-gap: 8px;
    --list-height: 0;

    max-width: 416px;
    width: 100%;

    @include flex-container(row, flex-start);
    gap: var(--list-gap);
    flex-wrap: wrap;

    overflow: hidden;

    transition: 0.5s ease;

    @include bigMobile {
      flex-direction: column;
    }

    @include mobile {
      max-width: none;
      height: var(--list-height);
    }

    &.active {
      @include mobile {
        height: var(--list-height);
      }
    }
  }

  &__block-list {
    max-width: 416px;
    width: 100%;

    @include flex-container(row, flex-start);
    gap: 8px;
    flex-wrap: wrap;

    overflow: hidden;

    &.thin {
      // max-height: 200px;

      @include mobile {
        max-height: none;
      }
    }

    @include mobile {
      max-height: none;
      max-width: none;

      flex-direction: column;
      flex-wrap: nowrap;

      padding-bottom: 16px;

      overflow: visible;
    }
  }

  &__block-list-item {
    width: 100%;
    max-width: 200px;

    @include mobile {
      max-width: none;
    }
  }

  &__block-list-link {
    width: 100%;
    max-width: 200px;

    @include fontUnify;
    letter-spacing: 0.02em;
    color: white;

    transition: 0.2s ease-in-out;

    @include mobile {
      max-width: none;
    }

    &:hover {
      color: $color-main-dark;
    }
  }
}
</style>
