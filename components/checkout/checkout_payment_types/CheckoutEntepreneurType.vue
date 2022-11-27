<template>
  <div class="payment-component">
    <Input v-model="extra.entepreneurName" :caption="'ФИО'"/>
    <Input v-model="extra.entepreneurCard" :caption="'Номер счета'"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import Input from "@/components/common/input/Input.vue";
import { Watch } from "vue-property-decorator";

@Options({
  name: "CheckoutEntepreneurTypeComponent",
  components: {
    Input,
  },
})
export default class CheckoutEntepreneurTypeComponent extends Vue {
  extra = {
    entepreneurName: "",
    entepreneurCard: "",
  };

  @Watch("extra.entepreneurName")
  changeNameInput() {
    this.$emit("extraReady", this.extra);
  }

  @Watch("extra.entepreneurCard")
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
