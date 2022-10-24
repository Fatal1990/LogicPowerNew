<template>
  <section class="characteristics">
    <slot></slot>
    <div class="characteristics__cont">
      <div class="characteristics__name">Вес, кг:</div>
      <div class="characteristics__value">0,35</div>
      <div class="characteristics__name">Дополнительные настройки:</div>
      <div class="characteristics__value">
        насыщенность, яркость, контраст, резкость, WDR, 3D NR, баланс белого.
        BLC, FLK (Flicker)
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class CardProductCharacteristicsComponent extends Vue {}
</script>

<style lang="scss" scoped>
.characteristics {
  display: none;
  gap: 16px;

  background-color: white;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  padding: var(--local-pad);

  &.active {
    @extend %flex-column;
  }

  &__cont {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8px;

    @include bigMobile {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__name {
    @include fontUnify(16, 22, 600);

    @include bigMobile {
      @include fontUnify(14, 20, 500);
    }
  }

  &__value {
    @include fontUnify;

    @include bigMobile {
      @include fontUnify(14, 20);
    }
  }
}
</style>
