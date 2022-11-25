<template>
  <article class="layout">
    <CheckoutHeader />
    <main class="main-layout">
      <h1 class="main-layout__title">Оформление заказа</h1>
      <div class="checkout__form">
        <div class="main-layout__w">
          <!-- <CheckoutContacts /> -->
          <CheckoutOrder />
          <CheckoutPayment />
          <CheckoutDelivery />
          <CheckoutComment />
        </div>
        <CheckoutAside />
      </div>
    </main>
    <CheckoutFooter />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import CheckoutHeaderComponent from "@/components/checkout/CheckoutHeader.vue";
import CheckoutFooterComponent from "@/components/checkout/CheckoutFooter.vue";
import CheckoutContactsComponent from "@/components/checkout/checkout_body/CheckoutContacts.vue";
import CheckoutOrderComponent from "@/components/checkout/checkout_body/CheckoutOrder.vue";
import CheckoutAsideComponent from "@/components/checkout/checkout_body/CheckoutAside.vue";
import CheckoutDeliveryComponent from "@components/checkout/checkout_body/CheckoutDelivery.vue";
import CheckoutCommentComponent from "@components/checkout/checkout_body/CheckoutComment.vue";
import CheckoutPayment from "@/components/checkout/checkout_body/CheckoutPayment.vue";

@Component({
  components: {
    SvgIcon,
    CheckoutHeaderComponent,
    CheckoutFooterComponent,
    CheckoutContactsComponent,
    CheckoutOrderComponent,
    CheckoutAsideComponent,
    CheckoutPayment,
    CheckoutCommentComponent,
    CheckoutDeliveryComponent,
  },
})
export default class CheckoutComponent extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;

  @include flex-container(column, center, center);
  gap: 64px;
}

.main-layout {
  @extend %width-main;

  @include flex-container(column, center, center);
  gap: 48px;

  padding: 0 16px;

  &__w {
    @include flex-container(column, flex-start);
    gap: 16px;
  }

  &__title {
    @include fontUnify(36, 44, 700);

    @include mobile {
      @include fontUnify(24, 34, 700);
    }
  }
}

.checkout__form {
  @include flex-container(row, flex-start);
  gap: 16px;

  @include bigMobile {
    flex-direction: column;
  }
}
</style>
