<template>
  <section class="payment">
    <h2 class="payment__title">Способы оплаты</h2>
    <CheckoutRadioBtn :option="decisions[0]" v-model="selected" />
    <CheckoutRadioBtn :option="decisions[1]" v-model="selected" />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import CheckoutRadioBtn from "@/components/checkout/CheckoutRadioBtn.vue";

@Options({
  name: "CheckoutPaymentComponent",
  components: {
    CheckoutRadioBtn,
  },
})
export default class CheckoutPaymentComponent extends Vue {
  selected: string = "";
  decisions: any[] = ["Оплата картой", "Наличными при получении"];

}
</script>

<style lang="scss" scoped></style>
