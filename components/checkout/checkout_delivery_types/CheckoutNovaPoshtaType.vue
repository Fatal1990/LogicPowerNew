<template>
  <div class="delivery-type__w">
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
    <component
      v-if="selectedDeliveryType !== ''"
      :is="deliveryTypes[selectedDeliveryType].component"
    />
  </div>
</template>

<script lang="ts">
import RadioBtnGroup from "@/components/common/buttons/RadioBtnGroup.vue";
import { Vue, Component } from "~/tools/version-types";
import NovaPoshtaWarehouse from "@/components/checkout/checkout_delivery_types/nova_poshta_types/NovaPoshtaWarehouse.vue";
import NovaPoshtaPostBox from "@/components/checkout/checkout_delivery_types/nova_poshta_types/NovaPoshtaPostBox.vue";

@Component({
  name: "CheckoutNovaPoshtaTypeComponent",
  components: {
    RadioBtnGroup,
    NovaPoshtaWarehouse,
    NovaPoshtaPostBox,
  },
})
export default class CheckoutNovaPoshtaTypeComponent extends Vue {
  deliveryTypes = {
    warehouse: {
      title: "Отделение почты",
      component: NovaPoshtaWarehouse,
    },
    postBox: {
      title: "Почтомат",
      component: NovaPoshtaPostBox,
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

  &__w {
    width: 100%;

    @include flex-container(column, center, flex-start);
    gap: 24px;
  }
}
</style>
