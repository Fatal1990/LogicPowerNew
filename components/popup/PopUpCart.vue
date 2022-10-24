<template>
  <UiPopup :id="popupService.names['cart-popup']" v-slot="{ parent }">
    <div class="cart popup">
      <div class="cart__head">
        <p class="cart__title">Корзина</p>
        <button class="cart__cancel" @click="parent.close">
          <SvgIcon class="cart__cancel-icon" :icon="icons['cross']" />
        </button>
      </div>
      <ul class="card__list">
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
        <li class="card__item">
          <div class="card__prod">
            <div class="card__img-w">
              <img
                class="card__img"
                src="https://logicpower.ua/storage/1911984/16157_1.png"
                alt=""
              />
            </div>
            <div class="card__info">
              <div class="card__main">
                <a href="" class="card__title"
                  >Аккумулятор LP LiFePО4 6V - 12 Ah</a
                >
                <div class="card__code">
                  Код:
                  <span>1324</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__counter">
                  <div class="card__counter-minus">
                    <img src="@/assets/icons/minus.svg" alt="" />
                  </div>
                  <input type="number" class="card__counter-input" value="1" />
                  <div class="card__counter-plus">
                    <img src="@/assets/icons/plus.svg" alt="" />
                  </div>
                </div>
                <!-- <div class="card__price"><span>20954</span> &#8372;</div> -->
                <div class="card__price-sale">
                  <div class="card__price-sale-old">
                    <span>20954</span> &#8372;
                  </div>
                  <div class="card__price-sale-new">
                    <span>20954</span> &#8372;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="card__del">
            <img src="@/assets/icons/trash.svg" alt="" />
          </button>
        </li>
      </ul>
      <div class="footer">
        <button class="footer__continue">Продолжить покупки</button>
        <div class="footer__receipt">
          <div class="footer__receipt-sum">
            <span class="footer__receipt-sum-label">Итого:</span>
            <span class="footer__receipt-sum-price">49 654 &#8372;</span>
          </div>
          <button class="footer__receipt-submit">Оформить заказ</button>
        </div>
      </div>
    </div>
  </UiPopup>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import UiPopup from "@shared/components/ui/UiPopup.vue";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  components: { SvgIcon, UiPopup },
})
export default class PopUpCartComponent extends Vue {}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.cart {
  position: relative;

  width: 100%;
  max-width: 1040px;
  max-height: 100%;
  min-height: 50%;

  @extend %flex-column;
  align-items: center;
  gap: 24px;

  padding-bottom: 0;

  border-radius: 8px;
  background-color: white;

  &__head {
    @include flex-container(row, space-between, center);
    width: 100%;

    padding: 16px;

    border-bottom: 1px solid $color-border-grey-light;

    @include mobile {
      padding-block: 8px;
    }
  }

  &__title {
    @include fontUnify(25, 35);
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify;
    }
  }

  &__cancel {
  }

  &__cancel-icon {
    &:hover {
      color: red;
    }
  }
}

