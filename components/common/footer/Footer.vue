<template>
  <footer class="footer">
    <section class="footer__cont">
      <div class="content">
        <div class="content__logo-img-w">
          <img
            class="content__logo-img"
            src="@/assets/icons/footerMainLogo.svg"
            alt=""
          />
        </div>
        <FooterList :title="'Продукция'" :list="prodList">
          <a class="content__catalog-link" href="#">Перейти в католог</a>
        </FooterList>
        <FooterList :title="'Информация'" :list="infoList" />
        <div class="contacts__block">
          <div class="contacts__block-unit">
            <h4 class="content__title">Контакты</h4>
            <a class="contacts__text link" href="tel:0800208941"
              >0 800 208 941</a
            >
          </div>
          <div class="contacts__block-unit">
            <p class="contacts__text">Техподдержка:</p>
            <a class="contacts__text link" href="tel:+380676540790"
              >+38 (067) 654-07-90</a
            >
          </div>
          <div class="contacts__block-unit">
            <p class="content__caption">График работы CALL-центра</p>
            <p class="contacts__text">Пн - Пт 09:00 - 20:00</p>
            <p class="contacts__text">Сб - Вс 10:00 - 18:00</p>
          </div>
          <div class="contacts__block-unit">
            <a class="contacts__block-link" href="mailto:support@logicfox.ua">
              <svg
                class="contacts__block-link-img"
                width="29"
                height="18"
                viewBox="0 0 29 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9062 8.99865L29.0014 16.884V1.11328L17.9062 8.99865Z"
                  fill="white"
                />
                <path
                  d="M11.0951 8.99775L0 1.11133V16.8831L11.0951 8.99775Z"
                  fill="white"
                />
                <path
                  d="M16.3367 10.1133L14.8381 11.1783L14.5026 11.4174L13.9221 11.005L12.6583 10.1153L1.57031 17.9967H27.4359L16.3367 10.1133Z"
                  fill="white"
                />
                <path
                  d="M14.4985 9.19062L16.3286 7.88245L27.4237 -0.00390625H1.57031L14.4985 9.19062Z"
                  fill="white"
                />
              </svg>
              <span class="contacts__block-link-text">Задать вопрос</span>
            </a>
            <p class="content__caption">
              Задайте нам любой интересующий вас вопрос.
            </p>
          </div>
        </div>
        <div class="content__copyrights">
          <div class="content__logo-img-w">
            <img
              class="content__logo-img"
              src="@/assets/icons/footerMainLogo.svg"
              alt=""
            />
          </div>
          <div class="content__copyrights-unit">
            <p class="content__copyrights-caption">
              Многолетний опыт работы в предоставлении товаров технической
              направленности создал нашей компании имя, которое можно назвать
              «известным брендом»
            </p>
            <p class="content__caption">&#169; 2022, Все права защищены.</p>
          </div>
          <div class="content__copyrights-unit">
            <div class="content__copyrights-img-w">
              <img
                class="content__copyrights-img"
                src="@/assets/icons/footerMasterCardIcon.svg"
                alt=""
              />
            </div>
            <div class="content__copyrights-img-w">
              <img
                class="content__copyrights-img"
                src="@/assets/icons/footerVisaIcon.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="subscription__block">
        <div class="subscription__block-mailing">
          <div class="subscription__block-mailing-info">
            <h4 class="subscription__block-title">рассылка</h4>
            <p class="subscription__block-text">
              Подпишитесь на рассылку и получайте первыми полезные новости,
              акции, бонусы и скидки. Без спама!
            </p>
          </div>
          <form class="subscription__block-mailing-form">
            <input
              class="subscription__block-mailing-input"
              type="email"
              placeholder="E-mail"
            />
            <button class="subscription__block-mailing-btn">Подписаться</button>
          </form>
        </div>
        <div class="subscription__block-social">
          <div class="subscription__block-social-w">
            <h4 class="subscription__block-title">Присоединяйтесь</h4>
            <ul class="subscription__block-social-list">
              <li class="subscription__block-social-list-item">
                <a href="" class="subscription__block-social-list-item-link">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li class="subscription__block-social-list-item">
                <a href="" class="subscription__block-social-list-item-link">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 12L10.5 14V10L14 12Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 12.708V11.2929C2 8.39754 2 6.94988 2.90549 6.01841C3.81099 5.08694 5.23656 5.04662 8.08769 4.96598C9.43873 4.92777 10.8188 4.90039 12 4.90039C13.1812 4.90039 14.5613 4.92777 15.9123 4.96598C18.7634 5.04662 20.189 5.08694 21.0945 6.01841C22 6.94988 22 8.39754 22 11.2929V12.708C22 15.6033 22 17.0509 21.0945 17.9824C20.189 18.9139 18.7635 18.9542 15.9124 19.0349C14.5613 19.0731 13.1812 19.1005 12 19.1005C10.8188 19.1005 9.43867 19.0731 8.0876 19.0349C5.23651 18.9542 3.81097 18.9139 2.90548 17.9824C2 17.0509 2 15.6033 2 12.708Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
                </a>
              </li>
              <li class="subscription__block-social-list-item">
                <a href="" class="subscription__block-social-list-item-link">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                    <path
                      d="M17.5 6.51L17.51 6.49889"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li class="subscription__block-social-list-item">
                <a href="" class="subscription__block-social-list-item-link">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div class="content__copyrights-unit">
            <div class="content__copyrights-img-w">
              <img
                class="content__copyrights-img"
                src="@/assets/icons/footerMasterCardIcon.svg"
                alt=""
              />
            </div>
            <div class="content__copyrights-img-w">
              <img
                class="content__copyrights-img"
                src="@/assets/icons/footerVisaIcon.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
