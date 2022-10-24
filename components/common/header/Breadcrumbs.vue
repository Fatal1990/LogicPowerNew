<template>
  <div class="breadcrumbs">
    <a class="breadcrumbs__item ui-link" href="#">
    Главная
    </a>
    <SvgIcon class="breadcrumbs__arrow" :icon="icons['arrow-right']"></SvgIcon>
    <a class="breadcrumbs__item ui-link" href="#">
    Продукция
    </a>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  name: "BreadcrumbsComponent",
  components: {SvgIcon},
})
export default class BreadcrumbsComponent extends Vue {}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 16px;

  @include width-pad-main();

  margin: 0 auto;

  &__item {
    @include font(14, 16);
  }

  &__arrow {
    height: 16px;
    color: $color-main;
  }
}

</style>
