<template>
  <div>
    <section class="banner contact-banner" ref="banner">
      <div class="banner__img-w">
        <picture>
          <source
            srcset="../assets/img/contactBannerMob.png"
            media="(max-width: 680px)"
          />
          <img
            class="banner__img"
            src="../assets/img/contactBanner.png"
            alt=""
          />
        </picture>
      </div>
      <div class="banner__content">
        <div class="banner__content-column">
          <h1 class="banner__title">{{_T('@Contacts')}}</h1>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="contact__w" ref="contentWrap">
        <aside class="contact__nav">
          <div class="contact__nav-line"></div>
          <ul class="contact__nav-list" ref="navList">
            <li class="contact__nav-list-item">
              <a href="#generalPhone" class="contact__nav-list-item">
                <div class="contact__nav-list-count">1</div>
                <p class="contact__nav-list-title">{{_T('@General number')}}</p>
              </a>
            </li>
            <li class="contact__nav-list-item">
              <a href="#sales" class="contact__nav-list-item">
                <div class="contact__nav-list-count">2</div>
                <p class="contact__nav-list-title">{{_T('@Sales department')}}</p>
              </a>
            </li>
            <li class="contact__nav-list-item">
              <a href="#shops" class="contact__nav-list-item">
                <div class="contact__nav-list-count">3</div>
                <p class="contact__nav-list-title">{{_T('@Shops')}}</p>
              </a>
            </li>
            <li class="contact__nav-list-item">
              <a href="#techSupport" class="contact__nav-list-item">
                <div class="contact__nav-list-count">4</div>
                <p class="contact__nav-list-title">{{_T('@Technical support')}}</p>
              </a>
            </li>
            <li class="contact__nav-list-item">
              <a href="#accounting" class="contact__nav-list-item">
                <div class="contact__nav-list-count">5</div>
                <p class="contact__nav-list-title">{{_T('@Accounting department')}}</p>
              </a>
            </li>
            <li class="contact__nav-list-item">
              <a href="#legal" class="contact__nav-list-item">
                <div class="contact__nav-list-count">6</div>
                <p class="contact__nav-list-title">
                  {{_T('@Legal address and contacts')}}
                </p>
              </a>
            </li>
          </ul>
        </aside>
        <div class="contact__main">
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="generalPhone"></span>
                {{_T('@General number')}}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-content">
              <h4 class="contact__block-subtitle">
                {{_T('@Multichannel hotline telephone')}}
              </h4>
              <a class="contact__block-tel" href="tel:0800309988">
                <img src="../assets/icons/phoneIcon.svg" alt="" />
                <span>0800309988</span>
              </a>
              <p class="contact__block-text">
                ({{_T('@Calls within Ukraine are free')}})
              </p>
            </div>
            <div class="contact__block-social">
              <div class="contact__block-subtitle">
                {{_T('@We always happy to answer questions')}}
              </div>
              <div class="contact__block-social-w">
                <a
                  class="contact__block-social-link"
                  href="https://www.instagram.com/logicpower_official/"
                >
                  <img src="../assets/icons/instaIcon.svg" alt="" />
                </a>
                <a
                  class="contact__block-social-link"
                  href="https://www.facebook.com/logicpower.official/"
                >
                  <img src="../assets/icons/fbIcon.svg" alt="" />
                </a>
                <a
                  class="contact__block-social-link"
                  href="https://www.youtube.com/channel/UCy8sx2LSb7clwULG-X-cCyQ"
                >
                  <img src="../assets/icons/ytIcon.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="sales"></span>
                {{_T('@Sales department')}}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <p class="contact__block-text">
              {{_T('@Calls within Ukraine are free')}}.
            </p>
            <div class="contact__block-employee-list">
              <div class="contact__block-employee-item">
                <div class="contact__block-employee-info">
                  <div class="contact__block-employee-photo">
                    <img src="../assets/icons/managerPhoto.png" alt="" />
                  </div>
                  <div class="contact__block-employee-data">
                    <p class="contact__block-employee-name">{{_T('@Anna Georgieva')}}</p>
                    <p class="contact__block-employee-position">
                      {{_T('@Retail Sales Manager')}}
                    </p>
                  </div>
                </div>
                <div class="contact__block-employee-contact">
                  <div class="contact__block-employee-comm-w">
                    <a
                      class="contact__block-employee-comm"
                      href="tel:+380674625740"
                    >
                      <img
                        class="contact__block-employee-comm-img"
                        src="../assets/icons/managerPhoneIcon.svg"
                        alt=""
                      />
                      <span>+38 (067) 462-57-40</span>
                    </a>
                    <div class="contact__block-employee-messengers">
                      <a
                        class="contact__block-employee-messenger"
                        href="viber://chat?number=12345678"
                      >
                        <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerViber.svg"
                          alt=""
                        />
                      </a>
                      <a
                        class="contact__block-employee-messenger"
                        href="https://t.me/<USERNAME>"
                      >
                        <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerTelegram.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <a
                    class="contact__block-employee-comm"
                    href="mailto:a.georgieva@logicfox.pro"
                  >
                    <img
                      class="contact__block-employee-comm-img"
                      src="../assets/icons/managerMailIcon.svg"
                      alt=""
                    />
                    <span>a.georgieva@logicfox.pro</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="shops"></span>
                {{_T('@Shops')}}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-description">
              <h4 class="contact__block-subtitle">{{_T('@Odesa')}}</h4>
              <p class="contact__block-info-text">
                {{_T('@Address')}}: {{_T('@Industrial market 7 km')}}
              </p>
              <p class="contact__block-info-text">
                {{_T('@Schedule Sat-Thu')}}
              </p>
            </div>
            <div class="contact__block-map-w">
              <iframe
                class="contact__block-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10996.652086968357!2d30.6352593!3d46.4454668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65fa4f41baab6944!2sLogicPower!5e0!3m2!1sru!2sua!4v1592986552060!5m2!1sru!2sua"
                frameborder="0"
                style="border: 0"
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div class="contact__block-line"></div>
            <div class="contact__block-description">
              <h4 class="contact__block-subtitle">{{_T('@Odesa')}}</h4>
              <p class="contact__block-info-text">
                {{_T('@Address')}}: {{_T('@Prom.rynok Starokonnyy')}}
              </p>
              <p class="contact__block-info-text">
                {{_T('@Schedule Mon-Sun')}}
              </p>
            </div>
            <div class="contact__block-map-w">
              <iframe
                class="contact__block-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2747.4966733400734!2d30.7112497!3d46.4784769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x510ed329a1dace3d!2sLogicPower!5e0!3m2!1sru!2sua!4v1592986700273!5m2!1sru!2sua"
                frameborder="0"
                style="border: 0"
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div class="contact__block-line"></div>
            <div class="contact__block-description">
              <h4 class="contact__block-subtitle">{{_T('@Odesa')}}</h4>
              <p class="contact__block-info-text">
                {{_T('@Address')}}: {{_T('@Nebesnoi Sotny avenue')}}
              </p>
              <p class="contact__block-info-text">
                {{_T('@Schedule Mon-Sun')}}
              </p>
            </div>
            <div class="contact__block-map-w">
              <iframe
                class="contact__block-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.88882708408215!2d30.710111198252406!3d46.40686231749278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633b0678e4b13%3A0x8c6f39b843a3b43a!2sLogicPower!5e0!3m2!1sru!2sua!4v1632305240162!5m2!1sru!2sua"
                frameborder="0"
                style="border: 0"
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="techSupport"></span>
                {{_T('@Technical support')}}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-description">
              <p class="contact__block-info-text">
                {{_T('@All products covered by warranty')}}
              </p>
              <p class="contact__block-info-text">
                {{_T('@Warranty period indicated in warranty card')}}
              </p>
            </div>
            <a class="contact__block-tel" href="tel:0800309988">
              <img src="../assets/icons/phoneIcon.svg" alt="" />
              <span>{{_T('@Call')}}</span>
            </a>
            <h4 class="contact__block-subtitle">{{_T('@Service centres')}}:</h4>
            <div class="contact__block-map-w">
              <iframe
                class="contact__block-map"
                src="https://www.google.com/maps/d/embed?mid=1tlN4jCbZdkwoAuvsD7P-0hJwBGwZVCp6&hl=ru"
                frameborder="0"
                style="border: 0"
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <p class="contact__block-info-text">
             {{_T('@Attach accompanying sheet')}}
            </p>
            <a
              class="contact__block-tel"
              href="https://logicpower.ua/flies/blank_servis.xlsx"
            >
              <img src="../assets/icons/dlArrowIcon.svg" alt="" />
              <span>{{_T('@Download file')}}</span>
            </a>
          </div>
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="accounting"></span>
                {{_T('@Accounting department')}}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <p class="contact__block-text">
              {{_T('@For all questions documentation')}}
            </p>
            <div class="contact__block-employee-list">
              <div class="contact__block-employee-item">
                <div class="contact__block-employee-info">
                  <div class="contact__block-employee-photo">
                    <img src="../assets/icons/managerPhoto.png" alt="" />
                  </div>
                  <div class="contact__block-employee-data">
                    <p class="contact__block-employee-name">{{_T('@Anna Georgieva')}}</p>
                    <p class="contact__block-employee-position">
                      {{_T('@Retail Sales Manager')}}
                    </p>
                  </div>
                </div>
                <div class="contact__block-employee-contact">
                  <div class="contact__block-employee-comm-w">
                    <a
                      class="contact__block-employee-comm"
                      href="tel:+380674625740"
                    >
                      <img
                        class="contact__block-employee-comm-img"
                        src="../assets/icons/managerPhoneIcon.svg"
                        alt=""
                      />
                      <span>+38 (067) 462-57-40</span>
                    </a>
                    <div class="contact__block-employee-messengers">
                      <a
                        class="contact__block-employee-messenger"
                        href="viber://chat?number=12345678"
                      >
                        <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerViber.svg"
                          alt=""
                        />
                      </a>
                      <a
                        class="contact__block-employee-messenger"
                        href="https://t.me/<USERNAME>"
                      >
                        <img
                          class="contact__block-employee-messenger-img"
                          src="@/assets/icons/contactsManagerTelegram.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <a
                    class="contact__block-employee-comm"
                    href="mailto:a.georgieva@logicfox.pro"
                  >
                    <img
                      class="contact__block-employee-comm-img"
                      src="../assets/icons/managerMailIcon.svg"
                      alt=""
                    />
                    <span>a.georgieva@logicfox.pro</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="legal"></span>
                {{_T('@Legal address and contacts')}}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-content">
              <h4 class="contact__block-subtitle">{{_T('@Legal address')}}:</h4>
              <p class="contact__block-info-text">
                {{_T('@Mala Arnautska 105/1')}}
              </p>
              <a
                class="contact__block-legal-contacts"
                href="mailto:info@logicpower.ua"
              >
                <img src="../assets/icons/managerMailIcon.svg" alt="" />
                <span>E-mail:</span>
                <span>info@logicpower.ua</span>
              </a>
              <a class="contact__block-legal-contacts" href="tel:0674886362">
                <img src="../assets/icons/managerPhoneIcon.svg" alt="" />
                <span>{{_T('@Telephone')}}:</span>
                <span>067 488 63 62</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";