import FooterList from "./FooterList.vue";
import { Component, Vue } from "~/tools/version-types";

@Component({
  name: "FooterComponent",
  components: { FooterList },
})
export default class FooterComponent extends Vue {
  prodList: any[] = [
    { id: 1, title: "Комплекты для резервного питания" },
    { id: 2, title: "Источники бесперебойного питания" },
    { id: 3, title: "Аккумуляторы AGM" },
    { id: 4, title: "Литиевые аккумуляторы" },
    { id: 5, title: "Альтернативная энергетика" },
    { id: 6, title: "Стабилизаторы напряжения" },
    { id: 7, title: "Аккумуляторы SILVER" },
    { id: 8, title: "Электротранспорт" },
    { id: 9, title: "Автомобильные аккумуляторы" },
    { id: 10, title: "Компьютерная периферия" },
    { id: 11, title: "Компьютерная периферия" },
  ];

  infoList: any[] = [
    { id: 1, title: "О компании" },
    { id: 2, title: "Контакты" },
    { id: 3, title: "Блог" },
    { id: 4, title: "Оплата и Доставка" },
    { id: 5, title: "Гарантия и Сервисное обслуживание" },
    { id: 6, title: "Политика конфиденциальности" },
    { id: 7, title: "Договор публичной оферты" },
    { id: 8, title: "Сотрудничество" },
    { id: 9, title: "Инструкции" },
    { id: 10, title: "Форум" },
  ];

  calcMaxProdList() {
    this.prodList = this.prodList.slice(0, 8);
  }

