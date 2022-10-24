<template>
  <aside class="menu">
    <CanActive
        :id="canActiveService.names['header-menu']"
        :closeWith="[canActiveService.names['menu-catalog']]"
        v-slot="{isActive, close}"
    >
      <div class="menu__bg" :class="{active: isActive}" @click="close"></div>
      <section class="menu__content"
               :class="{active: isActive}"
      >
        <header class="menu__header">
          <a class="menu__logo-w" href="#">
          <SvgIcon class="menu__logo" :icon="icons['logo-short']"/>
          </a>
          <div class="lang">
            <button class="lang__item active">
              Укр
            </button>
            <button class="lang__item">
              Рус
            </button>
          </div>
          <button class="menu__close-btn" @click="close">
            <SvgIcon :icon="icons['cross']" parent-size/>
          </button>
        </header>
        <main class="menu__main">
          <div class="menu__link-list" data-catalog>
            <button class="menu__link" @click="canActiveService.show(canActiveService.names['menu-catalog'])">
              <SvgIcon class="menu__link-icon" :icon="icons['catalog']"/>
              <span>Каталог</span>
            </button>
          </div>
          <div class="menu__link-list" data-general>
            <a class="menu__link">
            <SvgIcon class="menu__link-icon" :icon="icons['phone-line']"/>
            <span>0 800 218 654</span>
            </a>
            <a class="menu__link">
            <SvgIcon class="menu__link-icon" :icon="icons['cart']"/>
            <span>Корзина</span>
            </a>
            <a class="menu__link">
            <SvgIcon class="menu__link-icon" :icon="icons['compare']"/>
            <span>Сравнение</span>
            </a>
          </div>
          <div class="menu__link-list" data-tech-support>
            <CanActive class="menu__toggle-block toggle" v-slot="{isActive, toggle}">
              <h4 class="toggle__title" @click="toggle">
                <SvgIcon class="toggle__title-icon"
                         :icon="icons['multi-bubble']"
                />
                <span>Сервис и поддержка</span>
                <SvgIcon class="toggle__title-arrow"
                         :icon="icons['arrow-right']"
                         :class="{active: isActive}"
                />
              </h4>
              <div class="toggle__list" :class="{active: isActive}">
                <a class="toggle__section-link" href="">
                Перейти в раздел
                <SvgIcon class="toggle__section-link-icon" :icon="icons['arrow-stick-right']"></SvgIcon>
                </a>
                <a class="toggle__link">
                Инструкции
                </a>
                <a class="toggle__link">
                Видео-материалы
                </a>
              </div>
            </CanActive>
            <a class="menu__link">
            <SvgIcon class="menu__link-icon" :icon="icons['tech-support']"/>
            <span class="menu__link-text">
              <span>
                Техподдержка:
              </span>
              <span>
                +38 (067) 654-07-90
              </span>
            </span>
            </a>
          </div>
          <div class="menu__link-list" data-info-forum-calc>
            <CanActive class="menu__toggle-block toggle" v-slot="{isActive, toggle}">
              <h4 class="toggle__title" @click="toggle">
                <SvgIcon class="toggle__title-icon"
                         :icon="icons['text']"
                />
                <span>Блог</span>
                <SvgIcon class="toggle__title-arrow"
                         :icon="icons['arrow-right']"
                         :class="{active: isActive}"
                />
              </h4>
              <div class="toggle__list" :class="{active: isActive}">
                <a class="toggle__section-link" href="">
                Перейти в раздел
                <SvgIcon class="toggle__section-link-icon" :icon="icons['arrow-stick-right']"></SvgIcon>
                </a>
                <a class="toggle__link">
                Статьи
                </a>
                <a class="toggle__link">
                Новости
                </a>
                <a class="toggle__link">
                Обзоры
                </a>
              </div>
            </CanActive>
            <CanActive class="menu__toggle-block toggle" v-slot="{isActive, toggle}">
              <h4 class="toggle__title" @click="toggle">
                <SvgIcon class="toggle__title-icon"
                         :icon="icons['shop']"
                />
                <span>О компании</span>
                <SvgIcon class="toggle__title-arrow"
                         :icon="icons['arrow-right']"
                         :class="{active: isActive}"
                />
              </h4>
              <div class="toggle__list" :class="{active: isActive}">
                <a class="toggle__section-link" href="">
                Перейти в раздел
                <SvgIcon class="toggle__section-link-icon" :icon="icons['arrow-stick-right']"></SvgIcon>
                </a>
                <a class="toggle__link">
                Оплата и Доставка
                </a>
                <a class="toggle__link">
                Контакты
                </a>
              </div>
            </CanActive>
            <a class="menu__link">
            <SvgIcon class="menu__link-icon" :icon="icons['chat-bubble']"/>
            <span>
              Форум
            </span>
            </a>
            <a class="menu__link">
            <SvgIcon class="menu__link-icon" :icon="icons['calculator']"/>
            <span>
              Калькулятор для расчета ёмкости АКБ для ИБП
            </span>
            </a>
          </div>
        </main>
        <footer class="menu__footer">
          <MenuSocials/>
        </footer>
        <MenuCatalog/>
      </section>
    </CanActive>
  </aside>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import MenuSocials from "@components/common/header/menu/MenuSocials.vue";
