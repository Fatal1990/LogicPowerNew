<template>
  <section class="comment">
    <h2 class="comment__title">Комментарий к заказу</h2>
    <textarea class="comment__textarea" placeholder="Ваш комментарий..." />
    <label class="comment__agree">
      <input type="checkbox" />
      <div class="comment__caption">
        <span
          >Подтверждая заказ, я соглашаюсь с
          <a class="comment__caption-link" href="#">условиями доставки</a> и
          <a class="comment__caption-link" href="#"
            >политикой конфиденциальности
          </a>
        </span>
      </div>
    </label>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";

@Options({
  name: "CheckoutCommentComponent",
})
export default class CheckoutCommentComponent extends Vue {}
</script>

<style lang="scss" scoped>
.comment {
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

  &__textarea {
    width: 100%;
    min-height: 140px;

    @include fontUnify;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    padding: 16px;

    @include mobile {
      min-height: 100px;
    }

    &::placeholder {
      @include fontUnify;
      color: #d1d1d1;
    }
  }

  &__agree {
    position: relative;

    & input {
      height: 0px;
      width: 0px;

      position: absolute;
      left: 0;
      top: 50%;
      z-index: -1;

      opacity: 0;
      visibility: hidden;
    }

    & div {
      @include flex-container(row, space-between, center);
      gap: 24px;

      user-select: none;
    }

    & div::before {
      content: "";
      display: inline-block;

      @include fixedHW(24px, 24px);

      border: 1px solid $color-border-grey-light;
      border-radius: 4px;

      background-repeat: no-repeat;
      background-position: center;

      transition: 0.2s ease;
    }

    & input:not(:checked) + div:hover::before {
      border-color: $color-main;
    }

    & input:checked + div::before {
      border-color: $color-main;
      background-color: $color-main;
      background-image: url("@/assets/icons/check-icon.svg");
    }
  }

  &__caption {
    @include fontUnify(18, 24, 500);

    @include mobile {
      @include fontUnify(12, 16);
    }
  }

  &__caption-link {
    color: $color-main;
    white-space: nowrap;
    
    &:hover {
      color: $color-main-dark;
    }
  }
}
</style>
