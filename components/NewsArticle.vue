<template>
  <div>
    <section class="banner">
      <div class="banner__img-w">
        <picture>
          <source
              srcset="@/assets/img/NewsArticleBannerMob.png"
              media="(max-width: 680px)"
          />
          <img
              class="banner__img"
              src="@/assets/img/NewsArticleBanner.png"
              alt=""
          />
        </picture>
      </div>
      <div class="banner__content">
        <div class="banner__content-column">
          <h1 class="banner__title">Система защиты остатков склада</h1>
        </div>
      </div>
    </section>
    <section class="news-article">
      <div class="news-article__content">
        <h4 class="news-article__content-title">Содержание</h4>
        <div>
          <a class="news-article__content-item" href="#news-article__anchor1"
          >Что означает «Система защиты остатков склада»?</a
          >
        </div>
        <div>
          <a class="news-article__content-item" href="#news-article__anchor2"
          >Как это работает?</a
          >
        </div>
        <div>
          <a class="news-article__content-item" href="#news-article__anchor3"
          >На какие группы товаров распространяется «Система защиты остатков
          склада»?</a
          >
        </div>
        <div>
          <a class="news-article__content-item" href="#news-article__anchor4"
          >Срок действия программы?</a
          >
        </div>
        <div>
          <a class="news-article__content-item" href="#news-article__anchor5"
          >Почему это выгодно нашим клиентам?</a
          >
        </div>
      </div>
      <div class="news-article__w">
        <div class="news-article__info">
          <h4 class="news-article__info-title" id="news-article__anchor1">
            Что означает «Система защиты остатков склада»?
          </h4>
          <p class="news-article__info-text">
          Цены на товары то повышаются, то понижаются – это обычный рыночный
          механизм. Хорошо, если вы успели закупить партию товара до того, как
          на него выросла цена.
          </p>
          <p class="news-article__info-text">А если наоборот?</p>
          <p class="news-article__info-text">
          Специальная программа от LogicPower «Система защиты остатков склада»
          разработана нашими специалистами специально, чтобы минимизировать
          риски оптовых клиентов компании в случаях, когда снижается стоимость
          некоторых товаров, как для оптовой, так и для розничной продажи.
          </p>
        </div>
        <div class="news-article__info">
          <h4 class="news-article__info-title" id="news-article__anchor2">
            Как это работает?
          </h4>
          <p class="news-article__info-text">
          Допустим, вы купили 100 аккумуляторов по цене $20 и до изменения цены
          в сторону уменьшения ($15) успели продать 20 батарей. Мы пересчитаем
          Вам оставшиеся 80 аккумуляторов по новой цене и перечислим разницу на
          бонусный счет контрагента, чтобы Вы могли использовать данные средства
          при следующем заказе.
          </p>
        </div>
        <div class="news-article__info">
          <h4 class="news-article__info-title" id="news-article__anchor3">
            На какие группы товаров распространяется «Система защиты остатков
            склада»?
          </h4>
          <p class="news-article__info-text">
          Программа лояльности «Система защиты остатков склада» распространяется
          на всю продукцию торговых марок LogicPower и GreenVision.
          </p>
        </div>
        <div class="news-article__info">
          <h4 class="news-article__info-title" id="news-article__anchor4">
            Срок действия программы?
          </h4>
          <p class="news-article__info-text">
          Программы защиты остатков склада от LogicPower действует в течение
          одного месяца со дня оформления покупки партии товара.
          </p>
        </div>
        <div class="news-article__info">
          <h4 class="news-article__info-title" id="news-article__anchor5">
            Почему это выгодно нашим клиентам?
          </h4>
          <p class="news-article__info-text">
          Наши сотрудники тщательно следят за соблюдением розничного индикатива
          цен на продукцию LogicPower, как в сторону увеличения, так и в сторону
          уменьшения.
          </p>
          <p class="news-article__info-text">
          Наши друзья и партнеры не должны терять свою прибыль, если стоимость
          товара уменьшилась.
          </p>
        </div>
      </div>
      <div class="more">
        <h5 class="more__title">Читайте также:</h5>
        <div class="more__card-list">
          <div class="more__card">
            <a class="more__card-link" href="#">
            <img
                class="more__card-img"
                src="../assets/img/moreCardPicture.png"
                alt=""
            />
            </a>
            <div class="more__card-inner">
              <div class="more__card-article-w">
                <a class="more__card-article-link" href="#">Статья</a>
                <p class="more__card-article-data">20.04.22</p>
              </div>
              <h3 class="more__card-title">
                Лучшие комплекты бесперебойного питания для частного дома
              </h3>
              <a class="more__card-link" href="#">Перейти</a>
            </div>
          </div>
          <div class="more__card">
            <a class="more__card-link" href="#">
            <img
                class="more__card-img"
                src="../assets/img/moreCardPicture.png"
                alt=""
            />
            </a>
            <div class="more__card-inner">
              <div class="more__card-article-w">
                <a class="more__card-article-link" href="#">Статья</a>
                <p class="more__card-article-data">20.04.22</p>
              </div>
              <h3 class="more__card-title">
                Лучшие комплекты бесперебойного питания для частного дома
              </h3>
              <a class="more__card-link" href="#">Перейти</a>
            </div>
          </div>
          <div class="more__card">
            <a class="more__card-link" href="#">
            <img
                class="more__card-img"
                src="../assets/img/moreCardPicture.png"
                alt=""
            />
            </a>
            <div class="more__card-inner">
              <div class="more__card-article-w">
                <a class="more__card-article-link" href="#">Статья</a>
                <p class="more__card-article-data">20.04.22</p>
              </div>
              <h3 class="more__card-title">
                Лучшие комплекты бесперебойного питания для частного дома
              </h3>
              <a class="more__card-link" href="#">Перейти</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class NewsArticleComponent extends Vue {
}
</script>

<style lang="scss">
.news-article {
  @extend %flex-column;
  align-items: center;
  gap: 96px;

  @extend %padding-wrp;
  padding-bottom: 80px;

  &__content {
    @extend %width-content;

    @extend %flex-column;
    gap: 32px;

    background: #f8f8f8;
    border-radius: 12px;

    padding: 32px;

    @include mobile {
      gap: 24px;

      border-radius: 8px;

      padding: 24px;
    }
  }

  &__content-title {
    @include fontUnify(32, 42, 600);

    margin-bottom: 16px;

    @include mobile {
      @include fontUnify(24, 34);

      margin-bottom: 0;
    }
  }

  &__content-item {
    @include fontUnify(20, 28, 500);
    letter-spacing: 0.02em;

    color: $color-main;

    &:hover {
      color: $color-main-dark;
    }

    @include mobile {
      @include fontUnify;
    }
  }

  &__w {
    @extend %width-content;
    @extend %flex-column;
    gap: 48px;

    @include mobile {
      margin-bottom: 64px;
    }
  }

  &__info {
    @extend %flex-column;
    gap: 24px;

    @include mobile {
      gap: 16px;
    }
  }

  &__info-title {
    @include fontUnify(32, 42, 600);
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify(24, 34);
    }
  }

  &__info-text {
    @include fontUnify(18, 24);
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify;
    }
  }
}

.more {
  @extend %flex-column;
  align-items: center;
  gap: 16px;

  &__title {
    @include fontUnify(32, 44, 500);
    text-transform: uppercase;
  }

  &__card-list {
    @extend %width-main;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    --gap: 16px;
    gap: var(--gap);
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

  &__card-inner {
    min-height: 304px;

    @extend %flex-column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    padding: 16px 32px 32px;

    @include mobile {
      min-height: 246px;

      padding: 16px;
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
}
</style>
