<template>
  <div class="card-product" ref="productWrapper">
    <div class="card-product__w">
      <div class="card-product__container">
        <div class="card-title">
          <h1 class="card-title__text">
            <span class="card-title__text-bold">{{ card.name.ru }}</span>
            <span class="card-title__text-normal"></span> 1.4кВт АКБ mGel 100 Ah
          </h1>
          <div class="card-title__code">
            <span class="card-title__code-text">Код:</span>
            <span class="card-title__code-number">{{ card.code }}</span>
          </div>
        </div>
      </div>
    </div>
    <CardProductNavComponent
      @navChange="calcCurrNav"
      :CurrentNav="currentNav"
      ref="productNavList"
    />
    <div class="card-product__w">
      <div class="card-product__container">
        <CardAboutProductComponent
          :class="{ active: currentNav === ProductNav.ALL }"
          ref="aboutSection"
        />
      </div>
    </div>
    <div class="card-product__w">
      <div class="card-product__container">
        <div class="spec">
          <div class="spec__w">
            <CardProductDescriptionComponent
              :class="{ active: currentNav === ProductNav.ALL }"
            >
              <h3 class="spec__title">
                Описание
                <span class="spec__article">{{ card.name.ru }}</span>
              </h3>
            </CardProductDescriptionComponent>
            <CardProductCharacteristicsComponent
              :class="{
                active:
                  currentNav === ProductNav.ALL ||
                  currentNav === ProductNav.SPEC,
              }"
            >
              <h3 class="spec__title">
                Характеристики
                <span class="spec__article">{{ card.name.ru }}</span>
              </h3>
            </CardProductCharacteristicsComponent>
            <CardProductInstructionComponent
              :class="{
                active:
                  currentNav === ProductNav.ALL ||
                  currentNav === ProductNav.DOWNLOADS,
              }"
            >
              <h3 class="spec__title">
                Загрузки
                <span class="spec__article">{{ card.name.ru }}</span>
              </h3>
            </CardProductInstructionComponent>
            <CardProductVideoComponent
              :class="{
                active: currentNav === ProductNav.MEDIA,
              }"
            >
              <h3 class="spec__title">
                Видео
                <span class="spec__article">{{ card.name.ru }}</span>
              </h3>
            </CardProductVideoComponent>
          </div>
          <CardProductAsideComponent :code="card.code" :navHeight="navHeight" />
        </div>
        <div class="mobile-price" v-if="isMobile && isVisibility">
          <div class="mobile-price__money-sale">
            <p class="mobile-price__money-sale-old">3500 грн</p>
            <p class="mobile-price__money-sale-new">3113 грн</p>
          </div>
          <div class="mobile-price__money-regular">3113 грн</div>
          <button class="buy">Купить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import CardProductNavComponent from "./CardProductNav.vue";
import CardAboutProductComponent from "./CardAboutProduct.vue";
import CardProductDescriptionComponent from "./CardProductDescription.vue";
import CardProductAsideComponent from "./CardProductAside.vue";
import CardProductCharacteristicsComponent from "./CardProductCharacteristics.vue";
import CardProductInstructionComponent from "./CardProductInstruction.vue";
import CardProductVideoComponent from "./CardProductVideo.vue";
import { ProductNav } from "@/models/view/card_product/nav";
import { headerViewService } from "~/services/header/view/header.view.service";

@Component({
  name: "CardProductComponent",
  components: {
    CardProductNavComponent,
    CardAboutProductComponent,
    CardProductDescriptionComponent,
    CardProductAsideComponent,
    CardProductCharacteristicsComponent,
    CardProductInstructionComponent,
    CardProductVideoComponent,
  },
})
export default class CardProductComponent extends Vue {
  declare $refs: {
    productWrapper: HTMLElement;
    aboutSection: CardAboutProductComponent;
    productNavList: CardProductNavComponent;
  };

  ProductNav = ProductNav;
  currentNav: ProductNav = ProductNav.ALL;

