<template>
  <div class="delivery-type">
    <RadioBtnGroup
      v-for="(deliveryType, deliveryKey) in deliveryTypes"
      :key="deliveryKey"
      :radioName="'novaPoshta'"
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
  name: "CheckoutNovaPoshtaTypeComponent",
  components: {
    RadioBtnGroup,
  },
})
export default class CheckoutNovaPoshtaTypeComponent extends Vue {
  deliveryTypes = {
    warehouse: {
      title: "Отделение почты",
    },
    postBox: {
      title: "Почтомат",
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