@Options({})
export default class ContactComponent extends Vue {}
</script>

<style lang="scss" scoped>
.banner.contact-banner {
  margin-bottom: 0;
}

.contact {
  @extend %flex-column;
  justify-content: center;
  align-items: center;

  @extend %padding-wrp;

  &_block-info-text {
    @include fontUnify(18, 24);
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify;
    }
  }

  &__w {
    @extend %width-main;

    @include flex-container;
    gap: 24px;

    padding-bottom: 64px;
  }

  &__nav {
    --circ-r: 24px;

    position: relative;

    @include bigMobile {
      display: none;
    }
  }

  &__nav-line {
    position: absolute;
    left: var(--circ-r);
    transform: translateX(-50%);

    height: 100%;
    width: 8px;

    border-radius: 6px;

    background-color: white;
    z-index: -1;
  }

  &__nav-list {
    width: 100%;
    max-width: 230px;

    position: sticky;
    top: calc(16px + var(--height-header, 0px));

    @extend %flex-column;
    gap: 32px;

    padding: 16px 0;
  }

  &__nav-list-item {
    @include flex-container(row, flex-start, center);
    gap: 16px;

    cursor: pointer;
  }

  &__nav-list-count {
    min-width: calc(var(--circ-r) * 2);
    height: calc(var(--circ-r) * 2);

    @include flex-container(row, center, center);

    @include fontUnify(18, 24);
    text-align: center;
    color: $color-main;

    border-radius: 50%;
    background-color: white;

    &:hover {
      color: $color-main-dark;
    }
  }

  &__nav-list-title {
    @include fontUnify(20, 28);
    letter-spacing: 0.02em;

    color: $color-text-lighter;

    &:hover {
      color: $color-main-dark;
    }
  }

  &__main {
    @extend %flex-column;
    gap: 96px;

    padding-top: 80px;

    @include mobile {
      gap: 24px;
      padding-top: 56px;
    }
  }

  &__main-block {
    --local-pad: 32px;

    @extend %flex-column;
    gap: 36px;

    background: white;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    padding: var(--local-pad);

    @include mobile {
      gap: 16px;

      padding: 16px;
    }
  }

  &__block-title-w {
    @extend %flex-column;
    gap: 24px;

    @include mobile {
      gap: 16px;
    }
  }

  &__block-title {
    @include fontUnify(36, 46, 600);
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(20, 30, 600);
    }
  }

  &__block-line {
    width: 100%;
    height: 1px;

    background-color: $color-main;
  }

  &__block-content {
    @extend %flex-column;
    gap: 16px;

    @include mobile {
      align-items: center;
      margin-bottom: 24px;
    }

    & > .contact__block-subtitle {
      margin-bottom: 36px;

      @include mobile {
        margin-bottom: 0;
      }
    }
  }

  &__block-subtitle {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;

    @include mobile {
      @include fontUnify(16, 22);
      letter-spacing: 0.02em;
      text-align: center;
      text-transform: none;
    }
  }

  &__block-tel {
    max-width: 260px;

    @include flex-container(row, space-evenly, center);
    gap: 24px;

    border: 1px solid #8a8a8a;
    border-radius: 8px;

    padding: 8px 12px;

    transition: 0.2s ease;

    &:hover {
      border-color: $color-main-dark;

      & span {
        color: $color-main-dark;
      }
    }

    & span {
      @include fontUnify(24, 34);
      letter-spacing: 0.02em;

      color: $color-main;

      transition: 0.2s ease;

      @include mobile {
        @include fontUnify(18, 22, 500);
      }
    }
    @include mobile {
      max-width: 220px;
    }
  }

  &__block-text {
    @include fontUnify;
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify(12, 16);
      text-align: center;
    }
  }

  &__block-social {
    @include flex-container(column, center, flex-start);
    gap: 32px;

    @include mobile {
      align-items: center;
    }
  }

  &__block-social-w {
    @include flex-container(row, flex-start, center);
    gap: 32px;

    @include mobile {
      justify-content: center;
    }
  }

  &__block-social-link {
    cursor: pointer;
  }

  &__block-employee-list {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 72px;
  }

  &__block-employee-item {
    width: 100%;
    max-width: 336px;

    @extend %flex-column;
    gap: 24px;

    padding: 10px;

    transition: all 0.5s ease;

    @include mobile {
      border-bottom: 1px solid #f3f3f3;
    }

    &:hover {
      box-shadow: 0px 0px 24px rgb(0 0 0 / 30%);
      border-radius: 8px;

      @include mobile {
        box-shadow: none;
        border-radius: 0;
      }
    }
  }

  &__block-employee-info {
    @include flex-container(row, space-between, center);
    gap: 24px;

    @include mobile {
      gap: 16px;
    }
  }

  &__block-employee-photo {
    @include mobile {
      width: 64px;
    }
    & img {
      border-radius: 50%;
    }
  }

  &__block-employee-data {
    @extend %flex-column;
    gap: 2px;

    @include mobile {
      gap: 6px;
    }
  }

  &__block-employee-name {
    @include fontUnify(22, 26, 700);
    text-transform: capitalize;
    color: $color-main;

    @include mobile {
      @include fontUnify;
    }
  }

  &__block-employee-position {
    @include fontUnify(20, 24);
    font-style: italic;

    @include mobile {
      @include fontUnify(12, 16);
      font-style: normal;
    }
  }

  &__block-employee-contact {
    @extend %flex-column;
    gap: 16px;

    & > span {
      @include fontUnify(14, 16);
    }
  }

  &__block-employee-comm-w {
    @include flex-container(row, flex-start, center);
    gap: 16px;
  }

  &__block-employee-comm {
    @include flex-container(row, flex-start, center);
    gap: 32px;

    transition: 0.2s ease;

    &:hover {
      color: $color-main-dark;
    }

    @include mobile {
      gap: 24px;
    }
  }

  &__block-employee-comm-img {
  }

  &__block-employee-messengers {
    @include flex-container(row, flex-start, center);
    gap: 16px;
  }

  &__block-employee-messenger {
    transition: 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  &__block-description {
    @extend %flex-column;
    gap: 16px;

    & .contact__block-subtitle {
      text-align: left;
    }
  }

  &__block-map-w {
    @include flex-container(row, center, center);

    width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  &__block-map {
    width: 100%;
    height: 523px;
  }

  &__block-info-text {
    @include fontUnify(18, 24, 500);
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify;
    }
  }

  &__block-legal-contacts {
    max-width: 415px;
    width: 100%;

    @include flex-container(row, flex-start, center);
    gap: 16px;

    border: 1px solid #8a8a8a;
    border-radius: 8px;

    padding: 8px 12px;

    transition: 0.2s ease;

    &:hover {
      border-color: $color-main-dark;

      & span {
        color: $color-main-dark;
      }
    }

    & span {
      @include fontUnify(20, 28);
      letter-spacing: 0.02em;

      transition: 0.2s ease;

      @include mobile {
        @include fontUnify;
      }
    }
  }
}
</style>