  card = {
    code: "0000001",
    slug: {
      ru: "akkumulyator",
      uk: "akumulyator",
    },
    name: {
      ru: "Аккумулятор",
      uk: "Акумулятор",
    },
    description: {
      ru: "<p>Электрический аккумулятор</p>",
      uk: "<p>Електричний акумулятор</p>",
    },
    status: "inStock",
    labels: ["novelty"],
    prices: [
      {
        type: "current",
        money: {
          amount: 33.77,
          currency: "UAH",
        },
      },
    ],
    manufacturer: {
      slug: "logicpower",
      name: "LogicPower",
    },
    specifications: [
      {
        id: 1,
        name: {
          ru: "Тип корпуса",
          uk: "Тип корпусу",
        },
        option: {
          id: 2,
          value: {
            ru: "цилиндрический",
            uk: "циліндричний",
          },
        },
      },
    ],
    categories: [
      {
        name: {
          ru: "Сетевое оборудование",
          uk: "Мережеве обладнання",
        },
      },
    ],
    images: [
      {
        locales: ["ru"],
        url: "https://example.com/image.jpg",
        thumbnails: [
          {
            url: "https://example.com/image_tile.jpg",
            type: "tile",
          },
        ],
      },
    ],
    attachments: [
      {
        group: "Инструкция",
        files: [
          {
            locales: ["ru"],
            name: {
              ru: "Инструкция пользователя",
              uk: "Інструкція користувача",
            },
            url: "https://logicfox.info/manuals/LP/UPS/2415/2415_2416_4324_4325_(LP_650_850VA-PS-6PS)_manual_ua.pdf",
            meta: {
              type: "application/pdf",
              size: 1846538,
            },
          },
        ],
      },
    ],
  };

  calcCurrNav(idx) {
    this.currentNav = idx;
  }

  isSale: boolean = true;
  isMobile: boolean = false;
  isVisibility: boolean = false;
  navHeight: number = 0;

  calcNavHeight() {
    const navHeightRect =
      this.$refs.productNavList.$refs.navListHTML.getBoundingClientRect();
    this.navHeight = navHeightRect.height;
  }

  calcBlockPriceVisibility() {
    const priceBlock = this.$refs.aboutSection.$refs.blockPrice;
    const blockPriceRect = priceBlock.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (
      blockPriceRect.bottom <= windowHeight &&
      blockPriceRect.top > headerViewService.headerHeight
    ) {
      this.isVisibility = false;
    } else {
      this.isVisibility = true;
    }
  }

  calsIsMobile() {
    const mobWidth = getComputedStyle(
      this.$refs.productWrapper
    ).getPropertyValue("--mobile-width");
    this.isMobile = window.innerWidth <= parseInt(mobWidth);
  }

  onResize() {
    this.calsIsMobile();
    this.calcBlockPriceVisibility();
    this.calcNavHeight();
  }

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
    window.addEventListener("scroll", this.calcBlockPriceVisibility);
  }

  unmounted() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.calcBlockPriceVisibility);
  }
}
</script>

<style lang="scss" scoped>
.card-product {
  --mobile-width: #{$mobile-big-width};
  --local-pad: 16px;

  position: relative;

  @extend %flex-column;
  align-items: center;
  gap: 16px;

  padding-bottom: 80px;

  &__w {
    width: 100%;

    @extend %flex-column;
    align-items: center;

    padding: 0 16px;
  }

  &__container {
    @extend %width-main;
  }
}

.card-title {
  width: 100%;

  @include flex-container(row, space-between, flex-start);
  flex-wrap: wrap;
  gap: 16px;

  padding-top: 16px;

  &__text {
    @include fontUnify(36, 42);

    @include bigMobile {
      @include fontUnify(24, 28);
    }
  }

  &__text-bold {
    font-weight: 500;

    @include bigMobile {
      display: block;
    }
  }

  &__text-normal {
  }

  &__code {
    @include flex-container(row, center, center);
    gap: 8px;

    @include fontUnify(36, 42, 500);

    @include bigMobile {
      @include fontUnify(24, 28);
    }
  }

  &__code-text {
    color: $color-main;
  }

  &__code-number {
  }
}

.spec {
  width: 100%;

  @include flex-container(row, space-between, flex-start);
  gap: 16px;

  &__w {
    width: 100%;

    @extend %flex-column;
    gap: 16px;
  }

  &__title {
    @include fontUnify(18, 22, 700);

    @include bigMobile {
      font-weight: 500;
    }
  }

  &__article {
    font-weight: 400;
  }
}

.mobile-price {
  width: 100%;

  @include flex-container(row, space-between, center);
  flex-wrap: wrap;
  gap: 8px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  box-shadow: 0px 3px 11px rgb(0 0 0 / 10%);
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  padding: 8px;

  & .buy {
    max-width: 160px;
  }

  &__money-sale {
    @include flex-container(row-reverse, flex-end, center);
    gap: 16px;
  }

  &__money-sale-old {
    @include fontUnify;
    text-decoration: line-through;
  }

  &__money-sale-new {
    @include fontUnify(24, 28, 500);
    color: red;
  }

  &__money-regular {
    @include fontUnify(24, 28, 500);
  }
}
</style>
