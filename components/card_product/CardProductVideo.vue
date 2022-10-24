<template>
  <section class="video">
    <slot></slot>
    <div class="video__player-list">
      <div class="video__player-w">
        <iframe
          class="video__player"
          src="https://www.youtube.com/embed/mVcXW-jdC3Q"
          frameborder="0"
        ></iframe>
      </div>
      <div class="video__player-w">
        <iframe
          class="video__player"
          src="https://www.youtube.com/embed/mVcXW-jdC3Q"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class CardProductVideoComponent extends Vue {}
</script>

<style lang="scss" scoped>
.video {
  display: none;

  gap: 16px;

  background-color: white;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  padding: var(--local-pad);

  &.active {
    @extend %flex-column;
  }

  &__player-list {
    @include flex-container(row, center, center);
    flex-wrap: wrap;
    gap: 16px;
  }

  &__player-w {
    width: 100%;
    max-width: 493px;
    height: 256px;
  }

  &__player {
    width: 100%;
    height: 100%;
  }
}
</style>
