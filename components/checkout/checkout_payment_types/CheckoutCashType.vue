<template></template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";

@Options({
  name: "CheckoutCashTypeComponent",
})
export default class CheckoutCashTypeComponent extends Vue {
  extra: {
    cash: "cash"
  };

  mounted() {
    this.$emit("extraReady", this.extra);    
  }
}
</script>

<style lang="scss" scoped></style>
