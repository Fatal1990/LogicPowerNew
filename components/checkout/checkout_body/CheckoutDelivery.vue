<template>
  <section class="delivery">
    <h2 class="delivery__title">Доставка</h2>    
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";

interface Product {
  id: string,
  code: string,
  // ...
}

@Options({
  name: "CheckoutDeliveryComponent",
  components: {
  }
})
export default class CheckoutDeliveryComponent extends Vue {

}
</script>

<style lang="scss" scoped></style>
