<template>
  <header class="header">
    <div class="header__w">
      <a class="header__logo-link" href="/home">
        <SvgIcon class="header__logo" :icon="icons['logo-short']" />
      </a>
      <a class="header__contact-link" href="tel:0800309988">
        <SvgIcon class="header__contact-img" :icon="icons['phone-line']" />
        0800309988
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  name: "CheckoutHeaderComponent",
  components: {
    SvgIcon,
  },
})
export default class CheckoutHeaderComponent extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  @include flex-container(row, center, center);

  background-color: #393d38;

  padding: 0 16px;

  &__w {
    @include flex-container(row, space-between, center);

    @extend %width-main;
  }

  &__logo {
    @include fixedHW(64px, 64px);

    color: white;

    transition: 0.2s ease;

    @include mobile {
      @include fixedHW(48px, 48px);
    }

    &:hover {
      color: $color-main;
    }
  }

  &__contact-link {
    @include flex-container(row, center, center);
    gap: 16px;

    @include fontUnify;
    color: white;

    transition: 0.2s ease;

    @include mobile {
      @include fontUnify(14, 18);
    }

    &:hover {
      color: $color-main;

      & .header__contact-img {
        color: $color-main;
      }
    }
  }

  &__contact-img {
    color: white;
    transition: 0.2s ease;
  }
}
</style>
