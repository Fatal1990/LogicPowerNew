<template>
  <div class="payment-component">
    Кол-во платежей {{extraChange}}
    <SelectGroup
      :placeholder="'Кол-во платежей'"
      :selectList="inInstList"
      v-model="extraChange"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import SelectGroup from "@/components/common/buttons/SelectGroup.vue";

@Options({
  name: "CheckoutIninstTypeComponent",
  components: {
    SelectGroup,
  },
})
export default class CheckoutIninstTypeComponent extends Vue {
  inInstList = ["3 платежа", "4 платежа", "6 платежей", "12 платежей"];

  extra = {
    inInst: "",
  };

  extraChange = '';

//   extraChange() {
//     this.extra.inInst = ;
//   }

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
