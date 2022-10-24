<template>
  <div class="lang">
    <a class="lang__item"
       v-for="(item, index) in langList"
       :key="index"
       :href="item.url"
       :class="{active: item.active}"
    >
    {{ item.title }}
    </a>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({
  name: "HeaderLangComponent",
})
export default class HeaderLangComponent extends Vue {
  langList = [
    {
      title: 'рус',
      active: true
    }, {
      title: 'укр',
      active: false
    }
  ];
}
</script>

<style lang="scss" scoped>
.lang {
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  @include animAll();

  @include mobile() {
    display: none;
  }

  &__item {
    position: relative;
    padding: 0 8px;

    @include fontCaption();
    cursor: pointer;

    &.active,
    &:hover {
      color: $color-main-light;
    }

    & + &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;

      height: 24px;
      width: 1px;
      background-color: white;

      transform: translateY(-50%);
    }
  }
}
</style>
