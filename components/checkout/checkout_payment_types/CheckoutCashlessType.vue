<template></template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";

@Options({
  name: "CheckoutCashlessTypeComponent",
})
export default class CheckoutCashlessTypeComponent extends Vue {
  extra: {
    cashless: "cashless";
  };

  mounted() {
    this.$emit("extraReady", this.extra);
  }
}
</script>

<style lang="scss" scoped></style>
