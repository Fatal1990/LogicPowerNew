<template>
  <section class="warranty">
    <div class="warranty__w">
      <h1 class="warranty__title">{{ _T("@Warranty") }}</h1>
      <div class="warranty__info">
        <h2 class="warranty__info-title">{{ _T("@General information") }}</h2>
        <p class="warranty__info-title-text">
          {{ _T("@Confirmation of right to free warranty service") }}
        </p>
      </div>
      <div class="warranty__info-b">
        <h4 class="warranty__info-subtitle">
          {{ _T("@Warranties do not apply to") }}
        </h4>
        <ul class="warranty__info-subtitle-list">
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Natural wear") }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Accidental damage") }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Damage from natural disasters") }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Damage caused by careless use") }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Damage by emergency rise or fall in network") }}
          </li>
        </ul>
      </div>
      <div class="warranty__info-b">
        <h4 class="warranty__info-subtitle">
          {{ _T("@Denial of warranty service") }}
        </h4>
        <ul class="warranty__info-subtitle-list">
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Denial of warranty service p1") }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Denial of warranty service p2") }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Denial of warranty service p3") }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Denial of warranty service p4") }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Denial of warranty service p5") }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T("@Denial of warranty service p6") }}
          </li>
        </ul>
      </div>
      <div class="warranty__info">
        <h2 class="warranty__info-title">
          {{ _T("@Warranty for buyers from Odessa") }}
        </h2>
        <p class="warranty__info-title-text">
          {{ _T("@For convenience of buyers from Odessa") }}
        </p>
        <ul class="warranty__info-title-list">
          <li class="warranty__info-title-list-item">
            {{ _T("@For convenience of buyers from Odessa p1") }}
          </li>
          <li class="warranty__info-title-list-item">
            {{ _T("@For convenience of buyers from Odessa p2") }}
          </li>
        </ul>
        <p class="warranty__info-title-text">
          {{ _T("@Return product for warranty service") }}
        </p>
      </div>
      <div class="warranty__info">
        <h2 class="warranty__info-title">
          {{ _T("@Warranty for buyers from other regions") }}
        </h2>
        <p class="warranty__info-title-text">
          {{ _T("@To repair goods from other regions") }}
        </p>
        <ul class="warranty__info-title-list-num">
          <li class="warranty__info-title-list-item">
            {{ _T("@To repair goods from other regions p1") }}
          </li>
          <li class="warranty__info-title-list-item">
            {{ _T("@To repair goods from other regions p2") }}
          </li>
          <li class="warranty__info-title-list-item">
            {{ _T("@To repair goods from other regions p3") }}
          </li>
          <div class="warranty__info-b">
            <p class="warranty__info-title-text">
              {{ _T("@NP office address") }}
            </p>
            <p class="warranty__info-title-text">
              {{ _T("@Recipient NP") }}
            </p>
            <p class="warranty__info-title-text">
              {{ _T("@Return money delivery") }}
            </p>
            <p class="warranty__info-title-text">
              {{ _T("@Insurance value") }}
            </p>
            <p class="warranty__info-title-text">
              {{ _T("@Warranty delivery payment form") }}
            </p>
          </div>
          <li class="warranty__info-title-list-item">
            {{ _T("@To repair goods from other regions p4") }}
          </li>
        </ul>
      </div>
      <div class="warranty__note">
        <span class="warranty__important">*{{ _T("@Pay attention") }}!</span>
        {{ _T("@Sent for repair at expense of company") }}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({})
export default class WarrantyComponent extends Vue {}
</script>

<style lang="scss">
.warranty {
  @extend %flex-column;
  align-items: center;

  @extend %padding-wrp;
  padding-bottom: 80px;

  &__w {
    @extend %width-content;
    @extend %flex-column;
    gap: 48px;
  }

  &__title {
    @include fontUnify(28, 34, 700);
    text-align: center;

    @include mobile {
      @include fontUnify(24, 28, 700);
    }
  }

  &__info {
    @extend %flex-column;
    align-items: flex-start;
    gap: 24px;

    @include mobile {
      gap: 16px;
    }
  }

  &__info-title {
    @include fontUnify(26, 32, 700);

    @include mobile {
      @include fontUnify(22, 26, 700);
    }
  }

  &__info-title-text {
    @include fontUnify;
    letter-spacing: 0.02em;
  }

  &__info-title-list {
    @include fontUnify(18, 24);
    letter-spacing: 0.02em;

    list-style: inside;
  }

  &__info-title-list-num {
    @extend %flex-column;
    gap: 16px;

    list-style: inside;
    list-style-type: decimal;
  }

  &__info-title-list-item {
    @include fontUnify;
    letter-spacing: 0.02em;
  }

  &__info-b {
    @extend %flex-column;
    align-items: flex-start;
    gap: 16px;

    border: 1px solid #393d38;
    border-radius: 8px;

    padding: 16px;

    @include mobile {
      padding: 8px;
    }
  }

  &__info-subtitle {
    @include fontUnify(22, 26, 600);

    @include mobile {
      @include fontUnify(20, 24, 600);
    }
  }

  &__info-subtitle-list {
    @extend %flex-column;
    gap: 8px;

    list-style: inside;
  }

  &__info-subtitle-list-item {
    @include fontUnify;
    letter-spacing: 0.02em;
  }

  &__note {
    @include fontUnify;
    letter-spacing: 0.02em;

    border: 1px solid #393d38;
    border-radius: 8px;

    padding: 16px;

    @include mobile {
      padding: 8px;
    }
  }

  &__important {
    color: $color-main;
  }
}
</style>
