<template>
  <div>
    <section class="banner">
      <div class="banner__img-w">
        <picture>
          <source
              srcset="../assets/img/instructionBannerMob.png"
              media="(max-width: 680px)"
          />
          <img
              class="banner__img"
              src="../assets/img/instructionBanner.png"
              alt=""
          />
        </picture>
      </div>
      <div class="banner__content">
        <div class="banner__content-column">
          <h1 class="banner__title">ИНСТРУКЦИИ</h1>
          <p class="banner__text">
          Данный раздел содержит инструкции по настройке оборудования,
          предоставленного нашей компанией.
          </p>
          <div class="banner__input-w">
            <input
                class="banner__input"
                type="text"
                placeholder="Введите код или модель товара"
            />
            <button class="banner__button">
              <img src="../assets/icons/lensIcon.svg" alt=""/>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="instruction">
      <div class="instruction__head">
        <div class="instruction__head-w">
          <span class="instruction__head-item">Код</span>
          <span class="instruction__head-item">Категория</span>
          <span class="instruction__head-item">Название</span>
          <span class="instruction__head-item">Модель</span>
          <span class="instruction__head-item">Подробнее</span>
        </div>
      </div>
      <div class="instruction__body">
        <div class="instruction__body-item">
          <div class="instruction__body-item-header">
            <span class="instruction__body-item-header-text">4135</span>
            <span class="instruction__body-item-header-text"
            >Аккумуляторы 4-6V (AGM)
            </span
            >
            <span class="instruction__body-item-header-text"
            >Аккумулятор AGM
            </span
            >
            <span class="instruction__body-item-header-text">LPM 4V - 4 Ah</span>
            <span
                class="instruction__body-item-header-text"
                @click="isActive = !isActive"
            >Развернуть
            </span
            >
          </div>
          <div
              class="instruction__body-item-list-w"
              :class="{ active: isActive }"
          >
            <div class="instruction__body-item-list-title-w">
              <span class="instruction__body-item-list-title">Название</span>
              <span class="instruction__body-item-list-title">Тип файла</span>
              <span class="instruction__body-item-list-title">Язык</span>
              <span class="instruction__body-item-list-title">Дата</span>
              <span class="instruction__body-item-list-title">Загрузка</span>
            </div>
            <div class="instruction__body-item-list-line"></div>
            <ul class="instruction__body-content">
              <li class="instruction__body-content-item">Паспорт аккумулятора</li>
              <li class="instruction__body-content-item">pdf</li>
              <li class="instruction__body-content-item">укр</li>
              <li class="instruction__body-content-item">07.12.2020</li>
              <li class="instruction__body-content-item">
                <a class="instruction__body-content-item-link" href="#">
                Скачать
                </a>
              </li>
            </ul>
            <ul class="instruction__body-content">
              <li class="instruction__body-content-item">
                Инструкция по эксплуатации
              </li>
              <li class="instruction__body-content-item">pdf</li>
              <li class="instruction__body-content-item">укр</li>
              <li class="instruction__body-content-item">07.12.2020</li>
              <li class="instruction__body-content-item">
                <a class="instruction__body-content-item-link" href="#">
                Скачать
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <InstructionRow v-for="(instruction, index) in dataList" :key="index" :instruction='instruction'/> -->
      <div class="instruction__body">
        <div class="instruction__body-item">
          <div class="instruction__body-item-header">
            <span class="instruction__body-item-header-text">4135</span>
            <span class="instruction__body-item-header-text"
            >Аккумуляторы 4-6V (AGM)
            </span
            >
            <span class="instruction__body-item-header-text"
            >Аккумулятор AGM
            </span
            >
            <span class="instruction__body-item-header-text">LPM 4V - 4 Ah</span>
            <span
                class="instruction__body-item-header-text"
                v-if="!isActive"
                @click="isActive = !isActive"
            >Развернуть
            </span
            >
            <span
                class="instruction__body-item-header-text"
                v-if="isActive"
                @click="isActive = !isActive"
            >Свернуть
            </span
            >
          </div>
          <div
              class="instruction__body-item-list-w"
              :class="{ active: isActive }"
          >
            <div class="instruction__body-item-list-title-w">
              <span class="instruction__body-item-list-title">Название</span>
              <span class="instruction__body-item-list-title">Тип файла</span>
              <span class="instruction__body-item-list-title">Язык</span>
              <span class="instruction__body-item-list-title">Дата</span>
              <span class="instruction__body-item-list-title">Загрузка</span>
            </div>
            <div class="instruction__body-item-list-line"></div>
            <ul class="instruction__body-content">
              <li class="instruction__body-content-item">Паспорт аккумулятора</li>
              <li class="instruction__body-content-item">pdf</li>
              <li class="instruction__body-content-item">укр</li>
              <li class="instruction__body-content-item">07.12.2020</li>
              <li class="instruction__body-content-item">
                <a class="instruction__body-content-item-link" href="#"
                >Скачать</a
                >
              </li>
            </ul>
            <ul class="instruction__body-content">
              <li class="instruction__body-content-item">
                Инструкция по эксплуатации
              </li>
              <li class="instruction__body-content-item">pdf</li>
              <li class="instruction__body-content-item">укр</li>
              <li class="instruction__body-content-item">07.12.2020</li>
              <li class="instruction__body-content-item">
                <a class="instruction__body-content-item-link" href="#"
                >Скачать</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="instruction__body-mob">
        <ul class="instruction__body-head-list">
          <li class="instruction__body-head-item">
            Название:
            <span class="instruction__body-head-item-value">Аккумулятор AGM</span>
          </li>
          <li class="instruction__body-head-item">
            Модель:
            <span class="instruction__body-head-item-value">LPM 4V - 4 Ah</span>
          </li>
          <li class="instruction__body-head-item">
            Код:
            <span class="instruction__body-head-item-value">4135</span>
          </li>
          <li class="instruction__body-head-item">
            Категория:
            <span class="instruction__body-head-item-value"
            >Аккумуляторы 4-6V (AGM)
            </span
            >
          </li>
        </ul>
        <div class="instruction__body-content-mob">
          <div class="instruction__body-content-mob-line"></div>
          <div class="instruction__body-content-mob-item">
            <span class="instruction__body-content-mob-item-text"
            >Паспорт аккумулятора (pdf)
            </span
            >
            <a class="instruction__body-content-mob-item-link" href="#">
            <img src="../assets/icons/downloadInstrIconMob.svg" alt=""/>
            </a>
          </div>
          <div class="instruction__body-content-mob-item">
            <span class="instruction__body-content-mob-item-text"
            >Паспорт аккумулятора (pdf)
            </span
            >
            <a class="instruction__body-content-mob-item-link" href="#">
            <img src="../assets/icons/downloadInstrIconMob.svg" alt=""/>
            </a>
          </div>
        </div>
        <div class="instruction__body-roll-mob"></div>
      </div>
      <div class="instruction__body-mob">
        <ul class="instruction__body-head-list">
          <li class="instruction__body-head-item">
            Название:
            <span class="instruction__body-head-item-value">Аккумулятор AGM</span>
          </li>
          <li class="instruction__body-head-item">
            Модель:
            <span class="instruction__body-head-item-value">LPM 4V - 4 Ah</span>
          </li>
          <li class="instruction__body-head-item">
            Код:
            <span class="instruction__body-head-item-value">4135</span>
          </li>
          <li class="instruction__body-head-item">
            Категория:
            <span class="instruction__body-head-item-value"
            >Аккумуляторы 4-6V (AGM)
            </span
            >
          </li>
        </ul>
        <div class="instruction__body-content-mob">
          <div class="instruction__body-content-mob-line"></div>
          <div class="instruction__body-content-mob-item">
            <span class="instruction__body-content-mob-item-text"
            >Паспорт аккумулятора (pdf)
            </span
            >
            <a class="instruction__body-content-mob-item-link" href="#">
            <img src="../assets/icons/downloadInstrIconMob.svg" alt=""/>
            </a>
          </div>
          <div class="instruction__body-content-mob-item">
            <span class="instruction__body-content-mob-item-text"
            >Паспорт аккумулятора (pdf)
            </span
            >
            <a class="instruction__body-content-mob-item-link" href="#">
            <img src="../assets/icons/downloadInstrIconMob.svg" alt=""/>
            </a>
          </div>
        </div>
        <div class="instruction__body-roll-mob"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({
  name: "InstructionComponent",
})
export default class InstructionComponent extends Vue {
  isActive: boolean = false;
}
</script>

