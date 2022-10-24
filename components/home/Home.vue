<template>
  <section class="main-page">
    <BreadcrumbsAbsolute />
    <BreadcrumbsWhite />
    <MainSlider />
    <div class="main-page__slider-category-block">
      <SliderCategoryComponent></SliderCategoryComponent>
      <div class="main-page__about-company">
        <div class="main-page__about-company-title-w">
          <h5 class="main-page__about-company-title">О компании</h5>
          <p class="main-page__about-company-text">
            История развития компании - это история событий, история команды,
            история жизни конкретных людей. История нашей компании – это
            ежедневная работа на результат. Достижение большой цели через
            маленькие дистанции. Не в борьбе с конкурентами, а в здоровом
            соперничестве, где нет победителей или проигравших. За 15 лет никем
            не узнаваемый украинский бренд составил серьезную конкуренцию
            всемирно известным торговым маркам на рынке Украины. Мы сумели
            добиться высокого качества продукции по доступной цене.
          </p>
        </div>
      </div>
    </div>
    <AboutUsSliderComponent></AboutUsSliderComponent>
    <div class="main-page__team-block">
      <div class="main-page__team-w">
        <p class="main-page__team-text">
          Команда LogicPower поставила себе новую цель – занять лидирующие
          позиции в нише продаж для массового (розничного) потребителя. Для
          улучшения качества и снижения сроков доставки, на территории нашего
          склада оборудовано несколько отделений крупнейших почтовых операторов
          Украины. Мы активно работаем над расширением службы технической
          поддержки, сегодня у нас более 50 сервисных центров по всей территории
          Украины История развития предполагает выход на новые горизонты, и мы
          готовы работать на результат!
        </p>
      </div>
    </div>
    <div class="main-page__b2b-block">
      <div class="main-page__b2b-bgr">
        <img
          class="main-page__b2b-bgr-img"
          src="../../assets/img/mainB2bBckgrnd.png"
          alt=""
        />
      </div>
      <div class="main-page__b2b-block-container">
        <div class="main-page__b2b-logo">
          <p class="main-page__b2b-logo-title">B2B</p>
        </div>
        <div class="main-page__b2b-heading">
          <h3 class="main-page__b2b-heading-title">
            Удобный портал для заказов и документооборота
          </h3>
          <p class="main-page__b2b-heading-text">
            Через личный кабинет В2В портала можно:
          </p>
        </div>
        <div class="main-page__b2b-info">
          <div class="main-page__b2b-info-item">
            <p class="main-page__b2b-info-text">
              Browse to find the images that fit your needs and click to
              download. Use the on-the-fly color image generation to match your
              brand identity.
            </p>
          </div>
          <div class="main-page__b2b-info-item">
            <p class="main-page__b2b-info-text">
              Browse to find the images that fit your needs and click to
              download. Use the on-the-fly color image generation to match your
              brand identity.
            </p>
          </div>
          <div class="main-page__b2b-info-item">
            <p class="main-page__b2b-info-text">
              Browse to find the images that fit your needs and click to
              download. Use the on-the-fly color image generation to match your
              brand identity.
            </p>
          </div>
          <div class="main-page__b2b-info-item">
            <p class="main-page__b2b-info-text">
              Browse to find the images that fit your needs and click to
              download. Use the on-the-fly color image generation to match your
              brand identity.
            </p>
          </div>
        </div>
        <a class="main-page__b2b-link" href="https://b2b.logicpower.ua/">
          Перейти на B2B
        </a>
      </div>
    </div>
    <div class="main-page__coop-block">
      <div class="main-page__coop-title-w">
        <h2 class="main-page__coop-title">Мы сотрудничаем:</h2>
        <p class="main-page__coop--title-text">
          ТМ LOGICPOWER – 100% ГАРАНТИЯ КАЧЕСТВА ОТ ПРОИЗВОДИТЕЛЯ
        </p>
      </div>
      <CooperationSliderComponent />
    </div>
    <div class="main-page__news-block">
      <div class="main-page__news-title-w">
        <h2 class="main-page__news-title">
          Новости
          <span>&#38;</span>
          Статьи
        </h2>
        <p class="main-page__news-title-text">
          ВСЕ, ЧТО ВАМ НУЖНО ЗНАТЬ О ТЕХНОЛОГИЯХ ОТ LOGICPOWER
        </p>
      </div>
      <div class="main-page__news-card-w">
        <div class="main-page__news-card">
          <a class="main-page__news-link" href="#">
            <div class="main-page__news-card-img-cont">
              <img
                class="main-page__news-card-img"
                src="../../assets/img/mainNewsImg.png"
                alt=""
              />
            </div>
          </a>
          <div class="main-page__news-card-info">
            <h3 class="main-page__news-card-title">Новости</h3>
            <p class="main-page__news-card-text">
              Полезная информация о нашей компании, товарах, мероприятиях,
              акциях и скидках.
            </p>
            <a class="main-page__news-link" href="#">перейти</a>
          </div>
        </div>
        <div class="main-page__news-card">
          <a class="main-page__news-link" href="#">
            <div class="main-page__news-card-img-cont">
              <img
                class="main-page__news-card-img"
                src="../../assets/img/mainBlogImg.png"
                alt=""
              />
            </div>
          </a>
          <div class="main-page__news-card-info">
            <h3 class="main-page__news-card-title">Блог</h3>
            <p class="main-page__news-card-text">
              Обзоры, статьи, консультации специалистов по использованию
              электрооборудования
            </p>
            <a class="main-page__news-link" href="#">перейти</a>
          </div>
        </div>
        <div class="main-page__news-card">
          <a class="main-page__news-link" href="#">
            <div class="main-page__news-card-img-cont">
              <img
                class="main-page__news-card-img"
                src="../../assets/img/mainFaqImg.png"
                alt=""
              />
            </div>
          </a>
          <div class="main-page__news-card-info">
            <h3 class="main-page__news-card-title">FAQ</h3>
            <p class="main-page__news-card-text">
              Ответы на часто задаваемые вопросы, инструкции по эксплуатации
              техническая поддержка
            </p>
            <a class="main-page__news-link" href="#">перейти</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import SliderCategoryComponent from "./SliderCategory.vue";
