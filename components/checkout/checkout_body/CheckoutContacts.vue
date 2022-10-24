<template>
  <section class="contacts">
    <h2 class="contacts__title">Контактные данные</h2>
    <div class="contacts__inputs">
      <CheckoutInputComponent></CheckoutInputComponent>
      <CheckoutInputComponent></CheckoutInputComponent>
      <CheckoutInputComponent></CheckoutInputComponent>
      <CheckoutInputComponent></CheckoutInputComponent>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import CheckoutInputComponent from "@/components/checkout/CheckoutInput.vue";

@Options({
  name: "CheckoutContactsComponent",
  components: { SvgIcon, CheckoutInputComponent },
})
export default class CheckoutContactsComponent extends Vue {}
</script>

<style lang="scss" scoped>
.contacts {
  --gap: 16px;
  max-width: 833px;
  width: 100%;

  @include flex-container(column, center, flex-start);
  gap: 24px;

  background: white;
  border-radius: 8px;

  padding: 32px;

  @include bigMobile {
    max-width: none;

    align-items: center;

    padding: 16px;
  }

  &__title {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;

    @include mobile {
      text-transform: none;
      text-align: center;
    }
  }

  &__inputs {
    @include flex-container(row, flex-start, flex-start);
    flex-wrap: wrap;
    gap: var(--gap);

    & div {
      max-width: none;
      @include set-item-count-in-row(2);

      @include mobile {
        @include set-item-count-in-row(1);
      }
    }
  }
}
</style>
