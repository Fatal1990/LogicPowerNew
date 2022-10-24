<template>
  <div class="cooperation-slider">
    <div
      class="cooperation-slider__arrow-left"
      :class="{ disable: currentSlide <= 0 }"
      @click="prevSlide"
    >
      <img
        class="cooperation-slider__arrow-left-img"
        src="@/assets/icons/mainNavArrowLeftIcon.svg"
        alt=""
      >
    </div>
    <div class="cooperation-slider__w" ref="slideWrap">
      <div
        class="cooperation-slider__cont"
        ref="slideList"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :style="{
          '--translate-x': translateListX + 'px',
          '--gap': gapLength + 'px',
        }"
      >
        <div
          class="cooperation-slider__item"
          v-for="(item, index) in sliderData"
          :key="index"
          ref="slideListItem"
        >
          <img
            class="cooperation-slider__img"
            :src="require(`../../assets/img/${item.img}.svg`)"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      class="cooperation-slider__arrow-right"
      :class="{ disable: slideMaxCount === currentSlide }"
      @click="nextSlide"
    >
      <img
        class="cooperation-slider__arrow-right-img"
        src="@/assets/icons/mainNavArrowRightIcon.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'nuxt-class-component'
import Vue from 'vue'

@Component({})
export default class CooperationSliderComponent extends Vue {
  sliderData: any = [
    {
      id: 1,
      img: "mainCooperationAtbIcon",
    },
    {
      id: 2,
      img: "mainCooperationMoyoIcon",
    },
    {
      id: 3,
      img: "mainCooperationPromIcon",
    },
    {
      id: 4,
      img: "mainCooperationFIcon",
    },
    {
      id: 5,
      img: "mainCooperationSilpoIcon",
    },
    {
      id: 6,
      img: "mainCooperationRozetkaIcon",
    },
    {
      id: 7,
      img: "mainCooperationRozetkaIcon",
    },
    {
      id: 8,
      img: "mainCooperationRozetkaIcon",
    },
    {
      id: 9,
      img: "mainCooperationRozetkaIcon",
    },
  ];

  declare $refs: {
    slideWrap: HTMLElement;
    slideListItem: HTMLElement;
    slideList: HTMLElement;
  };

  currentSlide: number = 0;
  gapLength: number = 0;
  translateListX: number = 0;
  slideMaxCount: number = 0;
  startX: number = 0;
  endX: number = 0;

  get SlideCount() {
    return this.sliderData.length;
  }

  get Step() {
    return 100 / this.SlideCount;
  }

  get TranslateX() {
    const slideItemRect =
      this.$refs.slideListItem[this.currentSlide].getBoundingClientRect();

    return (
      -slideItemRect.width * this.currentSlide -
      this.gapLength * this.currentSlide
    );
  }

  calcItemsLength() {
    const slideWrapRect = this.$refs.slideWrap.getBoundingClientRect();
    const slideItemRect =
      this.$refs.slideListItem[this.currentSlide].getBoundingClientRect();

    let slideItemsCount = Math.floor(slideWrapRect.width / slideItemRect.width);

    if (slideItemsCount >= this.SlideCount) slideItemsCount = this.SlideCount;

    this.gapLength =
      (slideWrapRect.width - slideItemsCount * slideItemRect.width) /
      (slideItemsCount - 1);

    const slideMaxWidth =
      (this.sliderData.length - slideItemsCount) * slideItemRect.width +
      this.gapLength * (this.sliderData.length - slideItemsCount);

    this.slideMaxCount = this.sliderData.length - slideItemsCount;

    if (-slideMaxWidth >= this.TranslateX) {
      this.translateListX = -slideMaxWidth;
      this.currentSlide = this.slideMaxCount;
    } else
      this.translateListX =
        -slideItemRect.width * this.currentSlide -
        this.gapLength * this.currentSlide;
  }

  nextSlide() {
    if (this.currentSlide + 1 >= this.SlideCount)
      this.currentSlide = this.SlideCount;
    else this.currentSlide = this.currentSlide + 1;

    this.calcItemsLength();
  }

  prevSlide() {
    if (this.currentSlide - 1 < 0) this.currentSlide = 0;
    else this.currentSlide = this.currentSlide - 1;

    this.calcItemsLength();
  }

  handleTouchStart(e) {
    this.startX = e.touches[0].clientX;
    this.endX = 0;
  }

  handleTouchMove(e) {
    this.endX = e.touches[0].clientX;
  }

  handleTouchEnd() {
    const slideItemRect =
      this.$refs.slideListItem[this.currentSlide].getBoundingClientRect();
    const slideWrapRect = this.$refs.slideWrap.getBoundingClientRect();

    const mobMaxWidth = this.SlideCount * slideItemRect.width;

    const mobGapStr = getComputedStyle(this.$refs.slideList).getPropertyValue(
      "--mob-gap"
    );
    const mobGap = parseFloat(mobGapStr);

    const mobWidthToShow =
      mobMaxWidth + mobGap * (this.SlideCount - 1) - slideWrapRect.width;
    console.log(mobWidthToShow);

    if (this.endX > 0 && this.endX < this.startX)
      this.translateListX -= slideWrapRect.width / 1.2;
    else if (this.endX > 0 && this.endX > this.startX)
      this.translateListX += slideWrapRect.width / 1.2;

    if (this.translateListX >= 0) this.translateListX = 0;
    else if (this.translateListX <= -mobWidthToShow) {
      this.translateListX = -mobWidthToShow;
    }
  }

  onResize() {
    this.calcItemsLength();
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
.cooperation-slider {
  @extend %width-main;

  @include flex-container(row, space-between, center);
  gap: 56px;

  &__arrow-left {
    min-width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s ease;

    @include mobile {
      display: none;
    }

    &.disable {
      pointer-events: none;
      opacity: 0.2;
    }
  }

  &__arrow-left-img {
  }

  &__w {
    width: 1290px;
    overflow: hidden;
    overscroll-behavior: contain;
  }

  &__cont {
    --translate-x: 0;
    --gap: 0;
    --mob-gap: 8px;

    @include flex-container;
    gap: var(--gap);

    transform: translateX(var(--translate-x));
    transition: 0.3s ease-in-out;

    @include mobile {
      gap: var(--mob-gap);
      transition: 0.35s cubic-bezier(0.08, 0.66, 0.22, 1.06);
    }
  }

  &__item {
    min-width: 201px;

    @include mobile {
      min-width: 150px;
    }
  }

  &__img {
    height: 100%;
    object-fit: contain;
  }

  &__arrow-right {
    min-width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    @include mobile {
      display: none;
    }

    &.disable {
      pointer-events: none;
      opacity: 0.2;
    }
  }

  &__arrow-right-img {
  }
}
</style>
