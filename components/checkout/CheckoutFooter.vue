<template>
  <footer class="footer">
    <div class="footer__w">
      <div class="callcenter">
        <a class="callcenter__link" href="0800201817">0 800 201-817</a>
        <div class="callcenter__schedule">
          <span class="callcenter__schedule-caption"
            >График работы CALL-центра</span
          >
          <p class="callcenter__schedule-time">Пн - Пт 09:00 - 20:00</p>
          <p class="callcenter__schedule-time">Сб - Вс 10:00 - 18:00</p>
        </div>
      </div>
      <div class="copyright">
        <div class="copyright__payment">
          <img
            class="copyright__payment-icon"
            src="@/assets/icons/footerMasterCardIcon.svg"
            alt=""
          />
          <img
            class="copyright__payment-icon"
            src="@/assets/icons/footerVisaIcon.svg"
            alt=""
          />
        </div>
        <div class="copyright__w">
          <SvgIcon class="copyright__logo" :icon="icons['logo-short']" />
          <p class="copyright__caption">&#169; 2022, Все права защищены.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  name: "CheckoutFooterComponent",
  components: {
    SvgIcon,
  },
})
export default class CheckoutFooterComponent extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;

  @include flex-container(row, center, center);

  background-color: #393d38;

  padding: 16px;

  @include mobile {
    padding-block: 24px;
  }

  &__w {
    @include flex-container(row, space-between, center);
    gap: 32px;

    @extend %width-main;

    @include mobile {
      flex-direction: column;
    }
  }
}
.callcenter {
  @include flex-container(column, space-between, center);
  gap: 8px;

  &__link {
    @include fontUnify;
    color: white;

    transition: 0.2s ease;

    @include mobile {
      @include fontUnify(14, 18);
    }

    &:hover {
      color: $color-main;
    }
  }

  &__schedule {
    @include flex-container(column, space-between, center);
    gap: 8px;
  }

  &__schedule-caption {
    @include fontUnify(12, 16);
    letter-spacing: 0.02em;

    color: #8a8a8a;
  }

  &__schedule-time {
    @include fontUnify(16, 22, 700);
    letter-spacing: 0.02em;

    color: white;
  }
}
.copyright {
  @include flex-container(row, space-between, center);
  gap: 32px;

  @include mobile {
    flex-direction: column;
  }

  &__payment {
    @include flex-container(row, space-between, center);
  }

  &__payment-icon {
  }

  &__w {
    width: 100%;
    max-width: 120px;

    @include flex-container(column, space-between, center);
    gap: 16px;
  }

  &__logo {
    @include fixedHW(64px, 64px);
    color: white;
  }

  &__caption {
    @include fontUnify(12, 16);
    letter-spacing: 0.02em;
    text-align: center;

    color: #8a8a8a;
  }
}
</style>
