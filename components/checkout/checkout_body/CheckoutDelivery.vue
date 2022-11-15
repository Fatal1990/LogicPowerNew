<template>
  <section class="delivery">
    <h2 class="delivery__title">Доставка</h2>
    <CheckoutPaymentN />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import CheckoutPaymentN from "@/components/checkout/checkout_body/CheckoutPaymentN.vue";

interface Product {
  id: string,
  code: string,
  // ...
}

@Options({
  name: "CheckoutDeliveryComponent",
  components: {
    CheckoutPaymentN
  }
})
export default class CheckoutDeliveryComponent extends Vue {

}
</script>

<style lang="scss" scoped></style>
