<template>
  <section class="description">
    <div class="ui-anchor" id="description"></div>
    <slot></slot>
    <div class="ui-rich-text" v-html="contentFromServer"></div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class CardProductDescriptionComponent extends Vue {
  contentFromServer: string = "";
}
</script>

<style lang="scss" scoped>
.description {
  display: none;

  background-color: white;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  padding: var(--local-pad);

  &.active {
    @extend %flex-column;
  }

  & .spec__title {
    margin-bottom: 24px;
  }
}
</style>
