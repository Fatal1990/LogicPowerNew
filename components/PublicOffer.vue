<template>
  <section class="public-offer">
    <div class="public-offer__w">
      <h1 class="public-offer__title">{{_T('@Public offer agreement')}}</h1>
      <div class="public-offer__title-w">
        <h2 class="public-offer__title">{{_T('@Public agreement (offer)')}}</h2>
        <p>{{_T('@Order, purchase, sale and delivery of goods')}}</p>
      </div>
      <p class="public-offer__title-article">
        {{_T('@This agreement is between')}} <span>{{_T('@FLP public offer agreement')}}</span>
         {{_T('@Hereinafter - Seller and user of website services')}} LogicPower.ua 
         {{_T('@Hereinafter Customer and determin basic condition for order')}} LogicPower.ua. 
         {{_T('@Customer acting for purpose')}}
      </p>
      <ol class="public-offer__info-list">
        <li class="public-offer__list-item">
          <h2 class="public-offer__list-title">{{_T('@Definition of terms')}}</h2>
          <p class="public-offer__list-item-article">
            {{_T('@Definition of terms n1')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Definition of terms p2')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Definition of terms p3')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Definition of terms p4')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Definition of terms p5')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Definition of terms p6')}} LogicPower.ua.
          </p>
        </li>
        <li class="public-offer__list-item">
          <h2 class="public-offer__list-title">{{_T('@General provisions')}}</h2>
          <p class="public-offer__list-item-article">
            {{_T('@General provisions p1-1')}} LogicPower.ua 
            {{_T('@General provisions p1-2')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@General provisions p2')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@General provisions p3')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@General provisions p4')}}
          </p>
          <ul class="public-offer__sublist">
            <li class="public-offer__sublist-article">
              {{_T('@General provisions p4.1.')}}
            </li>
            <li class="public-offer__sublist-article">
              {{_T('@General provisions p4.2-1')}}
              <a class="public-offer__link" href="#"
                >{{_T('@General provisions p4.2 link')}}.</a
                >
              {{_T('@General provisions p4.2-2')}}
            </li>
          </ul>
        </li>
        <li class="public-offer__list-item">
          <h2 class="public-offer__list-title">{{_T('@Product price')}}</h2>
          <p class="public-offer__list-item-article">
            {{_T('@Product price p1')}} LogicPower.ua.
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Product price p2')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Product price p3')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Product price p4')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Product price p5')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Product price p6')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Product price p7')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Product price p8')}} LogicPower.ua
            <a class="public-offer__link">«{{_T('@Delivery and payment')}}»</a>
          </p>
        </li>
        <li class="public-offer__list-item">
          <h2 class="public-offer__list-title">{{_T('@Ordering')}}</h2>
          <p class="public-offer__list-item-article">
            {{_T('@Ordering p1-1')}} LogicPower.ua {{_T('@Ordering p1-2')}}
            LogicPower.ua
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Ordering p2-1')}} LogicPower.ua {{_T('@Ordering p2-2')}}
          </p>
          <ul class="public-offer__sublist">
            <li class="public-offer__sublist-article">
              {{_T('@Ordering p2.1')}}
            </li>
            <li class="public-offer__sublist-article">
              {{_T('@Ordering p2.2')}}
            </li>
            <li class="public-offer__sublist-article">
              {{_T('@Ordering p2.3')}}
            </li>
            <li class="public-offer__sublist-article">{{_T('@Ordering p2.4')}}</li>
          </ul>
          <p class="public-offer__list-item-article">
            {{_T('@Ordering p3')}} LogicPower.ua
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Ordering p4')}} LogicPower.ua
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Ordering p5')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Ordering p6-1')}} LogicPower.ua {{_T('@Ordering p6-2')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Ordering p7')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Ordering p8')}}
          </p>
        </li>
        <li class="public-offer__list-item">
          <h2 class="public-offer__list-title">
            {{_T('@Delivery and transfer to buyer')}}
          </h2>
          <p class="public-offer__list-item-article">
            {{_T(' @Delivery and transfer to buyer p1-1')}}
            <a class="public-offer__link" href="#">«{{_T('@Delivery and payment')}}».</a>
            {{_T(' @Delivery and transfer to buyer p1-2')}} LogicPower.ua 
            {{_T(' @Delivery and transfer to buyer p1-3')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Delivery and transfer to buyer p2')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T(' @Delivery and transfer to buyer p3-1')}}
            LogicPower.ua {{_T(' @Delivery and transfer to buyer p3-2')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Delivery and transfer to buyer p4')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Delivery and transfer to buyer p5')}}
          </p>
        </li>
        <li class="public-offer__list-item">
          <h2 class="public-offer__list-title">{{_T('@Product return')}}</h2>
          <p class="public-offer__list-item-article">
           {{_T('@Product return p1')}}
          </p>
          <p class="public-offer__list-item-article">
            {{_T('@Product return p2')}}
          </p>
        </li>
        <li class="public-offer__list-item">
          <h2 class="public-offer__list-title">{{_T('@Responsibility of parties')}}</h2>
          <p class="public-offer__list-item-article">
            {{_T('@Responsibility of parties p1-1')}} LogicPower.ua {{_T('@Responsibility of parties p1-2')}}</p>
          <p class="public-offer__list-item-article">
           {{_T('@Responsibility of parties p2')}}
          </p>
          <p class="public-offer__list-item-article">{{_T('@Responsibility of parties p3')}}</p>
          <p class="public-offer__list-item-article">{{_T('@Responsibility of parties p4')}}</p>
        </li>        
      </ol>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({})
export default class PublicOfferComponent extends Vue {}
</script>

<style lang="scss" scoped>
.public-offer {
  @extend %flex-column;
  align-items: center;

  @extend %padding-wrp;
  padding-bottom: 80px;

  &__w {
    @extend %width-content;
    @extend %flex-column;
    gap: 56px;
  }

  &__title {
    @include fontUnify(28, 34, 700);
    text-align: center;

    @include mobile {
      @include fontUnify(24, 28, 700);
    }
  }

  &__title-w {
    @include flex-container(column, center, center);
    gap: 16px;

    & p {
      @include fontUnify(20, 26, 500);
      text-align: center;
    }
  }

  &__title-article {
    @include fontUnify;
    letter-spacing: 0.02em;
  }

  &__info-list {
    @extend %flex-column;
    gap: 48px;

    counter-reset: section;
  }

  &__list-item {
    @extend %flex-column;
    gap: 16px;

    counter-reset: subsection;
    counter-increment: section;
  }

  &__list-title {
    @include fontUnify(26, 32, 700);
    letter-spacing: 0.02em;
    margin-bottom: 8px;

    @include mobile {
      @include fontUnify(22, 26, 700);
      margin-bottom: 0;
    }
  }

  &__list-item-article {
    @include fontUnify;
    letter-spacing: 0.02em;

    &::before {
      counter-increment: subsection;
      content: counter(section) "." counter(subsection) ".";
    }
  }

  &__sublist {
    @extend %flex-column;
    gap: 16px;

    padding-left: 8px;
    list-style: inside;
  }

  &__sublist-article {
    @include fontUnify;
    letter-spacing: 0.02em;
  }

  &__note {
    @include fontUnify;
    letter-spacing: 0.02em;

    border: 1px solid #393d38;
    border-radius: 8px;

    padding: 32px;

    @include mobile {
      padding: 8px;
    }
  }

  &__important {
    color: $color-main;
  }

  &__link {
    color: $color-main;

    &:hover {
      color: $color-main-dark;
    }
  }
}
</style>
