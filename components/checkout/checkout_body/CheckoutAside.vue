<template>
  <aside class="aside">
    <div class="aside__w">
      <h2 class="aside__title">Итого:</h2>
      <div class="aside__sum" v-if="!discountActive">
        <span class="aside__sum-caption">Сумма заказа:</span>
        <span class="aside__sum-value">20 954 &#8372;</span>
      </div>
      <div class="aside__sum-discount" v-if="discountActive">
        <div class="aside__sum">
          <span class="aside__sum-caption">Сумма заказа:</span>
          <span class="aside__sum-without-discount">21 954 &#8372;</span>
        </div>
        <div class="aside__sum">
          <span class="aside__sum-caption">Сумма скидки:</span>
          <span class="aside__sum-discount-value">254 &#8372;</span>
        </div>
        <div class="aside__sum">
          <span class="aside__sum-caption">Итого:</span>
          <span class="aside__sum-value">20 954 &#8372;</span>
        </div>
      </div>
      <button
        class="promo__add-btn"
        v-if="!promoActive && !discountActive"
        @click="promoActive = true"
      >
        Добавить промокод
      </button>
      <div class="promo" v-if="promoActive && !discountActive">
        <div class="promo__heading">
          <p class="promo__title">Введите Ваш промокод</p>
          <SvgIcon
            class="promo__cancel"
            :icon="icons['cross']"
            @click.native="promoActive = false"
          />
        </div>
        <form class="promo__add-form">
          <input class="promo__add-input" type="text" placeholder="Промокод" />
          <button class="promo__submit" @click="discountActive = true">
            Применить
          </button>
        </form>
      </div>
      <div class="promo__discount" v-if="discountActive">
        <p class="promo__discount-code">Промокод: 3WE7-ERIG3</p>
        <div class="promo__discount-value"><span>5</span> &#37;</div>
      </div>
      <button class="submit">Подтверждаю заказ</button>
      <div class="aside__info">
        <div class="aside__info-img-w">
          <img
            class="aside__info-img"
            src="@/assets/img/checkout-callback-manager.png"
            alt=""
          />
        </div>
        <p class="aside__caption">
          После оформления заказа с Вами обязательно свяжется менеджер для
          согласования всех деталей.
        </p>
      </div>
      <CheckBox>
        <span class="aside__caption">Не перезванивать для оформления заказа</span>
      </CheckBox>
    </div>
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import CheckBox from "@/components/common/buttons/CheckBox.vue";

@Options({
  name: "CheckoutAsideComponent",
  components: {
    SvgIcon,
    CheckBox,
  },
})
export default class CheckoutAsideComponent extends Vue {
  promoActive: boolean = false;
  discountActive: boolean = false;
}
</script>

<style lang="scss" scoped>
.aside {
  &__w {
    position: sticky;
    top: 16px;

    max-width: 589px;
    width: 100%;

    @include flex-container(column, center, flex-start);
    gap: 24px;

    background: white;
    border-radius: 8px;

    padding: 16px;

    @include bigMobile {
      position: static;

      gap: 16px;

      max-width: none;
    }
  }

  &__title {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(16, 22, 600);
      text-transform: none;
    }
  }

  &__sum {
    width: 100%;

    @include flex-container;
    gap: 16px;
  }

  &__sum-caption {
    @include fontUnify(20, 28, 500);

    @include mobile {
      @include fontUnify;
    }
  }

  &__sum-value {
    @include fontUnify(18, 24, 700);
    color: $color-main;

    @include mobile {
      @include fontUnify(16, 22, 700);
    }
  }

  &__sum-discount {
    width: 100%;

    @include flex-container(column, center, flex-start);
    gap: 16px;

    @include fontUnify(18, 24, 700);

    @include mobile {
      @include fontUnify(16, 22, 700);
    }
  }

  &__sum-without-discount {
    color: $color-text-dark;
  }

  &__sum-discount-value {
    color: $color-green;
  }

  &__info {
    @include flex-container;
    gap: 24px;
  }

  &__info-img-w {
    @include fixedHW(40px, 49px);

    @include mobile {
      display: none;
    }
  }

  &__info-img {
  }

  &__caption {
    @include fontUnify;

    @include mobile {
      @include fontUnify(12, 16);
    }
  }
}
.promo {
  width: 100%;

  @include flex-container(column, center);
  gap: 8px;

  @include mobile {
    gap: 16px;
  }

  &__add-btn {
    width: 100%;

    @include flex-container(row, center, center);

    @include fontUnify(18, 24);
    color: $color-main;

    border: 1px solid $color-main;
    border-radius: 6px;

    padding-block: 12px;

    transition: 0.2s ease;

    &:hover {
      color: white;
      background-color: $color-main;
    }
  }

  &__heading {
    @include flex-container(row, space-between, center);
    gap: 16px;
  }

  &__title {
    @include fontUnify;
  }

  &__cancel {
    @include fixedHW(18px, 18px);

    cursor: pointer;

    &:hover {
      color: red;
    }
  }

  &__add-form {
    @include flex-container(row, space-between, center);
    gap: 8px;

    @include mobile {
      flex-direction: column;
      gap: 16px;
    }
  }

  &__add-input {
    max-width: 393px;
    width: 100%;

    @include fontUnify;

    border: 1px solid $color-border-grey;
    border-radius: 8px;

    padding: 12px;

    @include bigMobile {
      max-width: none;
    }

    &:hover {
      border-color: $color-bg-black;
    }

    &:focus {
      border-color: $color-bg-black;
    }

    &::placeholder {
      @include fontUnify;
      color: $color-border-grey;
    }
  }

  &__submit {
    max-width: 156px;
    width: 100%;

    @include flex-container(row, center, center);

    @include fontUnify(18, 24);
    color: white;

    border-radius: 6px;
    background-color: $color-main;

    padding-block: 12px;

    transition: 0.2s ease;

    @include bigMobile {
      max-width: 356px;
    }

    @include mobile {
      max-width: none;
    }

    &:hover {
      background-color: $color-main-dark;
    }
  }

  &__discount {
    width: 100%;

    @include flex-container(row, space-between, center);
    gap: 16px;
  }

  &__discount-code {
    @include fontUnify;
  }

  &__discount-value {
    @include fixedHW(42px, 42px);

    @include flex-container(row, center, center);
    gap: 4px;

    @include fontUnify;
    color: $color-green;

    border: 1px solid $color-green;
    border-radius: 50%;
  }
}

.submit {
  width: 100%;

  @include flex-container(row, center, center);

  @include fontUnify(18, 24);
  color: white;

  border-radius: 6px;
  background-color: $color-main;

  padding-block: 12px;

  transition: 0.2s ease;

  &:hover {
    background-color: $color-main-dark;
  }
}
</style>
