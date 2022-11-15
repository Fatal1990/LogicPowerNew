<template>
  <div>
    <Input />
    <Input />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import Input from "@/components/common/input/Input.vue";

@Options({
  name: "CheckoutInstTypeComponent",
  components: {
    Input,
  },
})
export default class CheckoutInstTypeComponent extends Vue {
  extra = {
    input1: "hello",
    input2: "41415548488854",
  };

  mounted() {
    this.$emit("extraReady", this.extra);
  }
}
</script>

<style lang="scss" scoped></style>