<style lang="scss" scoped>
.instruction {
  @extend %flex-column;
  align-items: center;
  gap: 32px;

  @include fontUnify(20, 28);
  letter-spacing: 0.02em;

  margin-bottom: 32px;

  @include mobile {
    gap: 24px;

    @include fontUnify;

    padding: 0 8px;
    margin-bottom: 24px;
  }

  &__head {
    width: 100%;

    display: flex;
    justify-content: center;

    background-color: $color-bg-grey-lighter;

    @include mobile {
      display: none;
    }
  }

  &__head-w {
    @extend %width-main;

    display: grid;
    grid-template-columns: 0.5fr repeat(4, 1fr);
    align-items: center;
    column-gap: 16px;

    padding: 32px 48px;
  }

  &__head-item {
    text-align: center;
  }

  &__body {
    @extend %width-main;

    @extend %padding-wrp;

    @include mobile {
      display: none;
    }
  }

  &__body-item {
    @extend %flex-column;
    align-items: center;
    gap: 8px;
  }

  &__body-item-header {
    width: 100%;

    display: grid;
    grid-template-columns: 0.5fr repeat(4, 1fr);
    align-items: center;
    column-gap: 16px;

    background-color: #ffffff;
    border-radius: 8px;

    padding: 16px 32px;
  }

  &__body-item-header-text {
    text-align: center;

    &:last-child {
      color: $color-main;
      cursor: pointer;

      &:hover {
        color: $color-main-dark;
      }
    }
  }

  &__body-item-list-w {
    width: 100%;

    @extend %flex-column;
    align-items: center;
    gap: 16px;

    background-color: #ffffff;
    border-radius: 8px;

    padding: 16px 32px;
    max-height: 0;
    overflow: hidden;
    visibility: hidden;

    @keyframes toggleDown {
      0% {
        max-height: 0;
      }

      100% {
        max-height: 100vh;
      }
    }

    animation-direction: reverse;

    & .active {
      max-height: none;
      visibility: visible;

      animation-name: toggleDown;
      animation-duration: 0.5s;
      animation-fill-mode: none;
      animation-direction: normal;
      animation-timing-function: ease;
    }
  }

  &__body-item-list-title-w {
    width: 100%;

    display: grid;
    grid-template-columns: 1.5fr repeat(4, 1fr);
    align-items: center;
    column-gap: 16px;

    color: #8a8a8a;
  }

  &__body-item-list-line {
    width: 100%;
    background-color: $color-bg-grey-lighter;
    height: 1px;
  }

  &__body-item-list-title {
    text-align: center;

    &:first-child {
      text-align: left;
    }
  }

  &__body-content {
    width: 100%;

    display: grid;
    grid-template-columns: 1.5fr repeat(4, 1fr);
    align-items: center;
    column-gap: 16px;
  }

  &__body-content-item {
    text-align: center;

    &:first-child {
      text-align: left;
    }
  }

  &__body-content-item-link {
    color: $color-main;

    &:hover {
      color: $color-main-dark;
    }
  }

  &__body-mob {
    display: none;

    @include mobile {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 16px;

      background-color: #ffffff;
      box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
      border-radius: 8px;

      padding: 16px 8px;
    }
  }

  &__body-head-list {
    @extend %flex-column;
    gap: 16px;
  }

  &__body-head-item {
    font-weight: 700;
  }

  &__body-head-item-value {
    font-weight: 400;
  }

  &__body-content-mob {
    @extend %flex-column;
    gap: 12px;

    overflow: hidden;
    max-height: 0;

    @include animAll(1s);

    &:active {
      max-height: 100000px;
    }
  }

  &__body-content-mob-line {
    width: 100%;
    height: 1px;
    background-color: $color-bg-grey-lighter;
  }

  &__body-content-mob-item {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  &__body-content-mob-item-text {
  }

  &__body-content-mob-item-link {
  }

  &__body-roll-mob {
    width: 12px;
    height: 12px;

    border-left: 1px solid #2b2b2b;
    border-bottom: 1px solid #2b2b2b;

    transform: rotate(135deg);

    align-self: center;

    @include animAll;

    &:active {
      transform: rotate(315deg);
    }
  }
}
</style>
