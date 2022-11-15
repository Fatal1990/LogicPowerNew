<template>
  <section class="delivery">
    <h2 class="delivery__title">Доставка</h2>
    <CheckoutPaymentN />
    <!-- {
      1: [2092, 2093, 2094],
      2: [3, 8, 9],
      2: [3, 8, 9],
    } -->
    <!-- <div v-for="item in list" :key="item.id">
      <div class="name" v-for="specification in item.specifications" :key="specification.id">
        <span>{{ specification.name.ru }}</span>
        <span>{{ specification.option.value.ru }}</span>
      </div>
      <div class="description"></div>
    </div> -->
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
