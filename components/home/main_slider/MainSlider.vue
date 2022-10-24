<template>
  <article class="home-slider">
    <div class="home-slider__bg-w">
      <span class="ui-loader" v-if="!slideList.length"></span>
      <div class="home-slider__bg"
           v-for="(slide, index) in slideList"
           :key="index"
           :style="{'--bg-color': slide.backgroundColor}"
           :class="{
              hideLeft: isHideLeft(index),
              hideRight: isHideRight(index),
              showLeft: isShowLeft(index),
              showRight: isShowRight(index),
           }"
      />
    </div>
    <div class="home-slider__slide-handler"
         v-for="(slide, index) in slideList"
         :key="index"
         :style="{
                  '--bg-color': slide.backgroundColor,
                  '--translateX': isActive(index, cssPros.bannerTranslateX) + 'px',
                  '--angle': isActive(index, cssPros.bannerTranslateX * 0.2) + 'deg'
               }"
         :class="{
                  hideLeft: isHideLeft(index),
                  hideRight: isHideRight(index),
                  showLeft: isShowLeft(index),
                  showRight: isShowRight(index),
                  active: isActive(index),
                  move: isActive(index, isMove)
               }"

         @mousedown="startMove"
         @touchstart="startMove"

         @dragstart.prevent.stop
    >
      <section class="home-slider__slide">
        <div class="home-slider__info"
             :style="{
                '--title-and-btn-color': slide.titleAndBtnColor || null,
             }"
        >
          <h2 class="home-slider__title">
            <a :href="slide.url" :target="slide.url ? '_blank' : '_self'">
            {{ slide.title }}
            </a>
          </h2>
          <span class="home-slider__divider"></span>
          <p class="home-slider__text">
          {{ slide.content }}
          </p>
          <a class="home-slider__btn"
             :href="getFormattedUrl(slide.url?.Value)"
             :target="slide.url ? '_blank' : '_self'"
             v-if="slide.buttonText"
          >
          {{ slide.buttonText }}
          </a>
        </div>
        <div class="home-slider__img-w"
             :class="{
                move: isActive(index, isMove),
                active: isActive(index),
             }"
             :style="{
                '--img-border-color': slide.imgBorderColor || null,
             }">
          <img :src="slide.image.Value" alt="">
        </div>
      </section>
    </div>
    <div class="home-slider__arrows" v-if="slideList.length"
         :style="{
                '--arrow-color': slideList[currIndex].titleAndBtnColor || null,
         }"
    >
      <span class="home-slider__arrow left ui-btn" @click="leftClick">
        <SvgIcon class="home-slider__arrow-icon" :icon="icons['arrow-left']"/>
      </span>
      <span class="home-slider__arrow right ui-btn" @click="rightClick">
        <SvgIcon class="home-slider__arrow-icon" :icon="icons['arrow-right']"/>
      </span>
    </div>
    <ul class="home-slider__nav">
      <li class="home-slider__nav-item ui-btn"
          v-for="(slide, index) in slideList"
          :key="index"
          :class="{
              active: isActive(index),
           }"
          @click="setIndex(index, Math.sign(currIndex - index))"
      />
    </ul>
  </article>
</template>

<script lang="ts">
import {MainSliderItem} from "@shared/models/view/mainSliderItem";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import API from "@/http/API";
import {isMouse, isTouch} from "@/_shared/models/view/tools";
import {BODY_STATE, BodyStateHelper} from "@shared/helpers/view/bodyState.helper";
import {Component, Vue} from "~/tools/version-types";
import {LinkBuildHelper} from "@shared/helpers/links/linkBuild.helper";

@Component({
  name: 'MainSliderComponent',
  components: {SvgIcon}
})
export default class MainSliderComponent extends Vue {
  raw: Partial<MainSliderItem>[] = [];
  slideList: MainSliderItem[] = [];

  isMove: boolean = false;
  cssPros = {
    startX: 0,
    bannerTranslateX: 0
  }
  currIndex: number = 0;

  isNextLeft: boolean = false;
  nextIndex: number = 0;

  intervalID = -1;
  intervalSeconds = 8;

  getFormattedUrl(url: string | undefined) {
    return LinkBuildHelper.formatUrl(url);
  }

  endInterval() {
    clearInterval(this.intervalID);
  }

  startInterval() {
    this.endInterval();
    this.intervalID = setInterval(() => {
      this.moveOn(-1);
    }, this.intervalSeconds * 1000) as any;
  }

