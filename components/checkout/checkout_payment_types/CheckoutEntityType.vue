<template>
  <div class="payment-component">
    <Input />
    <Input />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import Input from "@/components/common/input/Input.vue";

@Options({
  name: "CheckoutEntityTypeComponent",
  components: {
    Input,
  },
})
export default class CheckoutEntityTypeComponent extends Vue {
  extra = {
    input1: "hello",
    input2: "41415548488854",
  };

  mounted() {
    this.$emit("extraReady", this.extra);
  }
}
</script>

<style lang="scss" scoped>
.payment-component {
  width: 100%;

  @include flex-container(column, center, flex-start);
  gap: 16px;

  margin-top: 16px;
}
</style>