import CooperationSliderComponent from "./CooperationSlider.vue";
import AboutUsSliderComponent from "./about_slider/AboutUsSlider.vue";
import Component from "nuxt-class-component";
import Vue from "vue";
import MainSlider from "@components/home/main_slider/MainSlider.vue";
import BreadcrumbsAbsolute from "@components/common/header/BreadcrumbsAbsolute.vue";
import BreadcrumbsWhite from "@components/common/header/BreadcrumbsWhite.vue";

@Component({
  components: {
    BreadcrumbsWhite,
    BreadcrumbsAbsolute,
    MainSlider,
    SliderCategoryComponent,
    CooperationSliderComponent,
    AboutUsSliderComponent,
  },
})
export default class HomeComponent extends Vue {
  mounted() {
    this.$route;
  }
}
</script>

<style lang="scss">
.main-page {
  //main-page__slider-category-block

  width: 100%;

  @extend %flex-column;
  justify-content: center;

  &__slider-category-block {
    @extend %flex-column;
    align-items: center;
    gap: 64px;

    padding: 24px 16px 64px;

    @include mobile {
      gap: 48px;
    }
  }

  &__about-company {
    @extend %width-main;

    border-radius: 16px;

    color: #ffffff;
    background-color: #393d38;

    @include mobile {
      border-radius: 8px;
    }
  }

  &__about-company-title-w {
    @include flex-container;

    @include bigMobile {
      flex-direction: column;
    }
  }

  &__about-company-title {
    max-width: 347px;
    width: 100%;
    min-height: 270px;

    @include flex-container(row, center, center);
  }

  &__about-company-title-w {
    @include flex-container;

    @include bigMobile {
      flex-direction: column;
    }
  }

  &__about-company-title {
    @include fontUnify(28, 40, 600);
    letter-spacing: 0.02em;

    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;

    background-color: $color-main;

    @include bigMobile {
      max-width: none;
      min-height: 70px;

      border-bottom-left-radius: 0;
      border-top-right-radius: 16px;
    }

    @include mobile {
      @include fontUnify(22, 26, 600);

      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }
  }

  &__about-company-text {
    @extend %width-content;
    @include flex-container(row, center, center);
    align-self: center;

    @include fontUnify(20, 28);
    letter-spacing: 0.02em;

    padding: 16px;

    @include mobile {
      @include fontUnify;

      padding: 24px 16px;
    }
  }

  // main-page__team-block
  &__team-block {
    @extend %flex-column;
    align-items: center;

    padding: 48px 16px;

    @include mobile {
      padding: 32px 16px;
    }
  }

  &__team-w {
    @extend %width-main;

    @include flex-container(row, center, center);

    background: linear-gradient(91.75deg, #f36c21 0.14%, #f5821f 99.6%);
    border-radius: 16px;

    padding: 16px;

    @include mobile {
      border-radius: 8px;
      padding: 16px 8px;
    }
  }

  &__team-text {
    width: 100%;
    max-width: 1248px;

    @include fontUnify(18, 26, 500);
    letter-spacing: 0.02em;

    color: #ffffff;

    @include mobile {
      @include fontUnify;
    }
  }

  // main-page__b2b-block
  &__b2b-block {
    position: relative;

    @extend %flex-column;
    align-items: center;
    justify-content: center;

    padding: 32px 16px;
  }

  &__b2b-bgr {
    position: absolute;
    @include setAbs;
  }

  &__b2b-bgr-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__b2b-block-container {
    position: relative;

    @extend %width-main;

    @extend %flex-column;
    align-items: center;
    gap: 48px;

    @include mobile {
      gap: 32px;
    }
  }

  &__b2b-logo {
    max-width: 200px;
    width: 100%;
    height: 200px;

    @include flex-container(row, center, center);

    border-radius: 50%;
    background-color: $color-main;

    @include mobile {
      max-width: 100px;
      height: 100px;
    }
  }

  &__b2b-logo-title {
    @include fontUnify(64, 84, 700);
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: #ffffff;

    @include mobile {
      @include fontUnify(24, 32, 700);
    }
  }

  &__b2b-heading {
    @extend %flex-column;
    align-items: center;
    gap: 32px;

    color: #ffffff;
  }

  &__b2b-heading-title {
    @include fontUnify(32, 40, 600);
    text-align: center;

    @include mobile {
      @include fontUnify(22, 26, 600);
    }
  }

  &__b2b-heading-text {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    text-align: center;

    @include mobile {
      @include fontUnify(16, 20, 600);
    }
  }

  &__b2b-info {
    width: 100%;

    @include flex-container;
    gap: 32px;

    @include bigMobile {
      flex-direction: column;
      align-items: center;

      gap: 24px;
    }
  }

  &__b2b-info-item {
    width: 100%;
    max-width: 343px;
    min-height: 237px;

    @extend %flex-column;
    align-items: center;
    justify-content: center;

    background-color: #f3f3f3;
    border-radius: 8px;

    padding: 16px;

    @include bigMobile {
      max-width: 643px;
      min-height: auto;
    }
  }

  &__b2b-info-text {
    @include fontUnify;
    letter-spacing: 0.02em;
  }

  &__b2b-link {
    width: 100%;
    max-width: 363px;

    @include flex-container(row, center, center);

    @include fontUnify(20, 30, 600);
    text-transform: uppercase;

    color: #ffffff;
    background-color: $color-main;
    border-radius: 6px;

    padding: 8px 0;
    transition: 0.2s ease-in-out;

    @include mobile {
      max-width: 230px;
    }

    &:hover {
      background-color: $color-main-dark;
    }
  }

  // main-page__coop-block

  &__coop-block {
    min-height: 504px;

    @extend %flex-column;
    align-items: center;
    justify-content: center;
    gap: 64px;

    @extend %padding-wrp;

    @include mobile {
      min-height: 330px;

      gap: 48px;
    }
  }

  &__coop-title-w {
    width: 100%;

    @extend %flex-column;
    align-items: center;
    gap: 24px;
  }

  &__coop-title {
    @include fontUnify(32, 42, 600);
    text-align: center;

    @include mobile {
      @include fontUnify(22, 26, 600);
    }
  }

  &__coop--title-text {
    @include fontUnify(20, 30, 600);
    text-align: center;
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(18, 22, 600);
    }
  }

  //main-page__news-block
  &__news-block {
    width: 100%;

    @extend %flex-column;
    align-items: center;
    justify-content: center;
    gap: 64px;

    background-color: #ffffff;

    @extend %padding-wrp;

    @include mobile {
      gap: 48px;
    }
  }

  &__news-title-w {
    width: 100%;

    @extend %flex-column;
    align-items: center;
    gap: 24px;

    padding-top: 64px;

    @include mobile {
      gap: 16px;

      padding-top: 40px;
    }
  }

  &__news-title {
    @include fontUnify(32, 40, 600);
    text-align: center;
    text-transform: capitalize;

    & span {
      color: $color-main;
    }

    @include mobile {
      @include fontUnify(22, 26, 600);
    }
  }

  &__news-title-text {
    @include fontUnify(20, 30, 600);
    text-align: center;
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(18, 22, 500);
    }
  }

  &__news-card-w {
    @extend %width-main;

    @include flex-container(row, center);
    flex-wrap: wrap;

    --gap: 16px;
    gap: var(--gap);

    margin-bottom: 64px;

    @include mobile {
      margin-bottom: 80px;
    }
  }

  &__news-card {
    @extend %flex-column;
    align-items: center;
    gap: calc(var(--gap) * 1.5);

    background-color: #ffffff;
    box-shadow: 0 3px 11px rgba(0, 0, 0, 0.2);

    border-radius: 8px;

    @include set-item-count-in-row(3);

    @include bigMobile {
      @include set-item-count-in-row(2);
    }

    @include mobile {
      gap: calc(var(--gap) * 2);

      width: 100%;
      max-width: 343px;
    }
  }

  &__news-link {
    width: 100%;

    @include fontUnify(18, 24);
    text-transform: capitalize;
    text-align: center;
    letter-spacing: 0.02em;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    color: $color-main;

    transition: 0.2s ease-in-out;

    &:hover {
      color: $color-main-dark;
    }
  }

  &__news-card-img-cont {
    width: 100%;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &__news-card-img {
    width: 100%;
    height: 100%;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    pointer-events: none;
  }

  &__news-card-info {
    height: 100%;

    @extend %flex-column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    padding: 0 10px 20px;

    @include mobile {
      gap: 16px;

      padding-bottom: 24px;
    }
  }

  &__news-card-title {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    text-align: center;

    @include mobile {
      @include fontUnify(18, 22, 600);
      letter-spacing: 0.02em;
    }
  }

  &__news-card-text {
    @include fontUnify;
    text-align: center;
    letter-spacing: 0.02em;

    color: #8a8a8a;

    @include lineClamp(4);

    @include mobile {
      @include fontUnify(12, 16);
    }
  }
}
</style>