.card {
  &__list {
    width: 100%;
    height: 100%;
    max-height: 100%;

    @extend %flex-column;

    padding-left: 16px;
    padding-right: 8px;
    margin-right: 8px;

    overflow: auto;

    @include mobile {
      padding-inline: 8px;
    }

    &::-webkit-scrollbar {
      width: 6px;
      height: 0;

      @include mobile {
        width: 4px;
      }
    }

    &::-webkit-scrollbar-track {
      background-color: $color-bg-grey;
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $color-main;
      border-radius: 100px;

      &:hover {
        background-color: $color-main-dark;
      }
    }
  }

  &__item {
    width: 100%;

    @include flex-container(row, space-between, center);
    gap: 24px;

    border-bottom: 1px solid $color-border-grey-light;

    padding-block: 8px;

    @include mobile {
      align-items: flex-start;
      gap: 8px;
    }
  }

  &__prod {
    width: 100%;

    @include flex-container(row, space-between, center);
    gap: 16px;

    @include mobile {
      gap: 8px;
    }
  }

  &__img-w {
    max-width: 135px;
    width: 100%;
    height: 135px;

    @include mobile {
      max-width: 64px;
      height: 64px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
  }

  &__info {
    max-width: 756px;
    width: 100%;

    @include flex-container;
    gap: 16px;

    @include mobile {
      flex-direction: column;
      gap: 8px;
    }
  }

  &__main {
    @extend %flex-column;
    gap: 4px;
  }

  &__title {
    @include fontUnify(16, 22, 600);
    letter-spacing: 0.02em;

    transition: 0.2s ease;

    @include mobile {
      @include fontUnify(14, 20, 500);
    }

    &:hover {
      color: $color-main;
    }
  }

  &__code {
    @include fontUnify(12, 16);
    letter-spacing: 0.02em;
  }

  &__footer {
    max-width: 256px;
    width: 100%;

    @include flex-container(row, space-between, center);
    flex-wrap: wrap-reverse;
    gap: 16px;

    @include mobile {
      max-width: 180px;

      flex-wrap: nowrap;
      gap: 8px;
    }
  }

  &__counter {
    max-width: 124px;
    width: 100%;

    @include flex-container(row, center, center);
    gap: 8px;

    border: 1px solid $color-border-grey-lighter;
    border-radius: 60px;

    padding: 8px 12px;

    @include mobile {
      max-width: 88px;

      gap: 4px;

      padding: 4px 8px;
    }
  }

  &__counter-minus {
    cursor: pointer;

    @include mobile {
      width: 16px;
    }
  }

  &__counter-input {
    width: 36px;

    @include fontUnify(14, 24);
    text-align: center;

    @include mobile {
      @include fontUnify(12, 16);
    }
  }

  &__counter-plus {
    cursor: pointer;

    @include mobile {
      width: 16px;
    }
  }

  &__price {
    @include fontUnify(18, 26, 700);
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify(14, 20, 700);
    }
  }

  &__price-sale {
    @extend %flex-column;
    align-items: flex-end;
    gap: 8px;

    @include mobile {
      gap: 4px;
    }
  }

  &__price-sale-old {
    @include fontUnify(14, 20);
    letter-spacing: 0.02em;
    text-decoration: line-through;

    @include mobile {
      @include fontUnify(12, 16);
    }
  }

  &__price-sale-new {
    @include fontUnify(18, 26, 700);
    letter-spacing: 0.02em;

    color: red;

    @include mobile {
      @include fontUnify(14, 20, 700);
    }
  }

  &__del {
    width: fit-content;
    height: fit-content;
  }
}

.footer {
  width: 100%;

  @include flex-container(row, space-between, flex-end);
  gap: 16px;

  margin-top: auto;

  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;

  background-color: white;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);

  padding: 16px;

  @include mobile {
    padding: 8px;
  }

  &__continue {
    @include flex-container(row, center, center);

    @include fontUnify(18, 24);
    letter-spacing: 0.02em;
    text-align: center;
    white-space: nowrap;
    color: #4490bb;

    border: 1px solid #4490bb;
    border-radius: 6px;

    padding: 8px 32px;

    transition: 0.2s ease;

    @include mobile {
      display: none;
    }

    &:hover {
      color: white;
      background-color: #4490bb;
    }
  }

  &__receipt {
    @include flex-container(row, flex-end, flex-end);
    flex-wrap: wrap;
    gap: 16px;

    @include mobile {
      width: 100%;

      flex-direction: column;
    }
  }

  &__receipt-sum {
    @include flex-container;
    gap: 16px;

    @include mobile {
      width: 100%;
    }
  }

  &__receipt-sum-label {
    @include fontUnify(20, 28);
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify;
    }
  }

  &__receipt-sum-price {
    @include fontUnify(20, 30, 700);

    @include mobile {
      @include fontUnify(16, 22, 700);
    }
  }

  &__receipt-submit {
    @include flex-container(row, center, center);

    @include fontUnify(18, 24);
    letter-spacing: 0.02em;
    text-align: center;
    white-space: nowrap;
    color: white;

    background-color: $color-main;
    border: 1px solid $color-main;
    border-radius: 6px;

    padding: 8px 32px;

    transition: 0.2s ease;

    @include mobile {
      width: 100%;
    }

    &:hover {
      background-color: $color-main-dark;
    }
  }
}
</style>