  beforeMount() {
    API.Contentful.HomeSlider.getSliders().then(list => {
      this.slideList = list;
      this.startInterval();
    });
  }

  leftClick() {
    this.moveOn(1);
  }

  rightClick() {
    this.moveOn(-1);
  }

  isHideLeft(index) {
    return index !== this.currIndex && !this.isNextLeft;
  }

  isHideRight(index) {
    return index !== this.currIndex && this.isNextLeft;
  }

  isShowLeft(index) {
    return index === this.currIndex && this.isNextLeft;
  }

  isShowRight(index) {
    return index === this.currIndex && !this.isNextLeft;
  }

  /// Проверяет равен ли переданный индекс текущему, если да, возвращает *значение второго параметра* или *1*.
  ///
  /// В случае провала всех проверок возвращает *0*
  isActive(index, val?) {
    if (typeof val !== 'undefined' && index === this.currIndex)
      return val;
    else return +(index === this.currIndex)
  }

  startMove(event: MouseEvent | TouchEvent) {
    this.endInterval();

    if (isMouse(event)) {
      this.cssPros.startX = event.clientX;
      addEventListener('mousemove', this.move);
      addEventListener('mouseup', this.endMove);
    } else if (isTouch(event)) {
      this.cssPros.startX = event.touches[0].clientX;
      addEventListener('touchmove', this.move);
      addEventListener('touchend', this.endMove);
    }

    this.isMove = true;
    BodyStateHelper.add(BODY_STATE.GRABBING);
  }

  move(event: MouseEvent | TouchEvent) {
    let currX;
    if (isMouse(event)) {
      currX = event.clientX;
    } else if (isTouch(event)) {
      currX = event.touches[0].clientX;
    }

    this.cssPros.bannerTranslateX = (currX - this.cssPros.startX) * 0.6;
  }

  endMove(event: MouseEvent | TouchEvent) {
    if (isMouse(event)) {
      removeEventListener('mousemove', this.move);
      removeEventListener('mouseup', this.endMove);
    } else if (isTouch(event)) {
      removeEventListener('touchmove', this.move);
      removeEventListener('touchend', this.endMove);
    }

    this.isMove = false;
    BodyStateHelper.remove(BODY_STATE.GRABBING);
    const sign = Math.sign(this.cssPros.bannerTranslateX)
    this.cssPros.bannerTranslateX = 0;
    this.moveOn(sign)
  }

  moveOn(sign: number) {
    let nextIndex = this.currIndex + sign * -1;
    if (nextIndex < 0)
      nextIndex = this.slideList.length - 1;
    else if (nextIndex >= this.slideList.length)
      nextIndex = 0;

    this.setIndex(nextIndex, sign);
  }

  setIndex(nextIndex: number, sign: number) {
    this.isNextLeft = sign > 0;
    this.currIndex = nextIndex;

    this.startInterval();
  }
}
</script>

