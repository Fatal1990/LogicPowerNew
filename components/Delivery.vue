<template>
  <section class="delivery-payment">
    <div class="delivery-payment__w">
      <div class="delivery-payment__info">
        <h1 class="delivery-payment__title">
          {{ _T("@Terms of delivery and payment") }}
        </h1>
        <div class="delivery-payment__info-block info-block-b">
          <h4 class="delivery-payment__info-block-title">
            {{ _T("@Self-pickup points in Odessa") }}
          </h4>
          <ul class="delivery-payment__info-block-list">
            <li class="delivery-payment__info-block-list-item">
              {{ _T("@Prom.rynok Starokonnyy") }}
            </li>
            <li class="delivery-payment__info-block-list-item">
              {{ _T("@Nebesnoi Sotny avenue") }}
            </li>
            <li class="delivery-payment__info-block-list-item">
              {{ _T("@Industrial market 7 km") }}.
            </li>
            <p class="delivery__text">
              {{ _T("@Telephone for consultation") }} 0800 208-977.
            </p>
          </ul>
        </div>
      </div>
      <div class="delivery">
        <div class="delivery__info">
          <h2 class="delivery__title">{{ _T("@Delivery") }}</h2>
          <p class="delivery__text">
            {{ _T("@Delivery of goods Alternative energy") }}
          </p>
          <p class="delivery__text">
            {{ _T("@Delivery made on advance payment") }}
          </p>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">{{ _T("@Pickup Odessa") }}</h3>
          <p class="delivery__text">
            {{ _T("@Order received at any of stores") }}
          </p>
          <p class="delivery__text">
            {{ _T("@Schedule") }}: {{ _T("@According to store opening hours") }}
          </p>
          <p class="delivery__text">
            {{ _T("@Cost") }}:
            <span class="delivery__text-free">{{ _T("@For free") }}</span>
          </p>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">
            {{ _T("@Delivery in Odessa") }}
          </h3>
        </div>
        <div class="delivery__pickup info-block-b">
          <h3 class="delivery-payment__info-block-title">
            {{ _T("@Delivery Schedule") }}:
          </h3>
          <div class="delivery__text-w">
            <p class="delivery__text">
              {{ _T("@Mon-Fri") }}: {{ _T("@From 10:00 to 16:00") }}*
            </p>
            <p class="delivery__text">
              {{ _T("@Sat") }}: {{ _T("@From 13:00 to 19:00") }}
            </p>
            <p class="delivery__text">
              {{ _T("@Sun") }}: {{ _T("@No delivery") }}*
            </p>
          </div>
          <p class="delivery__text">
            *{{ _T("@Subject to stock availability") }}
          </p>
        </div>
        <div class="delivery__pickup info-block-b">
          <h3 class="delivery-payment__info-block-title">{{ _T("@Cost") }}:</h3>
          <ul class="delivery-payment__info-block-list">
            <li class="delivery-payment__info-block-list-item">
              {{ _T("@Free of charge with order of 3000 UAH") }}
            </li>
            <li class="delivery-payment__info-block-list-item">
              {{ _T("@For more information contact manager") }}
            </li>
          </ul>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">
            {{ _T("@Delivery to post office") }}
          </h3>
          <p class="delivery__text">
            {{ _T("@Pick up order at any of branches of carriers") }}.
          </p>
        </div>
        <div class="delivery__post">
          <div class="delivery__post-img-col">
            <img
              class="delivery__post-img"
              src="../assets/img/novaPoshta.png"
              alt=""
            />
            <img
              class="delivery__post-img"
              src="../assets/img/ukrPoshta.png"
              alt=""
            />
            <img
              class="delivery__post-img"
              src="../assets/img/justin.png"
              alt=""
            />
            <img
              class="delivery__post-img"
              src="../assets/img/delivery.png"
              alt=""
            />
          </div>
        </div>
        <div class="delivery__pickup">
          <p class="delivery__text">
            <span class="delivery__text-attention"
              >{{ _T("@Attention") }}!</span
            >
            {{ _T("@Upon receipt of order, check availability of all goods") }}
          </p>
          <p class="delivery__text">
            {{ _T("@Schedule") }}: {{ _T("@According to carrier schedule") }}.
          </p>
        </div>
        <div class="delivery__pickup info-block-b">
          <h3 class="delivery-payment__info-block-title">{{ _T("@Cost") }}:</h3>
          <ul class="delivery-payment__info-block-list">
            <li class="delivery-payment__info-block-list-item">
              «{{ _T("@Nova Poshta") }}» -
              {{ _T("@According to the carrier tariff") }},
              <span class="delivery__text-free">{{ _T("@For free") }}</span>
              {{ _T("@With an order amount of 1500 UAH") }}
            </li>
            <li class="delivery-payment__info-block-list-item">
              «{{ _T("@Ukrposhta") }}» -
              {{ _T("@According to the carrier tariff") }},
              <span class="delivery__text-free">{{ _T("@For free") }}</span>
              {{ _T("@With an order amount of 500 UAH") }}
            </li>
          </ul>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">
            {{ _T("@Address delivery by courier") }}
          </h3>
          <div class="delivery__pickup info-block-b">
            <ul class="delivery-payment__info-block-list">
              <li class="delivery-payment__info-block-list-item">
                {{ _T("@Delivery time:2-7 days") }}
              </li>
              <li class="delivery-payment__info-block-list-item">
                {{ _T("@Delivery cost") }}:
                {{ _T("@According to the carrier tariff") }}
              </li>
            </ul>
          </div>
        </div>
        <div class="delivery__pickup">
          <p class="delivery__text">
            {{ _T("@Unable to receive order at warehouse") }}
          </p>
          <p class="delivery__text">
            {{ _T("@Delivery ASAP") }}
          </p>
          <p class="delivery__text">
            {{ _T("@Payment upon receipt") }}
          </p>
          <h2 class="delivery__title">
            {{ _T("@How receive package from courier") }} ?
          </h2>
          <p class="delivery__text">
            {{ _T("@After package arrived at postal office") }}
          </p>
        </div>
      </div>
      <div class="payment">
        <h2 class="delivery__title">{{ _T("@Payment") }}</h2>
        <p class="delivery__text">
          {{ _T("@When ordering for less than 300 UAH") }}.
        </p>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">{{ _T("@In cash") }}</h3>
          <p class="delivery__text">{{ _T("@Pay for order in cash") }}.</p>
          <p class="delivery__text">
            {{ _T("@Commission") }}:
            <span class="delivery__text-free">{{ _T("@Not available") }}</span>
          </p>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">{{ _T("@Cash on delivery") }}</h3>
          <p class="delivery__text">
            «{{ _T("@C.O.D") }}» -
            {{ _T("@Carrier service to pay for goods") }}
            {{ _T("@Attention") }}!
            {{ _T("@If the order amount is less than 200 UAH") }} "{{
              _T("@C.O.D")
            }}". {{ _T("@Commission") }}:
            {{ _T("@According to tariff of postal operator") }}
          </p>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">
            {{ _T("@Online Visa/Mastercard") }}
          </h3>
          <p class="delivery__text">
            {{ _T("@Modern online payment methods") }}
          </p>
          <ul class="delivery-payment__info-block-list">
            <li class="delivery-payment__info-block-list-item">
              {{ _T("@When placing order on site") }}
            </li>
            <li class="delivery-payment__info-block-list-item">
              {{ _T("@Upon receipt of order in store") }}
            </li>
          </ul>
        </div>
        <div class="payment__icon-w">
          <img
            class="payment__icon"
            src="../assets/icons/visaIcon.png"
            alt=""
          />
          <img
            class="payment__icon"
            src="../assets/icons/mastercardIcon.png"
            alt=""
          />
          <img
            class="payment__icon"
            src="../assets/icons/applePayIcon.png"
            alt=""
          />
          <img
            class="payment__icon"
            src="../assets/icons/googlePayIcon.png"
            alt=""
          />
          <img class="payment__icon" src="../assets/icons/pbIcon.png" alt="" />
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">{{ _T("@Cashless payment") }}</h3>
          <ol class="payment__info-block-list">
            <li>
              {{ _T("@Cashless payment p1") }}
            </li>
            <li>
              {{ _T("@Cashless payment p2") }}
            </li>
            <li>
              {{ _T("@Cashless payment p3") }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({})
export default class DeliveryComponent extends Vue {}
</script>

<style lang="scss">
.delivery-payment {
  @extend %flex-column;
  align-items: center;

  @extend %padding-wrp;
  padding-bottom: 80px;

  &__w {
    @extend %flex-column;
    @extend %width-content;
    gap: 40px;
  }

  &__info {
    @extend %flex-column;
    align-items: center;
    gap: 56px;
  }

  &__title {
    @include fontUnify(28, 34, 700);
    text-align: center;

    @include mobile {
      @include fontUnify(24, 28, 700);
    }
  }

  &__info-block {
    @extend %flex-column;
    align-items: flex-start;
    gap: 16px;
  }

  &__info-block-title {
    @include fontUnify(22, 26, 600);

    @include mobile {
      @include fontUnify(16, 22, 500);
    }
  }

  &__info-block-list {
    @include fontUnify;
    letter-spacing: 0.02em;
    list-style: inside;
  }

  &__info-block-list-item {
  }
}

.info-block-b {
  @extend %width-content;
  padding: 32px;
  border: 1px solid #393d38;
  border-radius: 8px;
}

.delivery {
  @extend %flex-column;
  align-content: center;
  gap: 32px;

  &__text {
    @include fontUnify;
    letter-spacing: 0.02em;
  }

  &__text-attention {
    color: #e25750;
  }

  &__info {
    @extend %flex-column;
    align-items: flex-start;
    gap: 16px;
  }

  &__title {
    @include fontUnify(24, 28, 700);
    margin-bottom: 32px;

    @include mobile {
      @include fontUnify(22, 26);
      margin-bottom: 0;
    }
  }

  &__pickup {
    @extend %flex-column;
    align-items: flex-start;
    gap: 16px;
  }

  &__pickup-title {
    @include fontUnify(24, 28, 700);

    @include mobile {
      @include fontUnify(22, 26);
    }
  }

  &__text-free {
    color: #159822;
  }

  &__post {
    display: flex;
    justify-content: space-between;

    @include mobile {
      justify-content: center;
    }
  }

  &__post-img {
  }

  &__post-img-col {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 36px 108px;

    @include mobile {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__pickup-text {
  }
}

.payment {
  @extend %flex-column;
  align-content: center;
  gap: 32px;

  &__icon-w {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;

    @include mobile {
      justify-content: center;
      gap: 36px 80px;
    }
  }

  &__info-block-list {
    @include fontUnify;
    letter-spacing: 0.02em;
    list-style: decimal;
    padding-left: 24px;
  }
}
</style>