  mounted() {
    this.calcMaxProdList();
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;

  @extend %flex-column;
  align-items: center;

  background-color: #393d38;

  @extend %padding-wrp;

  &__cont {
    @extend %width-main;

    @extend %flex-column;
    align-items: center;
    gap: 48px;

    padding: 64px 0 40px;

    @include mobile {
      gap: 32px;

      padding: 48px 0;
    }
  }
}
.content {
  width: 100%;

  @include flex-container;
  gap: 24px 16px;

  & > .content__logo-img-w {
    display: none;
    @include mobile {
      display: block;
      margin-bottom: 16px;
    }
  }

  @include bigMobile {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  @include mobile {
    flex-direction: column;
  }

  &__catalog-link {
    width: 100%;
    max-width: 200px;

    color: $color-main;

    transition: 0.2s ease;

    &:hover {
      color: $color-main-dark;
    }

    @include mobile {
      display: none;
    }
  }

  &__title {
    position: relative;
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    color: $color-main;
  }

  &__block-list-link {
    width: 100%;
    max-width: 200px;

    @include fontUnify;
    letter-spacing: 0.02em;
    color: white;

    transition: 0.2s ease-in-out;

    @include mobile {
      max-width: none;
    }

    &:hover {
      color: $color-main-dark;
    }
  }

  &__caption {
    @include fontUnify(12, 16);
    letter-spacing: 0.02em;
    color: $color-text-lighter;
  }

  &__copyrights {
    width: 100%;
    max-width: 200px;

    @extend %flex-column;
    align-items: center;
    gap: 16px;

    @include mobile {
      display: none;
    }
  }

  &__logo-img-w {
    @include mobile {
      display: none;
    }
  }

  &__logo-img {
  }

  &__copyrights-img-w {
  }

  &__copyrights-img {
  }

  &__copyrights-unit {
    @extend %flex-column;
    align-items: center;
    gap: 8px;

    & .content__caption {
      width: 100%;
      max-width: 120px;
      text-align: center;
    }

    & + & {
      @include flex-container;
      gap: 0;
    }
  }

  &__copyrights-caption {
    @include fontUnify(12, 16);
    letter-spacing: 0.02em;
    text-align: center;
    color: white;
  }
}
.contacts {
  &__block {
    width: 100%;
    max-width: 230px;

    @extend %flex-column;
    gap: 32px;

    @include mobile {
      max-width: none;
      gap: 24px;

      border-bottom: 1px solid $color-main;

      padding-bottom: 16px;
    }
  }

  &__block-unit {
    @extend %flex-column;
    gap: 16px;

    @include mobile {
      gap: 8px;
    }
  }

  &__text {
    max-width: fit-content;

    @include fontUnify(16, 20, 700);
    letter-spacing: 0.02em;
    color: white;

    transition: 0.2s ease-in-out;

    &.link:hover {
      color: $color-main-dark;
    }

    @include mobile {
      @include fontUnify(16, 20);
    }
  }

  &__block-link {
    @include flex-container(row, flex-start, center);
    gap: 12px;

    &:hover .contacts__block-link-text {
      color: $color-main-dark;
    }
    &:hover .contacts__block-link-img path {
      fill: $color-main-dark;
    }
  }

  &__block-link-img path {
    transition: 0.2s ease-in-out;
  }

  &__block-link-text {
    @include fontUnify(20, 24);
    text-transform: uppercase;
    color: white;

    transition: 0.2s ease-in-out;
  }
}

.subscription {
  &__block {
    width: 100%;

    @include flex-container(row, space-between, center);
    gap: 16px;

    border-radius: 16px;
    background-color: $color-bg-grey-darker;

    padding: 16px 32px;

    @include mobile {
      @include flex-container(column, center, flex-start);

      background: none;

      padding: 0;
    }
  }

  &__block-mailing {
    width: 100%;

    @include flex-container(row, flex-start, center);
    gap: 32px;

    @include bigMobile {
      flex-wrap: wrap;
      gap: 16px;
    }
  }

  &__block-mailing-info {
    width: 100%;
    max-width: 355px;

    @extend %flex-column;
    gap: 16px;

    @include mobile {
      max-width: none;
      gap: 8px;
    }

    & .subscription__block-title {
      @include mobile {
        color: $color-main;
      }
    }
  }

  &__block-title {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    color: white;
  }

  &__block-text {
    @include fontUnify(12, 16);
    letter-spacing: 0.02em;
    color: white;

    @include mobile {
      @include fontUnify(12, 16);
      color: $color-text-lighter;
    }
  }

  &__block-mailing-form {
    width: 100%;
    max-width: 484px;

    @include flex-container(row, center, center);
  }

  &__block-mailing-input {
    width: 100%;
    max-height: 40px;

    border-radius: 6px 0 0 6px;

    background-color: white;

    padding: 12px 8px;

    &::placeholder {
      @include fontUnify(12, 16);
      letter-spacing: 0.02em;
      color: $color-text-lighter;
    }
  }

  &__block-mailing-btn {
    position: relative;
    width: 100%;
    max-width: 183px;

    @include flex-container(row, center, center);

    @include fontUnify(18, 24);
    letter-spacing: 0.02em;
    color: white;

    border-radius: 6px;
    background-color: $color-main;

    margin-left: -8px;
    padding: 8px 0;

    transition: 0.2s ease-in-out;

    &:hover {
      background-color: $color-main-dark;
    }
  }

  &__block-social {
    @include mobile {
      width: 100%;
      @include flex-container(row, space-between, center);
      gap: 8px;
    }

    & .content__copyrights-unit {
      display: none;

      @include mobile {
        @include flex-container(column, center, center);
      }
    }
  }

  &__block-social-w {
    @extend %flex-column;
    align-items: center;
    gap: 16px;
  }

  &__block-social-list {
    @include flex-container(row, center, center);
    gap: 24px;
  }

  &__block-social-list-item {
  }

  &__block-social-list-item-link {
    font-size: 0;
    display: inline-block;

    & svg path {
      transition: 0.2s ease-in-out;
    }

    &:hover svg {
      transform: scale(1.1);
    }
  }
}
</style>
