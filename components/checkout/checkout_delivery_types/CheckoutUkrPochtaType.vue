<template>
  <div class="delivery-type">
    <RadioBtnGroup
      v-for="(deliveryType, deliveryKey) in deliveryTypes"
      :key="deliveryKey"
      :radioName="'ukrPoshta'"
      :radioTitle="deliveryType.title"
      :radioFor="deliveryKey"
      :radioValue="deliveryKey"
      v-model="selectedDeliveryType"
    />
  </div>

  <!-- <component
        v-if="deliveryKey === selectedDeliveryType"
        :is="deliveryTypes[selectedDeliveryType].component"
      /> -->
</template>

<script lang="ts">
import RadioBtnGroup from "@/components/common/buttons/RadioBtnGroup.vue";
import { Vue, Component } from "~/tools/version-types";

@Component({
  name: "CheckoutUkrPochtaTypeComponent",
  components: {
    RadioBtnGroup,
  },
})
export default class CheckoutUkrPochtaTypeComponent extends Vue {
  deliveryTypes = {
    warehouse: {
      title: "Отделение почты",
    },
    delivery: {
      title: "Адрес доставки",
    },
  };

  selectedDeliveryType = "";
}
</script>

<style lang="scss" scoped>
.delivery-type {
  width: 100%;

  @include flex-container(row, flex-start, flex-start);
  gap: 24px;

  @include mobile {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
