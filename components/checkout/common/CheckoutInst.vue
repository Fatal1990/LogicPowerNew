<template>
  <div class="inst">
    <div class="inst__block">
      <p class="inst__block-caption">Выберите количество месяцев</p>
      <!-- <div
        class="inst__select-w"
        tabindex="0"
        :class="{ active: openList }"
        @click="openList = !openList"
        @blur="openList = false"
      >
        <div class="inst__select">
          <input
            class="inst__select-input"
            type="text"
            disabled
            placeholder="Кол-во платежей"
            :value="choisedValue"
          />
        </div>
        <SvgIcon class="inst__select-icon" :icon="icons['arrow-down']" />
        <div class="inst__option-list">
          <div
            class="inst__option-item"
            v-for="instItem of instList"
            :key="instItem"
            @click.stop="
              choisedValue = instItem;
              openList = false;
              $emit('input', instItem);
              valueToNumber();
            "
          >
            {{ instItem }}
          </div>
        </div>
      </div> -->
      <SelectGroup :placeholder="'Кол-во платежей'" :selectList="instList" v-model.lazy="selectedPayCount"/>
    </div>
    <div class="inst__line"></div>
    <div class="inst__block">
      <p class="inst__block-caption">Условия покупки</p>
      <div class="inst__block-info">
        <div class="inst__block-row">
          <span class="inst__block-row-title">Всего:</span>
          <span class="inst__block-row-val">{{ sum }} грн</span>
        </div>
        <div class="inst__block-row">
          <span class="inst__block-row-title">Количество платежей:</span>
          <span class="inst__block-row-val">{{ selectedPayCount }}</span>
        </div>
        <div class="inst__block-row">
          <span class="inst__block-row-title">Ежемесячный платеж:</span>
          <span class="inst__block-row-val">{{ onePay }} грн</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import SelectGroup from "@/components/common/buttons/SelectGroup.vue";

@Options({
  name: "CheckoutInstComponent",
  components: { SvgIcon, SelectGroup },
})
export default class CheckoutInstComponent extends Vue {
  openList: boolean = false;
  choisedValue: string = "";
  sum: number = 26000;
  onePay: number = 0;

  instList: string[] = ["3 платежа", "4 платежа", "6 платежей", "12 платежей"];

  selectedPayCount: '';

  valueToNumber() {
    this.onePay = Math.ceil(this.sum / parseFloat(this.choisedValue));
  }
}
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

    @include flex-container(row, space-between, center);

    background-color: white;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    padding: 8px;

    cursor: pointer;

    &:hover {
      border-color: var(--color-ink-base);
    }

    &.active {
      border-color: var(--color-ink-base);

      .inst__select-icon {
        transform: rotateZ(180deg);
      }

      .inst__option-list {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__select {
  }

  &__select-input {
    @include fontUnify;
    color: var(--color-ink-base);

    cursor: pointer;
  }

  &__select-icon {
    @include fixedHW(24px, 24px);

    transition: 0.2s ease-in-out;
  }

  &__option-list {
    position: absolute;
    top: 42px;
    left: 0;
    z-index: 500;

    width: 100%;

    background-color: white;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    transition: 0.2s ease-in-out;

    opacity: 0;
    visibility: hidden;

    &:hover {
      border-color: var(--color-ink-base);
    }
  }

  &__option-item {
    @include fontUnify;

    padding: 8px;

    transition: 0.2s ease-in-out;

    &:first-child {
      border-top-right-radius: inherit;
      border-top-left-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:hover {
      background-color: var(--color-primary-lightest);
    }
  }
}
</style>
