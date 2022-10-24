<template>
  <div class="category-slider-selector" ref="selector">
    <div v-if="!isMobile" class="category-slider">
      <div class="category-slider__prod">
        <div class="category-slider__prod-title-w">
          <h3 class="category-slider__prod-title">Продукция</h3>
          <div class="category-slider__prod-line"></div>
        </div>
        <div class="category-slider__prod-list-w">
          <div class="category-slider__prod-arrows">
            <div class="category-slider__prod-arrow-up" @click="prevSlide">
              <span></span>
            </div>
            <div class="category-slider__prod-arrow-down" @click="nextSlide">
              <span></span>
            </div>
          </div>
          <div class="category-slider__prod-list-container" ref="leftWrapper">
            <ul
              class="category-slider__prod-list"
              ref="linkListEl"
              :style="{ '--translate-y': linksTranslateY + 'px' }"
            >
              <li
                class="category-slider__prod-item"
                v-for="(pagination, index) in sliderData"
                :key="index"
                :class="{ 'prod-item-active': index === currentSlide }"
                @click="goToSlide(index)"
                ref="linkItems"
              >
                {{ pagination.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="category-slider__category">
        <div
          class="category-slider__category-w"
          :style="{ '--translate-y': TranslateY + '%' }"
        >
          <div
            class="category-slider__category-item-w"
            v-for="(slide, index) in sliderData"
            :key="index"
          >
            <div class="category-slider__category-img">
              <img :src="require(`../../assets/img/${slide.img}.png`)" alt="" />
            </div>
            <div class="category-slider__category-title-w">
              <h4 class="category-slider__category-title">{{ slide.title }}</h4>
              <p class="category-slider__category-description">
                {{ slide.text }}
              </p>
              <a :href="`${slide.link}`" class="category-slider__category-link"
                >Перейти в раздел</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="categoty-list">
      <h3 class="categoty-list__title">Продукция</h3>
      <div class="categoty-list__container">
        <a
          class="categoty-list__item"
          v-for="(item, index) in sliderData"
          :key="index"
        >
          <div class="categoty-list__item-img-w">
            <img
              class="categoty-list__item-img"
              :src="require(`../../assets/img/${item.img}.png`)"
              alt=""
            />
          </div>
          <h4 class="categoty-list__item-title">{{ item.title }}</h4>
        </a>
      </div>
      <a class="categoty-list__link" href="#">
        <svg
          class="categoty-list__link-img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 12C19.1114 14.991 15.7183 18 12 18C8.2817 18 4.88856 14.991 3 12C5.29855 9.15825 7.99163 6 12 6C16.0084 6 18.7015 9.1582 21 12Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="categoty-list__link-text">Все категории</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'nuxt-class-component'
import Vue from 'vue'

@Component({
  name: "SliderCategoryComponent",
})
export default class SliderCategoryComponent extends Vue {
  declare $refs: {
    leftWrapper: HTMLElement;
    linkListEl: HTMLElement;
    linkItems: HTMLElement[];
    selector: HTMLElement;
  };

  sliderData: any = [
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
    {
      img: "sliderPromImg",
      title: "Комплектующие для ПК",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "google.com",
    },
    {
      img: "sliderPromImg",
      title: "EGM аккумуляторы",
      text: "Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения",
      link: "logicpower.ua",
    },
  ];

  currentSlide: number = 0;
  linksTranslateY: number = 0;
  isMobile: boolean = false;

  get SlideCount() {
    return this.sliderData.length;
  }

  get TranslateY() {
    return this.currentSlide * -this.Step;
  }

  get Step() {
    return 100 / this.SlideCount;
  }

  prevSlide() {
    if (this.currentSlide - 1 < 0) this.currentSlide = this.SlideCount - 1;
    else this.currentSlide = this.currentSlide - 1;

    this.calcHeight();
  }

  nextSlide() {
    if (this.currentSlide + 1 >= this.SlideCount) this.currentSlide = 0;
    else this.currentSlide = this.currentSlide + 1;

    this.calcHeight();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.calcHeight();
  }

  calcHeight() {
    const leftWrapRect = this.$refs.leftWrapper.getBoundingClientRect();
    const linkListRect = this.$refs.linkListEl.getBoundingClientRect();
    const activeLinkRect =
      this.$refs.linkItems[this.currentSlide].getBoundingClientRect();

    const linkBottomFromWrapperCenter =
      leftWrapRect.height / 2 - (activeLinkRect.bottom - leftWrapRect.top);

    if (this.linksTranslateY + linkBottomFromWrapperCenter > 0) {
      this.linksTranslateY = 0;
    } else if (
      this.linksTranslateY + linkBottomFromWrapperCenter <
      leftWrapRect.height - linkListRect.height
    ) {
      this.linksTranslateY = leftWrapRect.height - linkListRect.height;
    } else {
      this.linksTranslateY += linkBottomFromWrapperCenter;
    }
  }

  calcIsMobile() {
    const mobWidth = getComputedStyle(this.$refs.selector).getPropertyValue(
      "--mobile-width"
    );
    this.isMobile = window.innerWidth <= parseInt(mobWidth);
  }

  onResize() {
    this.calcIsMobile();
  }

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  unmounted() {
    window.removeEventListener("resize", this.onResize);
  }
}
</script>

<style lang="scss" scoped>
.category-slider-selector {
  width: 100%;
  @extend %flex-column;
  align-items: center;

  --mobile-width: #{$mobile-big-width};
}

.category-slider {
  @include flex-container(row, center);
  @extend %width-main;
  height: 540px;

  border-radius: 16px;
  overflow: hidden;

  &__prod {
    max-width: 415px;
    width: 100%;

    @extend %flex-column;
    flex-shrink: 2;
    flex-grow: 1;

    padding: 16px;
    color: white;
    background-color: #393d38;
  }

  &__prod-title-w {
  }

  &__prod-title {
    @include fontUnify(20, 30, 600);
    text-align: center;
    text-transform: uppercase;

    margin-bottom: 16px;
  }

  &__prod-line {
    width: 100%;
    height: 1px;

    background-color: white;
  }

  &__prod-list-w {
    position: relative;
    height: 100%;

    padding: 80px 0;
  }

  &__prod-arrows {
    position: absolute;
    @include setAbs;

    @extend %flex-column;
    justify-content: space-between;
    align-items: center;

    padding-top: 16px;
    z-index: 3;
  }

  &__prod-arrow-up {
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    transition: 0.2s ease-in-out;

    cursor: pointer;

    &:hover span {
      border-color: $color-main-dark;
    }

    & span {
      width: 10px;
      height: 10px;

      border-top: 1px solid black;
      border-left: 1px solid black;

      transform: rotateZ(45deg) translate(2px, 2px);

      &:hover {
        color: $color-main-dark;
      }
    }
  }

  &__prod-arrow-down {
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    transition: 0.2s ease-in-out;

    cursor: pointer;

    &:hover span {
      border-color: $color-main-dark;
    }

    & span {
      width: 10px;
      height: 10px;

      border-top: 1px solid black;
      border-left: 1px solid black;

      transform: rotateZ(225deg) translate(2px, 2px);
    }
  }

  &__prod-list-container {
    width: 100%;
    height: 292px;

    overflow: hidden;
  }

  &__prod-list {
    --translate-y: 0;

    position: relative;

    @extend %flex-column;
    gap: 16px;

    transition: 0.3s ease-in-out;

    transform: translateY(var(--translate-y));
    z-index: 3;
  }

  &__prod-item {
    @include fontUnify(20, 28);
    letter-spacing: 0.02em;

    cursor: pointer;

    &.prod-item-active {
      color: $color-main;
    }
  }

  &__category {
    width: 100%;
    height: 540px;

    @extend %flex-column;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 1;
    flex-grow: 2;

    background-color: white;
    overflow: hidden;

    padding: 0 32px;
  }

  &__category-w {
    --translate-y: 0;
    transform: translateY(var(--translate-y));
    transition: 0.3s ease-in-out;
  }

  &__category-item-w {
    width: 100%;
    height: 540px;
  }

  &__category-img {
    max-width: 341px;
    width: 100%;

    margin: auto;
  }

  &__category-title-w {
    width: 100%;
    max-width: 920px;

    @extend %flex-column;
    gap: 16px;
  }

  &__category-title {
    width: 100%;

    @include fontUnify(20, 30, 600);
    letter-spacing: 0.02em;
    text-align: start;
    text-transform: uppercase;
  }

  &__category-description {
    @include fontUnify;
    letter-spacing: 0.02em;

    @include lineClamp(3);

    margin-bottom: 16px;
  }

  &__category-link {
    width: 100%;
    max-width: 376px;

    @include flex-container(row, center, center);

    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    color: #ffffff;

    border-radius: 6px;
    background-color: $color-main;

    padding: 8px 0;
    transition: 0.2s ease-in-out;

    cursor: pointer;

    &:hover {
      background-color: $color-main-dark;
    }
  }
}

.categoty-list {
  --gap: 16px;

  @extend %flex-column;
  align-items: center;
  gap: calc(var(--gap) * 2);

  &__title {
    @include fontUnify(22, 26, 600);
    text-align: center;
    text-transform: uppercase;
  }

  &__link {
    width: 100%;
    max-width: 383px;

    @include flex-container(row, center, center);
    gap: var(--gap);

    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    padding: 10px 0;

    cursor: pointer;

    transition: 0.2s ease-in-out;
    &:hover {
      color: $color-main;
      fill: $color-main;
    }
    &:hover path {
      stroke: $color-main;
      transition: 0.2s ease-in-out;
    }
  }

  &__link-img path {
    transition: 0.2s ease-in-out;
  }

  &__link-text {
    @include fontUnify(20, 28);
    letter-spacing: 0.02em;
    text-align: center;
  }

  &__container {
    @include flex-container(row, center);
    flex-wrap: wrap;
    gap: var(--gap);
  }

  &__item {
    @extend %flex-column;
    align-items: center;
    gap: calc(var(--gap) * 2);

    @include set-item-count-in-row(2);

    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    padding: 8px;
    transition: 0.2s ease-in-out;
    &:hover {
      color: $color-main;
    }
  }

  &__item-img-w {
    position: relative;
    width: 100%;

    padding-top: 100%;
  }

  &__item-img {
    @include absoluteGrow();

    width: 100%;
    height: 100%;

    object-fit: cover;
    pointer-events: none;
  }

  &__item-title {
    @include fontUnify(16, 20, 700);
    text-align: center;
    text-transform: uppercase;

    word-break: break-word;
  }
}
</style>
