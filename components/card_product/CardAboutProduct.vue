<template>
  <article class="product-about">
    <div class="gallery">
      <div class="gallery__w"></div>
      <div class="info__block">
        <div class="advantage">
          <h2 class="info__block-title">Преимущества</h2>
          <div class="advantage__w">
            <div class="advantage__img-w">
              <img class="advantage__img" src="@/assets/icons/cardAdvantage1.svg" alt="" />
            </div>
            <div class="advantage__img-w">
              <img class="advantage__img" src="@/assets/icons/cardAdvantage2.svg" alt="" />
            </div>
            <div class="advantage__img-w">
              <img class="advantage__img" src="@/assets/icons/cardAdvantage3.svg" alt="" />
            </div>
            <div class="advantage__img-w">
              <img class="advantage__img" src="@/assets/icons/cardAdvantage4.svg" alt="" />
            </div>
            <div class="advantage__img-w">
              <img class="advantage__img" src="@/assets/icons/cardAdvantage5.svg" alt="" />
            </div>
            <div class="advantage__img-w">
              <img class="advantage__img" src="@/assets/icons/cardAdvantage6.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="read-more">
        <a class="read-more__link" href="#description">
          <p class="read-more__text">Подробнее о товаре</p>
          <svg class="read-more__img" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V16M12 16L15.5 12.5M12 16L8.5 12.5" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </div>
    <div class="info">
      <div class="info__block" v-if="isSale">
        <div class="sale">
          <div class="sale__info-w">
            <div class="sale__logo">Акция!</div>
            <div class="sale__info">
              <p class="sale__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <p class="sale__term">С 26 октября по 9 ноября 2021</p>
            </div>
          </div>
          <button class="sale__details">Узнать детали</button>
        </div>
      </div>
      <div class="info__block" ref="blockPrice">
        <div class="price">
          <div class="price__money" @click="isSale = !isSale">
            <div class="price__money-sale" v-if="isSale">
              <p class="price__money-sale-old">3500 грн</p>
              <p class="price__money-sale-new">3113 грн</p>
            </div>
            <div class="price__money-regular" v-else>3113 грн</div>
            <div class="price__money-btn-w">
              <button class="buy">Купить</button>
              <button class="buy__credit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M15.5 16C15.7761 16 16 15.7761 16 15.5C16 15.2239 15.7761 15 15.5 15C15.2239 15 15 15.2239 15 15.5C15 15.7761 15.2239 16 15.5 16Z"
                    fill="#F36C21" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9Z"
                    fill="#F36C21" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 8L8 16" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                Купить в кредит
              </button>
            </div>
          </div>
          <div class="price__info">
            <!-- <div class="price__info-facilities">
              <div class="price__info-facilities-availability">В наличии</div>
              <div class="price__info-facilities-item">
                <img
                  class="price__info-facilities-item-img"
                  src="@/assets/icons/cardPriceDelivery.svg"
                  alt=""
                />
                <p class="price__info-facilities-item-text">
                  бесплатная доставка
                </p>
              </div>
              <div class="price__info-facilities-item">
                <img
                  class="price__info-facilities-item-img"
                  src="@/assets/icons/cardPriceCredit.svg"
                  alt=""
                />
                <p class="price__info-facilities-item-text">оплата частями</p>
              </div>
              <div class="price__info-facilities-item">
                <img
                  class="price__info-facilities-item-img"
                  src="@/assets/icons/cardPriceReturn.svg"
                  alt=""
                />
                <p class="price__info-facilities-item-text">
                  14 дней обмен/возврат
                </p>
              </div>
            </div> -->
            <div class="price__info-facilities-availability">В наличии</div>
            <div class="price__info-tools">Компонент у Андрея</div>
          </div>
        </div>
      </div>
      <div class="info__block">
        <div class="delivery">
          <h2 class="info__block-title">Доставка</h2>
          <div class="delivery__nav">
            <div class="delivery__nav-line"></div>
            <ul class="delivery__nav-list">
              <li class="delivery__nav-item">
                <p class="delivery__nav-title" @click="currLabel = DeliveryLabel.ODESA"
                  :class="{active: currLabel === DeliveryLabel.ODESA}">
                  Одесса
                </p>
              </li>
              <li class="delivery__nav-item">
                <p class="delivery__nav-title" @click="currLabel = DeliveryLabel.UKRAINE"
                  :class="{active: currLabel === DeliveryLabel.UKRAINE}">
                  Украина
                </p>
              </li>
            </ul>
          </div>
          <transition name="fade" mode="out-in" appear>
            <div class="delivery__terms-odesa" v-if="currLabel === DeliveryLabel.ODESA">
              <p class="delivery__terms">
                <span class="delivery__terms-post">Самовывоз</span>
                отправим завтра
                <span class="delivery__terms-cost">Бесплатно</span>
              </p>
              <p class="delivery__terms">
                <span class="delivery__terms-post">Курьер</span>
                завтра с 10:00 до 17:00
                <span class="delivery__terms-cost">Бесплатно</span>
              </p>
              <p class="delivery__terms">
                <span class="delivery__terms-post">Отделение “Новая Почта”</span>
                отправим завтра
                <span class="delivery__terms-cost">от 56 грн</span>
              </p>
            </div>
            <div class="delivery__terms-ukraine" v-else-if="currLabel === DeliveryLabel.UKRAINE">
              <p class="delivery__terms">
                <span class="delivery__terms-post">Отделение “Новая Почта”</span>
                отправим завтра
                <span class="delivery__terms-cost">от 56 грн</span>
              </p>
              <p class="delivery__terms">
                <span class="delivery__terms-post">Отделение “УкрПочта”</span>
                отправим завтра
                <span class="delivery__terms-cost">от 56 грн</span>
              </p>
            </div>
          </transition>
        </div>
      </div>
      <div class="info__block">
        <div class="payments">
          <h2 class="info__block-title">Способы оплаты</h2>
          <div class="payments__w">
            <div class="payments__item">
              <img class="payments__item-img" src="@/assets/icons/cardGooglePay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="@/assets/icons/cardApplePay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="@/assets/icons/card24Pay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="@/assets/icons/cardVisaPay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="@/assets/icons/cardMastercardPay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="@/assets/icons/cardInstallmentPay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="@/assets/icons/cardInInstallmentPay.svg" alt="" />
            </div>
            <div class="payments__item">
              <p class="payments__item-text">Наличный</p>
            </div>
            <div class="payments__item">
              <p class="payments__item-text">Безналичный расчет</p>
            </div>
          </div>
        </div>
      </div>
      <div class="info__block">
        <div class="guarantee">
          <h2 class="info__block-title">Гарантия</h2>
          <div class="guarantee__info">
            <img class="guarantee__info-img" src="@/assets/icons/cardGuarantee.svg" alt="" />
            <div class="guarantee__info-text-w">
              <p class="guarantee__info-text">
                <b>100%</b> гарантия качества от производителя.
              </p>
              <p class="guarantee__info-text">
                Возврат/обмен осуществляется в течении 14 дней
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

