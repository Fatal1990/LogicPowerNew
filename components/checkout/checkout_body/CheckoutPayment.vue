<template>
  <section class="payment">
    <h2 class="payment__title">Способы оплаты</h2>
    <!-- <CheckoutRadioBtn :option="decisions[0]" v-model="selected" />
    <CheckoutRadioBtn :option="decisions[1]" v-model="selected" /> -->

    <UiRagioGroup :list="cashlessRadio" name="" v-model="radioValue"/>
    <UiRagioGroup :list="cashRadio"  name="" :model="radioValue" @change="change"/>

    <!-- <div class="radio-item" v-for="item in cashRadio" :key="item.value">
      <input type="radio" :value="item.value" :name="'123'">
      <span class="mark"></span> 
      <span>{{item.title}}</span>
    </div>
    <div v-if="radioValue === RADIO_VALUES.cash">
    </div> -->

    <div class="group">
    <div class="radio-item" v-for="item in cashlessRadio" :key="item.value">
      <input type="radio" 
      :value="item.value" 
      :name="'123'"
      />
      <span class="mark"></span> 
      <span>{{item.title}}</span>
    </div>
  </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import CheckoutRadioBtn from "@/components/checkout/CheckoutRadioBtn.vue";
import { Watch } from "vue-property-decorator";

enum RADIO_VALUES {
  cashless = 'cashless',
  cash = 'cash',
  inst = 'inst',
}

type RadioBtnModel = {
  title: string,
  value: RADIO_VALUES,
  tip?: string,
}


@Options({
  name: "CheckoutPaymentComponent",
  components: {
    CheckoutRadioBtn,
  },
})
export default class CheckoutPaymentComponent extends Vue {

  RADIO_VALUES = RADIO_VALUES;
  cashlessRadio: RadioBtnModel[] = [{
    title: 'Оплата картой',
    value: RADIO_VALUES.cashless
  }];

  cashRadio: RadioBtnModel[] = [    
    {
      title: 'Наличными при получении',
      value: RADIO_VALUES.cash
    },
    {
      title: 'Рассрочка',
      value: RADIO_VALUES.inst
    },
    {
      title: 'Рассрочка',
      value: RADIO_VALUES.inst
    }
  ];

  radioValue: RADIO_VALUES = RADIO_VALUES.cash;

  change(val) {
    this.radioValue = val;
  }
}
</script>

<style lang="scss" scoped>
input:checked ~ .mark {
 width: 20px;
 height: 20px;
 background-color: red;
}
</style>
