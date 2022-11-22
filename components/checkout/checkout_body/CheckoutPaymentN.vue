<template>
  <div>
    {{ selectedPaymentType }}
    <div
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

@Options({
  components: {
    RadioBtnGroup,
    CheckoutCashTypeComponent,
    CheckoutCashlessTypeComponent,
    CheckoutInstTypeComponent,
  },
})
export default class CheckoutPaymentN extends Vue {
  paymentTypes = {
    cash: {
      title: "Наличными при получении",
      component: CheckoutCashTypeComponent,
    },
    cashless: {
      title: "Оплата картой",
      component: CheckoutCashlessTypeComponent,
    },
    inst: {
      title: "Оплата частями",
      component: CheckoutInstTypeComponent,
    },
  };

  extra = null;
  selectedPaymentType = "cash";

  onExtraReady(extra) {
    this.extra = extra;
    console.log(extra, this.extra);
  }
}
</script>

<style></style>
