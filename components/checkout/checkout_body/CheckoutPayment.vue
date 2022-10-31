<template>
  <section class="payment">
    <h2 class="payment__title">Способы оплаты</h2>
    <RadioBtnGroup
      :inputList="cashRadio"
      :name="'paymentType'"
      v-model="radioPaymentValue"
    />
    <div v-if="radioPaymentValue === RADIO_VALUES.cash">
      <CheckoutInput />
      <CheckoutInput />
    </div>
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
    <div v-if="radioPaymentValue === RADIO_VALUES.cashlessEntepreneur">
      <CheckoutInput />
      <CheckoutInput />
    </div>
    <RadioBtnGroup
      :inputList="cashlessEntityRadio"
      :name="'paymentType'"
      v-model="radioPaymentValue"
    />
    <div v-if="radioPaymentValue === RADIO_VALUES.cashlessEntity">
      <CheckoutInput />
      <CheckoutInput />
    </div>
    <RadioBtnGroup
      :inputList="inInstRadio"
      :name="'paymentType'"
      v-model="radioPaymentValue"
    />
    <RadioBtnGroup
      :inputList="instRadio"
      :name="'paymentType'"
      v-model="radioPaymentValue"
    />

    <!-- <div class="radio-item" v-for="item in cashRadio" :key="item.value">
      <input type="radio" :value="item.value" :name="'123'">
      <span class="mark"></span> 
      <span>{{item.title}}</span>
    </div>
    <div v-if="radioValue === RADIO_VALUES.cash">
    </div> -->
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import RadioBtnGroup from "@/components/common/buttons/RadioBtnGroup.vue";
import CheckoutInput from "@/components/checkout/CheckoutInput.vue"

enum RADIO_VALUES {
  cashless = "cashless",
  cash = "cash",
  inst = "inst",
  inInst = "inInst",
  cashlessEntity = "cashlessEntity",
  cashlessEntepreneur = "cashlessEntepreneur",
}

type RadioBtnModel = {
  title: string;
  value: RADIO_VALUES;
  tip?: string;
};

@Options({
  name: "CheckoutPaymentComponent",
  components: {
    RadioBtnGroup,
    CheckoutInput
  },
})
export default class CheckoutPaymentComponent extends Vue {
  RADIO_VALUES = RADIO_VALUES;
  radioPaymentValue: RADIO_VALUES = RADIO_VALUES.cash;

  cashlessRadio: RadioBtnModel[] = [
    {
      title: "Оплата картой",
      value: RADIO_VALUES.cashless,
    },
  ];

  cashRadio: RadioBtnModel[] = [
    {
      title: "Наличными при получении",
      value: RADIO_VALUES.cash,
    },
  ];

  instRadio: RadioBtnModel[] = [
    {
      title: "Мгновенная рассрочка",
      value: RADIO_VALUES.inst,
    },
  ];

  inInstRadio: RadioBtnModel[] = [
    {
      title: "Оплата частями",
      value: RADIO_VALUES.inInst,
    },
  ];

  cashlessEntityRadio: RadioBtnModel[] = [
    {
      title: "Безналичный расчет для юридических лиц",
      value: RADIO_VALUES.cashlessEntity,
    },
  ];

  cashlessEntepreneurRadio: RadioBtnModel[] = [
    {
      title: "Безналичный расчет для ФОП",
      value: RADIO_VALUES.cashlessEntepreneur,
    },
  ];

  change(val) {
    this.radioPaymentValue = val;
  }
}
</script>

<style lang="scss" scoped></style>
