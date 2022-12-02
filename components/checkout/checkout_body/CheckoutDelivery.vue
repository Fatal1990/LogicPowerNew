<template>
  <section class="delivery">
    <h2 class="delivery__title">Доставка</h2>
    <div class="delivery__list">
      <SelectGroup
        :selectList="newList"
        :caption="'Способ доставки'"
        v-model="selectedPostType"
      />
    </div>
    <component
      v-if="exactItem"
      :is="exactItem.component"
      @extraReady="onExtraReady"
    />
    <div class="delivery__recepient" v-if="exactItem">
      <p>Получатель:</p>
      <CheckBox v-model="anotherRecipient">
        <span>Другой человек</span>
      </CheckBox>
      <CheckoutAnotherRecipient v-if="anotherRecipient" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import CheckoutUkrPochtaType from "@/components/checkout/checkout_delivery_types/CheckoutUkrPochtaType.vue";
import CheckoutNovaPoshtaType from "@/components/checkout/checkout_delivery_types/CheckoutNovaPoshtaType.vue";
import RadioBtnGroup from "@/components/common/buttons/RadioBtnGroup.vue";
import SelectGroup from "@/components/common/buttons/SelectGroup.vue";
import { Watch } from "vue-property-decorator";
import CheckBox from "@/components/common/buttons/CheckBox.vue";
import Input from "@/components/common/input/Input.vue";
import CheckoutAnotherRecipient from "@/components/checkout/checkout_another_recipient/CheckoutAnotherRecipient.vue";

const list = (postTypes) => {
  const newArr: any[] = [];

  for (let elem in postTypes) {
    newArr.push(postTypes[elem]);
  }

  console.log(newArr);

  return newArr;
};

@Component({
  name: "CheckoutDeliveryComponent",
  components: {
    CheckoutUkrPochtaType,
    CheckoutNovaPoshtaType,
    RadioBtnGroup,
    SelectGroup,
    CheckBox,
    Input,
    CheckoutAnotherRecipient,
  },
})
export default class CheckoutDeliveryComponent extends Vue {
  // deliveryTypeList = ["Новая почта", "Укр Почта"];

  postTypes = {
    novaPoshta: {
      title: "Новая почта",
      component: CheckoutNovaPoshtaType,
    },
    ukrPochta: {
      title: "Укр Почта",
      component: CheckoutUkrPochtaType,
    },
  };

  newList = list(this.postTypes);
  exactItem: any = null;

  extra = null;
  selectedPostType = "";
  anotherRecipient: boolean = false;

  // setAnotherRecipient() {
  //   this.anotherRecipient = !this.anotherRecipient;
  //   console.log(this.anotherRecipient);

  // }

  onExtraReady(extra) {
    this.extra = extra;
    console.log("extra delivery", this.extra);
  }

  @Watch("selectedPostType")
  getRightComponent() {
    this.exactItem = this.newList.filter(
      (item) => item.title === this.selectedPostType
    )[0];
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
    max-width: 363px;
    width: 100%;

    @include flex-container(row, flex-start, center);
    gap: 24px;

    @include mobile {
      max-width: none;
    }
  }

  &__item {
    @include flex-container(column, center, flex-start);
  }

  &__recepient {
    @include flex-container(column, center, flex-start);
    gap: 24px;

    @include fontUnify;
  }
}
</style>
