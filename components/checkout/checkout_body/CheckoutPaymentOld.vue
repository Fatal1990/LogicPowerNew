<template>
  <section class="payment">
    <h2 class="payment__title">Способы оплаты</h2>
    <RadioBtnGroup
      :inputList="cashRadio"
      :name="'paymentType'"
      :isChecked="radioPaymentValue === PAYMENT_TYPE.cash"
      v-model="radioPaymentValue"
    />
    <RadioBtnGroup
      :inputList="cashlessRadio"
      :name="'paymentType'"
      v-model="radioPaymentValue"
    />
    <RadioBtnGroup
      :inputList="cashlessEntepreneurRadio"
      :name="'paymentType'"
      v-model="radioPaymentValue"
    />
    <div v-show="radioPaymentValue === PAYMENT_TYPE.cashlessEntepreneur">
    </div>
    <RadioBtnGroup
      :inputList="cashlessEntityRadio"
      :name="'paymentType'"
      v-model="radioPaymentValue"
    />
    <div v-show="radioPaymentValue === PAYMENT_TYPE.cashlessEntity">
      <Input />
      <Input />
    </div>
    <RadioBtnGroup
      :inputList="inInstRadio"
      :name="'paymentType'"
      v-model="radioPaymentValue"
    />
    <CheckoutInst v-show="radioPaymentValue === PAYMENT_TYPE.inInst" />
    <RadioBtnGroup
      :inputList="instRadio"
      :name="'paymentType'"
      v-model="radioPaymentValue"
    />
    <CheckoutInst v-show="radioPaymentValue === PAYMENT_TYPE.inst" />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import RadioBtnGroup from "@/components/common/buttons/RadioBtnGroup.vue";
import Input from "@/components/common/input/Input.vue";
import CheckoutInst from "@/components/checkout/common/CheckoutInst.vue";
import CheckoutCashType from "@/components/checkout/checkout_payment_types/CheckoutCashType.vue";
import CheckoutCashlessType from "@/components/checkout/checkout_payment_types/CheckoutCashlessType.vue";
import { Component } from "vue/types/umd";

enum PAYMENT_TYPE {
  cashless = "cashless",
  cash = "cash",
  inst = "inst",
  inInst = "inInst",
  cashlessEntity = "cashlessEntity",
  cashlessEntepreneur = "cashlessEntepreneur",
}

type PaymentType = {
  paymentType: PAYMENT_TYPE;
  component: Component;
};

type RadioBtnModel = {
  title: string;
  value: PAYMENT_TYPE;
  tip?: string;
};

@Options({
  name: "CheckoutPaymentOldComponent",
  components: {
    RadioBtnGroup,
    Input,
    CheckoutInst,
    CheckoutCashType,
    CheckoutCashlessType,
  },
})
export default class CheckoutPaymentOldComponent extends Vue {
  PAYMENT_TYPE = PAYMENT_TYPE;
  radioPaymentValue: PAYMENT_TYPE = PAYMENT_TYPE.cash;

  paymentTypes: PaymentType[] = [
    { paymentType: PAYMENT_TYPE.cash, component: CheckoutCashType },
    { paymentType: PAYMENT_TYPE.cashless, component: CheckoutCashlessType },
  ];

  cashlessRadio: RadioBtnModel[] = [
    {
      title: "Оплата картой",
      value: PAYMENT_TYPE.cashless,
    },
  ];

  cashRadio: RadioBtnModel[] = [
    {
      title: "Наличными при получении",
      value: PAYMENT_TYPE.cash,
    },
  ];

  instRadio: RadioBtnModel[] = [
    {
      title: "Мгновенная рассрочка",
      value: PAYMENT_TYPE.inst,
    },
  ];

  inInstRadio: RadioBtnModel[] = [
    {
      title: "Оплата частями",
      value: PAYMENT_TYPE.inInst,
    },
  ];

  cashlessEntityRadio: RadioBtnModel[] = [
    {
      title: "Безналичный расчет для юридических лиц",
      value: PAYMENT_TYPE.cashlessEntity,
    },
  ];

  cashlessEntepreneurRadio: RadioBtnModel[] = [
    {
      title: "Безналичный расчет для ФОП",
      value: PAYMENT_TYPE.cashlessEntepreneur,
    },
  ];
}
</script>

<style lang="scss" scoped>
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
}
</style>