import CanActive from "@shared/components/ui/CanActive.vue";
import MenuCatalog from "@components/common/header/catalog/MenuCatalog.vue";

@Component({
  name: "MenuComponent",
  components: {MenuCatalog, CanActive, MenuSocials, SvgIcon},
})
export default class MenuComponent extends Vue {
}
</script>

<style lang="scss" scoped>

.lang {
  display: flex;
  align-items: center;
  gap: 16px;

  &__item {
    display: flex;
    align-items: center;

    padding: 4px 16px;
    gap: 8px;

    color: white;
    @include font(14, 20);

    border: 1px solid #e9e9e9;
    border-radius: 8px;

    &.active {
      border-color: $color-main;
    }
  }
}

%local-title {
  width: 100%;

  display: flex;
  align-items: center;
  gap: 32px;

  padding: 12px 0;

  color: $color-text;
  @include font(16, 18);

  cursor: pointer;
  @include animAll($anim-small-time);
}

%local-title-link {
  @extend %local-title;

  &:hover {
    color: $color-main;
  }
}

%local-title-icon {
  @include fixedHW(20px, 20px);
}

.menu {
  position: relative;
  z-index: 300;

  &__content {
    position: fixed;
    top: 0;
    left: -100vw;
    z-index: 2;

    height: 100vh;
    min-width: 350px;
    width: 100%;
    max-width: 380px;

    display: flex;
    flex-direction: column;

    overflow: auto;
    @include scrollbarStyle();
    overscroll-behavior: contain;

    transition: left $anim-time;

    &.active {
      left: 0;
    }

    background-color: white;
    box-shadow: 0 0 2px rgba(20, 20, 20, 0.1), 0 0 8px rgba(20, 20, 20, 0.08);
  }

  &__bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    backdrop-filter: blur(16px);
    z-index: 2;

    transition: opacity $anim-time, visibility $anim-time;

    opacity: 0;
    visibility: hidden;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    padding: 4px 16px;

    background-color: #2b2b2b;
  }

  &__logo-w {
    display: flex;
    @include fixedHW(48px, 48px);
  }

  &__logo {
    height: 100%;
    width: 100%;
    color: white;
  }

  &__close-btn {
    @include fixedHW(16px, 16px);
    color: white;
  }

  &__main {
    padding: 0 16px;
  }

  &__link-list {
    display: flex;
    flex-direction: column;

    padding: 12px 0;

    & + & {
      border-top: 1px solid #d1d1d1;
    }
  }

  &__link {
    @extend %local-title-link;
  }

  &__link-text {
    display: flex;
    flex-direction: column;
  }

  &__link-icon {
    @extend %local-title-icon;
  }

  &__toggle-block {
    display: flex;
    flex-direction: column;
  }

  &__footer {
    display: flex;
    flex-direction: column;

    margin-top: auto;
    padding: 32px 16px 16px;
  }
}

.toggle {
  display: flex;
  flex-direction: column;

  &__title {
    @extend %local-title;
  }

  &__title-icon {
    @extend %local-title-icon;
  }

  &__title-arrow {
    @include fixedHW(16px, 16px);
    margin-left: auto;
    color: $color-main;

    &.active {
      transform: rotate(90deg);
    }
  }

  &__list {
    display: none;
    position: relative;

    padding-left: 52px;

    &.active {
      display: block;
    }
  }

  &__section-link {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;

    padding: 8px 0;

    color: $color-main;
    @include animAll();
  }

  &__section-link:hover &__section-link-icon {
    margin-left: 4px;
  }

  &__section-link-icon {
    @include fixedHW(16px, 16px);
  }

  &__link {
    @extend %local-title-link;

    &:last-child {
      padding-bottom: 24px;
      margin-bottom: 12px;
      border-bottom: 1px solid #d1d1d1;
    }
  }
}
</style>
