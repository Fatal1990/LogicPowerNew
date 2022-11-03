<template>
  <div class="inst">
    <div class="inst__block">
      <p class="inst__block-caption">Выберите количество месяцев</p>
      <div class="inst__select-w">
        <div class="inst__select"></div>
        <SvgIcon class="inst__select-icon" :icon="icons['arrow-left']" />
        <div class="inst__option-list">
          <div class="inst__option-item">3 выплаты</div>
          <div class="inst__option-item">4 выплаты</div>
          <div class="inst__option-item">5 выплаты</div>
          <div class="inst__option-item">6 выплаты</div>
        </div>
      </div>
    </div>
    <div class="inst__line"></div>
    <div class="inst__block">
      <p class="inst__block-caption">Условия покупки</p>
      <div class="inst__block-info">
        <div class="inst__block-row">
          <span class="inst__block-row-title">Всего:</span>
          <span class="inst__block-row-val">26000 грн</span>
        </div>
        <div class="inst__block-row">
          <span class="inst__block-row-title">Количество платежей:</span>
          <span class="inst__block-row-val">3</span>
        </div>
        <div class="inst__block-row">
          <span class="inst__block-row-title">Ежемесячный платеж:</span>
          <span class="inst__block-row-val">6500 грн</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Options({
  name: "CheckoutInstComponent",
  components: { SvgIcon },
})
export default class CheckoutInstComponent extends Vue {}
</script>

<style lang="scss" scoped>
.inst {
  width: 100%;

  @include flex-container;

  border: 1px solid #d1d1d1;
  border-radius: 8px;

  @include mobile {
    flex-direction: column;
  }

  &__line {
    width: 1px;

    background-color: #d1d1d1;

    @include mobile {
      width: 100%;
      height: 1px;
    }
  }

  &__block {
    width: 100%;

    @include flex-container(column, flex-start, flex-start);
    gap: 24px;

    padding: 16px;

    @include mobile {
      padding-inline: 8px;
    }
  }

  &__block-caption {
    @include fontUnify(16, 22, 600);
  }

  &__block-info {
    width: 100%;

    @include flex-container(column, flex-start, flex-start);
    gap: 8px;
  }

  &__block-row {
    width: 100%;

    @include flex-container(row, space-between, center);
    gap: 8px;
  }

  &__block-row-title {
    @include fontUnify;
  }

  &__block-row-val {
    min-width: 90px;

    @include fontUnify;
    text-align: right;
    white-space: nowrap;
  }

  &__select-w {
    position: relative;

    width: 100%;

    &.active .inst__select-icon {
        transform: translateY(-50%) rotateZ(90deg);
    }
  }

  &__select {
  }

  &__select-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotateZ(270deg);

    transition: 0.2s ease;
  }

  &__option-list {
  }

  &__option-item {
  }
}
</style>
