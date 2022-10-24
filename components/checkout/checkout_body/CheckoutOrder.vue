<template>
  <section class="order">
    <div class="head">
      <h2 class="head__title">Ваш заказ (12 товаров)</h2>
      <button class="head__order-edit">
        <SvgIcon class="head__order-edit-icon" :icon="icons['edit']" />
        <span class="head__order-edit-text">Редактировать заказ</span>
      </button>
    </div>
    <div class="body">
      <ul class="body__order-list">
        <li class="body__order-product">
          <div class="body__order-product-name">
            <a href="#" class="body__order-product-img-w">
              <img
                class="body__order-product-img"
                src="https://logicpower.ua/storage/1914348/conversions/19774_1-product_img.jpg"
                alt=""
              />
            </a>
            <div class="body__order-product-column">
              <a href="#" class="body__order-product-title"
                >Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)</a
              >
              <span class="body__order-product-code">Код: 1324</span>
            </div>
          </div>
          <div class="body__order-product-values">
            <div class="body__order-product-column">
              <span class="body__order-product-caption">Цена</span>
              <span class="body__order-product-price">19 954 &#8372;</span>
            </div>
            <div class="body__order-product-column">
              <span class="body__order-product-caption">Количество</span>
              <span class="body__order-product-quntity">12</span>
            </div>
            <div class="body__order-product-column">
              <span class="body__order-product-caption">Сумма</span>
              <span class="body__order-product-sum">199 954 &#8372;</span>
            </div>
          </div>
        </li>
        <li class="body__order-product">
          <div class="body__order-product-name">
            <a href="#" class="body__order-product-img-w">
              <img
                class="body__order-product-img"
                src="https://logicpower.ua/storage/1914348/conversions/19774_1-product_img.jpg"
                alt=""
              />
            </a>
            <div class="body__order-product-column">
              <a href="#" class="body__order-product-title"
                >Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)</a
              >
              <span class="body__order-product-code">Код: 1324</span>
            </div>
          </div>
          <div class="body__order-product-values">
            <div class="body__order-product-column">
              <span class="body__order-product-caption">Цена</span>
              <div class="body__order-product-price-sale">
                <span class="body__order-product-price-old"
                  >19 954 &#8372;</span
                >
                <span class="body__order-product-price-new"
                  >10 954 &#8372;</span
                >
              </div>
            </div>
            <div class="body__order-product-column">
              <span class="body__order-product-caption">Количество</span>
              <span class="body__order-product-quntity">12</span>
            </div>
            <div class="body__order-product-column">
              <span class="body__order-product-caption">Сумма</span>
              <span class="body__order-product-sum">199 954 &#8372;</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import SvgIcon from "@/_shared/components/svg/SvgIcon.vue";

@Options({
  name: "CheckoutOrderComponent",
  components: {
    SvgIcon,
  },
})
export default class CheckoutOrderComponent extends Vue {}
</script>

<style lang="scss" scoped>
.order {
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

}
.head {
  width: 100%;

  @include flex-container(row, space-between, center);
  gap: 16px;

  &__title {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(16, 22, 600);
      text-transform: none;
    }
  }

  &__order-edit {
    @include flex-container(row, center, center);
    gap: 16px;

    &:hover {
      color: $color-main;
    }
  }

  &__order-edit-icon {
    @include fixedHW(20px, 20px);

    @include mobile {
      @include fixedHW(24px, 24px);
    }
  }

  &__order-edit-text {
    @include fontUnify;

    @include mobile {
      display: none;
    }
  }
}
.body {
  &__order-list {
    @include flex-container(column, center, center);
    gap: 8px;
  }

  &__order-product {
    width: 100%;

    @include flex-container;
    gap: 32px;

    border-bottom: 1px solid #8a8a8a;

    padding-bottom: 8px;

    @include mobile {
      flex-direction: column;
      gap: 8px;
    }
  }

  &__order-product-name {
    width: 100%;

    display: grid;
    grid-template-columns: 60px 1fr;
    align-items: center;
    gap: 16px;
  }

  &__order-product-img-w {
    @include fixedHW(60px, 60px);
  }

  &__order-product-img {
  }

  &__order-product-column {
    @include flex-container(column, center, center);
    gap: 8px;
  }

  &__order-product-title {
    align-self: flex-start;

    @include fontUnify;
    
    &:hover {
      color: $color-main;
    }
  }

  &__order-product-code {
    align-self: flex-start;

    @include fontUnify(12, 16);
  }

  &__order-product-values {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
    align-items: start;
  }

  &__order-product-caption {
    @include fontUnify(12, 16);
    color: #8a8a8a;
  }

  &__order-product-price {
    @include fontUnify(16, 22, 600);
  }

  &__order-product-price-sale {
    @include flex-container(column, center, center);
    gap: 4px;
  }

  &__order-product-price-old {
    @include fontUnify(12, 16);
    text-decoration: line-through;
  }

  &__order-product-price-new {
    @include fontUnify(16, 22, 600);
    color: red;
  }

  &__order-product-quntity {
    @include fontUnify;
  }

  &__order-product-sum {
    @include fontUnify(16, 22, 600);
    color: $color-main;
  }
}
</style>
