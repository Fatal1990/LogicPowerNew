<template>
  <div class="social">
    <span class="social__title">
      Мы в соцсетях:
    </span>
    <div class="social__list">
      <a class="social__item" href="" target="_blank">
      <SvgIcon :icon="icons['instagram']"/>
      </a>
      <a class="social__item" href="" target="_blank">
      <SvgIcon :icon="icons['youtube']"/>
      </a>
      <a class="social__item" href="" target="_blank">
      <SvgIcon :icon="icons['facebook']"/>
      </a>
      <a class="social__item" href="" target="_blank">
      <SvgIcon :icon="icons['telegram-circled']"/>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  name: "MenuSocialsComponent",
  components: {SvgIcon},
})
export default class MenuSocialsComponent extends Vue {

}
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__title {
    @include font(16, 18);
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__item {
    @include fixedHW(18px, 18px);
    color: $color-main;

    @include animAll();

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