enum DeliveryLabel {
  ODESA = 1,
  UKRAINE
}

@Component({
  name: "CardAboutProductComponent",
})
export default class CardAboutProductComponent extends Vue {
  isSale: boolean = false;

  DeliveryLabel = DeliveryLabel;
  currLabel: DeliveryLabel = DeliveryLabel.ODESA;

  declare $refs: {
    blockPrice: HTMLElement;
  };
}
</script>

<style lang="scss" scoped>
.buy {
  max-width: 274px;
  width: 100%;

  @include flex-container(row, center, center);
  padding: 8px 0;

  @include fontUnify(18, 24);
  text-align: center;

  color: white;
  background: #f36c21;
  border-radius: 6px;

  @include mobile {
    max-width: none;
  }

  &__credit {
    max-width: 274px;
    width: 100%;

    @include flex-container(row, center, center);
    gap: 16px;
    padding: 8px 0;

    @include fontUnify(18, 24);
    text-align: center;

    color: $color-main;

    border: 1px solid $color-main;
    border-radius: 6px;

    transition: 0.2s ease;

    &:hover {
      background-color: $color-main-lightest;
      border: 1px solid $color-main-dark;
      color: $color-main-dark;
    }

    @include mobile {
      max-width: none;
    }
  }
}

.product-about {
  display: none;

  --local-pad: 16px;
  --mobile-width: #{$mobile-big-width};
  --header-height: #{$height-header};

  width: 100%;
  gap: 16px;

  &.active {
    @include flex-container;

    @include bigMobile {
      flex-direction: column;
    }
  }
}

