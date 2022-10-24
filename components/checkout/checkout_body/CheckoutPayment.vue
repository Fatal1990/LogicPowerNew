<template>
  <section class="payment">
    <h2 class="payment__title">Способы оплаты</h2>
    <CheckoutRadioBtn option="Оплата картой"/>
    <CheckoutRadioBtn option="Наличными при получении"/>

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
export default class CheckoutPaymentComponent extends Vue {}
</script>

<style lang="scss" scoped></style>
