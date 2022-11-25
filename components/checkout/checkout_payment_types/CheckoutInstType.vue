<template>
  <div class="payment-component">
    <div class="payment-component__block">
      <p class="payment-component__block-caption">
        Выберите количество месяцев
      </p>
      <SelectGroup
        :placeholder="'Кол-во платежей'"
        :selectList="instList"
        v-model="extra.inst"
      />
    </div>
    <div class="payment-component__line"></div>
    <div class="payment-component__block">
      <p class="payment-component__block-caption">Условия покупки</p>
      <div class="payment-component__block-info">
        <div class="payment-component__block-row">
          <span class="payment-component__block-row-title">Всего:</span>
          <span class="payment-component__block-row-val">{{ sum }} грн</span>
        </div>
        <div class="payment-component__block-row">
          <span class="payment-component__block-row-title"
            >Количество платежей:</span
          >
          <span class="payment-component__block-row-val">{{
            extra.inst
          }}</span>
        </div>
        <div class="payment-component__block-row">
          <span class="payment-component__block-row-title"
            >Ежемесячный платеж:</span
          >
          <span class="payment-component__block-row-val">{{ onePay }} грн</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import SelectGroup from "@/components/common/buttons/SelectGroup.vue";
import { Watch } from "vue-property-decorator";

@Options({
  name: "CheckoutInstTypeComponent",
  components: {
    SelectGroup,
  },
})
export default class CheckoutInstTypeComponent extends Vue {
  instList = ["3 платежа", "4 платежа", "6 платежей", "12 платежей"];

  onePay: number = 0;
  sum: number = 26000;

  extra = {
    inst: "",
  };

  @Watch("extra.inst")
  valueToNumber() {
    this.onePay = Math.ceil(this.sum / parseFloat(this.extra.inst));
    this.$emit("extraReady", this.extra);
  }
}
</script>

<style lang="scss" scoped>
.payment-component {
  width: 100%;

  @include flex-container;

  border: 1px solid #d1d1d1;
  border-radius: 8px;

  margin-top: 16px;

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
}
</style>