.gallery {
  max-width: 590px;
  width: 100%;

  @extend %flex-column;
  gap: 16px;

  @include bigMobile {
    max-width: none;
  }

  &__w {
    width: 100%;
    height: 522px;

    background: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
}

.advantage {
  @extend %flex-column;
  gap: 16px;

  &__w {
    width: 100%;

    @include flex-container(row, space-between, center);
    flex-wrap: wrap;
    gap: 24px 40px;

    @include bigMobile {
      justify-content: center;
    }
  }

  &__img-w {}

  &__img {}
}

.read-more {
  border: 1px solid $color-main;
  border-radius: 8px;

  padding: var(--local-pad);

  &__link {
    @include flex-container(row, space-between, center);
    gap: 24px;

    transition: 1s ease;

    &:hover .read-more__text {
      text-decoration: underline;
      color: $color-main-dark;
    }

    &:hover .read-more__img path {
      stroke: $color-main-dark;
    }
  }

  &__text {
    @include fontUnify(16, 24, 700);
    color: $color-main;

    transition: 0.2s ease;
  }

  &__img {
    path {
      transition: 0.2s ease;
    }
  }
}

.info {
  width: 100%;

  @extend %flex-column;
  gap: 16px;

  &__block {
    background: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    padding: var(--local-pad);
  }

  &__block-title {
    @include fontUnify(18, 20, 700);

    @include mobile {
      @include fontUnify(18, 20, 500);
    }
  }
}

.sale {
  @include flex-container(row, space-between, center);
  gap: 16px;

  @include bigMobile {
    flex-direction: column;
    align-items: flex-start;

    gap: 8px;
  }

  &__info-w {
    @include flex-container(row, center, center);
    gap: 16px;
  }

  &__logo {
    max-width: 85px;
    width: 100%;
    height: 85px;

    @include flex-container(row, center, center);

    @include fontUnify(18, 24, 700);
    text-align: center;
    color: white;

    background-color: $color-red-dark;
    border-radius: 50%;

    @include bigMobile {
      display: none;
    }
  }

  &__info {
    max-width: 488px;
    width: 100%;

    @extend %flex-column;
    gap: 8px;

    @include bigMobile {
      max-width: none;

      gap: 0;
    }
  }

  &__title {
    @include fontUnify(20, 24, 700);
    color: red;

    @include bigMobile {
      @include fontUnify(14, 16, 500);
    }
  }

  &__term {
    @include fontUnify(20, 24);

    @include bigMobile {
      @include fontUnify(14, 16);
    }
  }

  &__details {
    max-width: 195px;
    width: 100%;

    align-self: center;

    @include fontUnify(20, 24);
    text-align: center;
    color: $color-main;

    background: rgba(243, 108, 33, 0.1);
    border-radius: 6px;

    padding: 8px 0;

    transition: 0.2s ease;

    &:hover {
      color: $color-main-dark;
      background: rgba(243, 108, 33, 0.5);
    }

    @include bigMobile {
      max-width: 380px;
    }

    @include mobile {
      max-width: none;
    }
  }
}

.price {
  height: 100%;

  @include flex-container(row, space-between, stretch);
  gap: 16px;

  @include bigMobile {
    flex-direction: column;
  }

  &__money {
    width: 100%;

    @extend %flex-column;
    gap: 16px;
  }

  &__money-sale {
    @include flex-container(row-reverse, flex-end, center);
    gap: 16px;
  }

  &__money-sale-old {
    @include fontUnify(18, 24);
    text-decoration: line-through;

    @include bigMobile {
      @include fontUnify;
    }
  }

  &__money-sale-new {
    @include fontUnify(48, 52, 500);
    color: red;

    @include bigMobile {
      @include fontUnify(24, 28, 500);
    }
  }

  &__money-regular {
    @include fontUnify(48, 52, 500);

    @include bigMobile {
      @include fontUnify(24, 28, 500);
    }
  }

  &__money-btn-w {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 16px 32px;
  }

  &__info {
    height: 100%;

    @extend %flex-column;
    justify-content: space-between;

    @include bigMobile {
      width: 100%;

      flex-direction: row-reverse;
    }
  }

  &__info-facilities-availability {
    @include flex-container(row, center, center);

    @include fontUnify(14, 20);
    color: $color-green-dark;
    white-space: nowrap;

    background: rgba(21, 152, 34, 0.1);
    border-radius: 4px;

    padding: 3px 10px;
  }

  &__info-facilities-item {
    @include flex-container(row, flex-start, center);
    gap: 8px;
  }

  &__info-facilities-item-img {
    @include mobile {
      width: 24px;
    }
  }

  &__info-facilities-item-text {
    max-width: 100px;
    width: 100%;

    @include fontUnify(12, 12);
    text-transform: uppercase;

    color: $color-main;

    @include mobile {
      @include fontUnify(8, 10);
    }
  }

  &__info-tools {}
}

.delivery {
  @include flex-container(column, space-between, flex-start);
  gap: 24px;

  &__nav {
    width: 100%;

    @extend %flex-column;

    position: relative;
  }

  &__nav-line {
    width: 100%;
    height: 3px;

    position: absolute;
    top: 0;
    left: 0;

    background-color: $color-bg-grey-lighter;

    z-index: 0;
  }

  &__nav-list {
    width: 100%;

    @include flex-container(row, flex-start, flex-start);
    gap: 24px;

    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 2px;
    }

    &::-webkit-scrollbar-track {
      background-color: $color-bg-grey;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $color-main;
    }
  }

  &__nav-item {}

  &__nav-title {
    position: relative;

    @include fontUnify;
    text-align: center;

    border-top: 3px solid transparent;

    white-space: nowrap;

    padding-top: 8px;

    cursor: pointer;
    transition: 0.2s ease;

    z-index: 2;

    &:hover {
      border-top: 3px solid $color-main;
      color: $color-main;
    }

    &.active {
      border-top: 3px solid $color-main;
      color: $color-main;
    }

    @include bigMobile {
      @include fontUnify;
    }
  }

  &__terms-odesa {
    @extend %flex-column;
    gap: 8px;
  }

  &__terms {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 8px;

    @include fontUnify;
    letter-spacing: 0.02em;
    color: $color-text-lighter;

    @include bigMobile {
      @include fontUnify(14, 16);
    }
  }

  &__terms-post {
    font-weight: 700;
    color: $color-text;

    @include bigMobile {
      font-weight: 500;
    }
  }

  &__terms-cost {
    color: $color-main;
  }

  &__terms-ukraine {
    @extend %flex-column;
    gap: 8px;
  }
}

.payments {
  @extend %flex-column;
  gap: 24px;

  @include mobile {
    gap: 16px;
  }

  &__w {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 16px;

    @include mobile {
      gap: 8px;
    }
  }

  &__item {
    height: 40px;

    @include flex-container(row, center, center);

    border: 1px solid $color-main;
    border-radius: 6px;

    padding: 0 12px;
  }

  &__item-img {}

  &__item-text {
    @include fontUnify;
    text-align: center;

    white-space: nowrap;
  }
}

.guarantee {
  @extend %flex-column;
  gap: 24px;

  @include mobile {
    gap: 16px;
  }

  &__info {
    @include flex-container(row, flex-start, center);
    gap: 16px;
  }

  &__info-img {}

  &__info-text {
    @include fontUnify;

    @include mobile {
      @include fontUnify(14, 16);
    }
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.2s ease;
}
</style>
