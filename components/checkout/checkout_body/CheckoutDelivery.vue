<template>
  <section class="delivery">
    <h2 class="delivery__title">Доставка</h2>
    <div class="delivery__list">
      <div
        class="delivery__item"
        v-for="(deliveryType, deliveryTypeKey) in deliveryTypes"
        :key="deliveryTypeKey"
      >
        <RadioBtnGroup
          :radioName="'deliveryTypes'"
          :radioFor="deliveryTypeKey"
          :radioTitle="deliveryType.title"
          :isChecked="selectedDeliveryType === deliveryTypeKey"
          :radioValue="deliveryTypeKey"
          v-model="selectedDeliveryType"
        />
        <component
          v-if="deliveryTypeKey === selectedDeliveryType"
          :is="deliveryTypes[selectedDeliveryType].component"
          @extraReady="onExtraReady"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import CheckoutUkrPochtaType from "@/components/checkout/checkout_delivery_types/CheckoutUkrPochtaType.vue";
import CheckoutNovaPoshtaType from "@/components/checkout/checkout_delivery_types/CheckoutNovaPoshtaType.vue";
import RadioBtnGroup from "@/components/common/buttons/RadioBtnGroup.vue";

@Component({
  name: "CheckoutDeliveryComponent",
  components: {
    CheckoutUkrPochtaType,
    CheckoutNovaPoshtaType,
    RadioBtnGroup,
  },
})
export default class CheckoutDeliveryComponent extends Vue {
  deliveryTypes = {
    novaPoshta: {
      title: "Новая почта",
      component: CheckoutNovaPoshtaType,
    },
    ukrPochta: {
      title: "Укр Почта",
      component: CheckoutUkrPochtaType,
    },
  };

  extra = null;
  selectedDeliveryType = "";

  onExtraReady(extra) {
    this.extra = extra;
    console.log(this.extra);
  }
}
</script>

<style lang="scss" scoped>
.delivery {
  max-width: 833px;
  width: 100%;

  @include flex-container(column, center, flex-start);
  gap: 24px;

  background: white;
  border-radius: 8px;

  padding: 32px;

  @include bigMobile {
    max-width: none;

    padding: 16px;
  }

  &__title {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(16, 22, 600);
      text-transform: none;
    }
  }

  &__list {
    width: 100%;

    @include flex-container(row, flex-start, center);
    gap: 24px;
  }

  &__item {
    @include flex-container(column, center, flex-start);
  }
}
</style>
