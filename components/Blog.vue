<template>
  <div>
    <section class="banner">
      <div class="banner__img-w">
        <picture>
          <source srcset="../assets/img/blogBannerMob.png" media="(max-width: 680px)"/>
          <img class="banner__img" src="../assets/img/blogBanner.png" alt=""/>
        </picture>
      </div>
      <div class="banner__content">
        <div class="banner__content-column">
          <h1 class="banner__title">БЛОГ & НОВОСТИ</h1>
        </div>
      </div>
    </section>
    <section class="blog">
      <div class="blog__w">
        <div class="blog__pages-w">
          <div class="blog__line"></div>
          <div class="blog__pages">
            <div class="blog__page active">Все</div>
            <div class="blog__page">Статьи</div>
            <div class="blog__page">Обзоры</div>
            <div class="blog__page">Новости</div>
          </div>
          <div class="blog__line"></div>
        </div>
        <div class="blog__card-list">
          <div class="blog__card">
            <a class="blog__card-link" href="#">
            <img class="blog__card-img" src="../assets/img/moreCardPicture.png" alt=""/>
            </a>
            <div class="blog__card-inner">
              <div class="blog__card-article-w">
                <a class="blog__card-article-link" href="#">Статья</a>
                <p class="blog__card-article-data">20.04.22</p>
              </div>
              <h3 class="blog__card-title">
                3 лучших аккумулятора для автомобиля LogicPower: рейтинг 2021 года
              </h3>
              <p class="blog__card-text">
              Кожен автомобіліст сам вирішує, який акумулятор краще обрати свого
              автомобіля
              </p>
              <a class="blog__card-link" href="#">Перейти</a>
            </div>
          </div>
          <div class="blog__card">
            <a class="blog__card-link" href="#">
            <img class="blog__card-img" src="../assets/img/moreCardPicture.png" alt=""/>
            </a>
            <div class="blog__card-inner">
              <div class="blog__card-article-w">
                <a class="blog__card-article-link" href="#">Статья</a>
                <p class="blog__card-article-data">20.04.22</p>
              </div>
              <h3 class="blog__card-title">
                3 лучших аккумулятора для автомобиля LogicPower: рейтинг 2021 года
              </h3>
              <p class="blog__card-text">
              Кожен автомобіліст сам вирішує, який акумулятор краще обрати свого
              автомобіля
              </p>
              <a class="blog__card-link" href="#">Перейти</a>
            </div>
          </div>
          <div class="blog__card">
            <a class="blog__card-link" href="#">
            <img class="blog__card-img" src="../assets/img/moreCardPicture.png" alt=""/>
            </a>
            <div class="blog__card-inner">
              <div class="blog__card-article-w">
                <a class="blog__card-article-link" href="#">Статья</a>
                <p class="blog__card-article-data">20.04.22</p>
              </div>
              <h3 class="blog__card-title">
                3 лучших аккумулятора для автомобиля LogicPower: рейтинг 2021 года
              </h3>
              <p class="blog__card-text">
              Кожен автомобіліст сам вирішує, який акумулятор краще обрати свого
              автомобіля
              </p>
              <a class="blog__card-link" href="#">Перейти</a>
            </div>
          </div>
          <div class="blog__card">
            <a class="blog__card-link" href="#">
            <img class="blog__card-img" src="../assets/img/moreCardPicture.png" alt=""/>
            </a>
            <div class="blog__card-inner">
              <div class="blog__card-article-w">
                <a class="blog__card-article-link" href="#">Статья</a>
                <p class="blog__card-article-data">20.04.22</p>
              </div>
              <h3 class="blog__card-title">
                3 лучших аккумулятора для автомобиля LogicPower: рейтинг 2021 года
              </h3>
              <p class="blog__card-text">
              Кожен автомобіліст сам вирішує, який акумулятор краще обрати свого
              автомобіля
              </p>
              <a class="blog__card-link" href="#">Перейти</a>
            </div>
          </div>
          <div class="blog__card">
            <a class="blog__card-link" href="#">
            <img class="blog__card-img" src="../assets/img/moreCardPicture.png" alt=""/>
            </a>
            <div class="blog__card-inner">
              <div class="blog__card-article-w">
                <a class="blog__card-article-link" href="#">Статья</a>
                <p class="blog__card-article-data">20.04.22</p>
              </div>
              <h3 class="blog__card-title">
                3 лучших аккумулятора для автомобиля LogicPower: рейтинг 2021 года
              </h3>
              <p class="blog__card-text">
              Кожен автомобіліст сам вирішує, який акумулятор краще обрати свого
              автомобіля
              </p>
              <a class="blog__card-link" href="#">Перейти</a>
            </div>
          </div>
        </div>
        <div class="pagination">1 2 3</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class BlogComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.blog {
  @extend %flex-column;
  align-items: center;

  @extend %padding-wrp;
  padding-bottom: 80px;

  &__w {
    @extend %width-main;
    @extend %flex-column;
    align-items: center;
    gap: 110px;

    @include mobile {
      gap: 32px;
    }
  }

  &__pages-w {
    width: 100%;

    @extend %flex-column;
    align-items: center;
    gap: 24px;

    @include mobile {
      gap: 8px;
    }
  }

  &__line {
    @extend %width-main;
    height: 1px;

    background-color: #393d38;
  }

  &__pages {
    @extend %width-content;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 16px;
    padding-right: 16px;
  }

  &__page {
    @include fontUnify(24, 34);
    letter-spacing: 0.02em;

    cursor: pointer;

    &.active {
      border: 1px solid #393d38;
      border-radius: 60px;

      padding: 8px 56px;

      color: $color-main;
    }

    &:hover {
      color: $color-main;
    }

    @include mobile {
      @include fontUnify;
    }
  }

  &__card-list {
    @extend %width-main;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    --gap: 16px;
    gap: 24px var(--gap);

    @include mobile {
      gap: var(--gap);
    }
  }

  &__card {
    @extend %flex-column;
    align-items: center;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    @include set-item-count-in-row(3);

    @include bigMobile() {
      @include set-item-count-in-row(2);
    }

    @include mobile() {
      @include set-item-count-in-row(1);
    }
  }

  &__card-link {
    width: 100%;

    @include fontUnify(18, 24);
    text-align: center;

    color: $color-main;
  }

  &__card-img {
    width: 100%;
    height: 242px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &__card-inner {
    min-height: 304px;

    @extend %flex-column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    padding: 16px 32px 32px;

    @include mobile {
      min-height: 246px;

      padding: 16px;
    }
  }

  &__card-article-w {
    width: 100%;

    display: flex;
    justify-content: space-between;

    @include fontUnify;
  }

  &__card-article-link {
    color: $color-main;
  }

  &__card-article-data {
  }

  &__card-title {
    @include fontUnify(20, 30);
    text-transform: uppercase;
    text-align: center;

    @include mobile {
      @include fontUnify(18, 24);
    }
  }

  &__card-text {
    @include fontUnify;
    text-align: center;
    letter-spacing: 0.02em;

    color: #8a8a8a;

    @include lineClamp(4);

    @include mobile {
      display: none;
    }
  }
}
</style>
