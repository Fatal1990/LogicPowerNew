<template>
  <div class="payment-component">
    <Input v-model="extra.entityName" />
    <Input v-model="extra.entityCard"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import Input from "@/components/common/input/Input.vue";
import { Watch } from "vue-property-decorator";

@Options({
  name: "CheckoutEntityTypeComponent",
  components: {
    Input,
  },
})
export default class CheckoutEntityTypeComponent extends Vue {
  extra = {
    entityName: "",
    entityCard: "",
  };

  @Watch("extra.entityName")
  changeNameInput() {
    this.$emit("extraReady", this.extra);
  }

  @Watch("extra.entityCard")
  changeCardInput() {
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
