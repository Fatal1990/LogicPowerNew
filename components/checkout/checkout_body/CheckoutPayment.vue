<template>
  <div class="payment">
    <div
      class="payment__item"
      v-for="(paymentType, paymentTypeKey) in paymentTypes"
      :key="paymentTypeKey"
    >
      <RadioBtnGroup
        :radioName="'paymentTypes'"
        :radioFor="paymentTypeKey"
        :radioTitle="paymentType.title"
        :isChecked="selectedPaymentType === paymentTypeKey"
        :radioValue="paymentTypeKey"
        v-model="selectedPaymentType"
      />
      <component
        v-if="paymentTypeKey === selectedPaymentType"
        :is="paymentTypes[selectedPaymentType].component"
        @extraReady="onExtraReady"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import CheckoutCashTypeComponent from "@/components/checkout/checkout_payment_types/CheckoutCashType.vue";
import CheckoutCashlessTypeComponent from "@/components/checkout/checkout_payment_types/CheckoutCashlessType.vue";
import CheckoutInstTypeComponent from "@/components/checkout/checkout_payment_types/CheckoutInstType.vue";
import RadioBtnGroup from "~/components/common/buttons/RadioBtnGroup.vue";
import CheckoutEntityTypeComponent from "@/components/checkout/checkout_payment_types/CheckoutEntityType.vue";
import CheckoutEntepreneurTypeComponent from "@/components/checkout/checkout_payment_types/CheckoutEntepreneurType.vue";
import CheckoutIninstTypeComponent from "@/components/checkout/checkout_payment_types/CheckoutIninstType.vue";

@Options({
  components: {
    RadioBtnGroup,
    CheckoutCashTypeComponent,
    CheckoutCashlessTypeComponent,
    CheckoutInstTypeComponent,
    CheckoutEntityTypeComponent,
    CheckoutEntepreneurTypeComponent,
    CheckoutIninstTypeComponent,
  },
})
export default class CheckoutPayment extends Vue {
  paymentTypes = {
    cash: {
      title: "Наличными при получении",
      component: CheckoutCashTypeComponent,
    },
    cashless: {
      title: "Оплата картой",
      component: CheckoutCashlessTypeComponent,
    },
    cashlessEntepreneur: {
      title: "Безналичный расчет для ФОП",
      component: CheckoutEntepreneurTypeComponent,
    },
    cashlessEntity: {
      title: "Безналичный расчет для юридических лиц",
      component: CheckoutEntityTypeComponent,
    },
    inInst: {
      title: "Оплата частями",
      component: CheckoutIninstTypeComponent,
    },
    inst: {
      title: "Мгновенная рассрочка",
      component: CheckoutInstTypeComponent,
    },
  };

  extra = null;
  selectedPaymentType = "cash";

  onExtraReady(extra) {
    this.extra = extra;
    console.log(this.extra);
  }
}
</script>

<style lang="scss">
.payment {
  max-width: 833px;
  width: 100%;

  @include flex-container(column, center, flex-start);
  gap: 24px;

  background: white;
  border-radius: 8px;

  padding: 32px;

  @include bigMobile {
    max-width: none;

    padding: 16px;
  }

  &__item {
    width: 100%;

    @include flex-container(column, center, flex-start);
  }
}
</style>