<style lang="scss" scoped>
.home-slider {
  $local-anim-time: .5s;
  $anim-func: cubic-bezier(0.15, 0.69, 0.5, 1);

  position: relative;
  display: flex;
  justify-content: center;

  height: 600px;
  width: 100%;

  overflow: hidden;

  &::before {
    content: '';
    @include absoluteGrow();
    background-color: black;
    z-index: -2;
  }

  @include bigMobile() {
    height: 448px;
  }

  @mixin animConfig() {
    animation-duration: $local-anim-time;
    animation-fill-mode: forwards;
    animation-timing-function: $anim-func;
  }

  @keyframes hideLeft {
    100% {
      left: -100%;
    }
  }

  @keyframes hideRight {
    100% {
      left: 100%;
    }
  }

  @keyframes showLeft {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }

  @keyframes showRight {
    0% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }

  &__bg-w {
    display: flex;
    @include absoluteGrow();
    z-index: -1;

    pointer-events: none;
    user-select: none;
  }

  &__bg {
    --bg-color: black;
    position: absolute;
    left: 0;
    top: 0;
    //top: 50%;

    height: 100%;
    //min-width: 100%;
    width: 100%;

    background-color: Var(--bg-color);

    //transform: translateY(-50%);
    transition: $local-anim-time $anim-func;

    &.showLeft {
      animation-name: showLeft;
      @include animConfig();
    }

    &.showRight {
      animation-name: showRight;
      @include animConfig();
    }

    &.hideLeft {
      animation-name: hideLeft;
      @include animConfig();
      opacity: 0;
    }

    &.hideRight {
      animation-name: hideRight;
      @include animConfig();
      opacity: 0;
    }
  }

  &__slide-handler {
    --translateX: 0px;
    --angle: 0deg;
    --bg-color: black;

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    user-select: none;

    padding: 24px 16px 32px;

    transition: $local-anim-time $anim-func;
    opacity: 1;

    cursor: grab;

    &.active {
      z-index: 2;
    }

    &.move {
      transform: translateX(var(--translateX));
      transition: 0s;
      cursor: grabbing;
    }

    &.showLeft {
      animation-name: showLeft;
      @include animConfig();
    }

    &.showRight {
      animation-name: showRight;
      @include animConfig();
    }

    &.hideLeft {
      animation-name: hideLeft;
      @include animConfig();
      opacity: 0;
    }

    &.hideRight {
      animation-name: hideRight;
      @include animConfig();
      opacity: 0;
    }
  }

  &__slide {
    height: 100%;
    max-width: 860px;
    width: 100%;

    display: flex;
    align-items: center;

    @include bigMobile() {
      flex-direction: column;
    }
  }

  &__info {
    --title-and-btn-color: #{$color-main};

    position: relative;
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    z-index: 3;

    @include bigMobile() {
      height: 100%;
      width: 100%;

      align-items: center;
      justify-content: center;

      text-align: center;
    }
  }

  &__title {
    @include font40();
    color: var(--title-and-btn-color);
  }

  &__divider {
    width: max(50%, 150px);
    border: 1px solid $color-border-grey-lightest;

    @include bigMobile() {
      display: none;
    }
  }

  &__text {
    @include fontMid();
    color: white;
  }

  &__btn {
    @extend %ui-big-btn;

    color: #ffffff;

    min-width: 200px;
    background-color: var(--title-and-btn-color);

    &:hover {
      box-shadow: inset 0 0 400px 110px rgba(0, 0, 0, .2);
    }
  }

  &__img-w {
    --img-border-color: #{$color-main};
    position: relative;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;

    z-index: 2;
    pointer-events: none;
    overflow: hidden;

    @include bigMobile() {
      //display: none;

      position: absolute;
      right: 0;
      top: 0;
      width: 100%;

      transform: translateX(40%) scale(1.4);
      opacity: 0.07;
    }

    img {
      position: relative;
      height: 100%;
      object-fit: contain;
    }

    &::before {
      content: '';
      @include absoluteGrow(absolute, 6px);
      border: 1px solid var(--img-border-color);
      transition: Calc(#{$local-anim-time} / 2) $anim-func;

      opacity: 0;
      z-index: -2;
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: Calc(100% - 16px);
      padding-top: 120%;
      background-color: Var(--bg-color);

      opacity: 0;
      transition: $local-anim-time $anim-func;
      transform: translate(-50%, -50%) rotate(Calc(45deg - Var(--angle)));

      z-index: -1;
    }

    &.move {
      &::after {
        transition: 0s;
      }
    }

    &.active {
      &::before {
        transition: Calc(#{$local-anim-time} * 2) $anim-func;
      }

      &::before,
      &::after {
        opacity: 1;
      }
    }
  }

  &__arrows {
    --arrow-color: #{$color-main};

    @include absoluteGrow();
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px;

    pointer-events: none;
    user-select: none;

    z-index: 5;

    @include bigMobile() {
      display: none;
    }
  }

  &__arrow {
    height: 32px;
    width: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--arrow-color);

    border: 1px solid $color-border-grey-light;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);

    @include anim();

    pointer-events: auto;

    &:hover {
      border-color: currentColor;
    }

    &:active {
      color: $color-main-dark;
    }

    &.left {
    }

    &.right {
    }
  }

  &__arrow-icon {
    @include fixedHW(16px, 16px);
  }

  &__nav {
    position: absolute;
    left: 0;
    bottom: 16px;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    pointer-events: none;
    user-select: none;
    z-index: 6;
  }

  &__nav-item {
    @include add-click-area(4px);
    width: 10px;
    height: 10px;

    background-color: transparent;
    border: 1px solid white;

    @include anim();
    pointer-events: auto;

    transform: rotate(45deg);

    &.active {
      background-color: white;
      transform: rotate(45deg) scale(1.2);
    }
  }
}
</style>
