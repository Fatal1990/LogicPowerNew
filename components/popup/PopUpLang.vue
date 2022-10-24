<template>
  <section class="popup__block">
    <div class="popup__cont">
      <h3 class="popup__title">Залишити українську мову?</h3>
      <button class="popup__accept-btn">Так</button>
      <div class="popup__lang-w">
        <p class="popup__lang-title">Вибрати iншу мову:</p>
        <div class="popup__lang-select">
          <button class="popup__lang-select-btn">
            <svg
              class="popup__lang-select-btn-icon"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1654 7.88625V8.49958C15.1645 9.9372 14.699 11.336 13.8383 12.4875C12.9775 13.6389 11.7676 14.4812 10.3889 14.8889C9.01032 15.2965 7.53687 15.2475 6.18835 14.7493C4.83982 14.2511 3.68847 13.3303 2.906 12.1243C2.12354 10.9183 1.75189 9.49163 1.84648 8.05713C1.94107 6.62263 2.49684 5.25714 3.43088 4.1643C4.36493 3.07146 5.62722 2.30984 7.02949 1.99301C8.43176 1.67619 9.89888 1.82114 11.212 2.40625M15.1654 3.16625L8.4987 9.83958L6.4987 7.83958"
                stroke="#0E0F0F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="popup__lang-select-btn-text">українська</span>
          </button>
          <button class="popup__lang-select-btn">
            <svg
              class="popup__lang-select-btn-icon"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1654 7.88625V8.49958C15.1645 9.9372 14.699 11.336 13.8383 12.4875C12.9775 13.6389 11.7676 14.4812 10.3889 14.8889C9.01032 15.2965 7.53687 15.2475 6.18835 14.7493C4.83982 14.2511 3.68847 13.3303 2.906 12.1243C2.12354 10.9183 1.75189 9.49163 1.84648 8.05713C1.94107 6.62263 2.49684 5.25714 3.43088 4.1643C4.36493 3.07146 5.62722 2.30984 7.02949 1.99301C8.43176 1.67619 9.89888 1.82114 11.212 2.40625M15.1654 3.16625L8.4987 9.83958L6.4987 7.83958"
                stroke="#0E0F0F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="popup__lang-select-btn-text">русский</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class PopUpLangComponent extends Vue {}
</script>

<style lang="scss" scoped>
.popup {
  &__block {
    position: fixed;
    @include setAbs;

    @include flex-container(row, center, center);

    padding: 16px;

    visibility: hidden;
    opacity: 0;
    transition: 0.1s ease;
    z-index: -1;

    &::before {
      content: "";
      position: fixed;
      @include setAbs;

      backdrop-filter: blur(12px) opacity(1);
      background-color: rgba(0, 0, 0, 0.3);

      transition: 0.1s ease;
      z-index: -1;
    }

    &.active {
      visibility: visible;
      opacity: 1;
      transition: 0.1s ease;
      z-index: 9999;
    }
  }

  &__cont {
    position: relative;

    width: 100%;
    max-width: 610px;
    min-height: 400px;

    @extend %flex-column;
    align-items: center;
    justify-content: center;
    gap: 72px;

    border-radius: 16px;
    background-color: #ffffff;
    box-shadow: 0px 0px 1px rgba(20, 20, 20, 0.08),
      0px 1px 8px 2px rgba(20, 20, 20, 0.08);

    padding: 8px;
    transition: 0.2s ease-in-out;
  }

  &__title {
    @include fontUnify(20, 30, 600);
    text-align: center;
    text-transform: uppercase;

    margin-bottom: 16px;
  }

  &__accept-btn {
    width: 100%;
    max-width: 200px;

    @include flex-container(row, center, center);

    @include fontUnify(18, 24);
    letter-spacing: 0.02em;
    text-align: center;
    color: #ffffff;

    border-radius: 6px;
    background-color: $color-main;

    padding: 8px 0;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: $color-main-dark;
    }
  }

  &__lang-w {
    width: 100%;

    @extend %flex-column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  &__lang-title {
    @include fontUnify(18, 26, 500);
    text-align: center;
    color: $color-main;
  }

  &__lang-select {
    width: 100%;

    @include flex-container(row, center, center);
    gap: 8px;
  }

  &__lang-select-btn {
    width: 100%;
    max-width: 160px;

    @include flex-container(row, center, center);
    gap: 10px;

    border: 1px solid $color-border-grey-lighter;
    border-radius: 8px;

    padding: 8px 0;
    transition: 0.2s ease-in-out;

    &:hover {
      border: 1px solid $color-main-dark;
      color: $color-main-dark;
      transition: 0.2s ease-in-out;
    }

    &:hover path {
      stroke: $color-main-dark;
      transition: 0.2s ease-in-out;
    }
  }

  &__lang-select-btn-text {
    @include fontUnify(18, 26, 500);
    letter-spacing: 0.02em;
    text-align: center;
    text-transform: lowercase;
  }

  &__lang-select-btn-icon {
    & path {
      transition: 0.2s ease-in-out;
    }
  }
}
</style>
