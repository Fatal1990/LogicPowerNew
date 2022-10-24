<template>
  <section class="delivery-payment">
    <div class="delivery-payment__w">
      <div class="delivery-payment__info">
        <h1 class="delivery-payment__title">Условия доставки и оплаты</h1>
        <div class="delivery-payment__info-block info-block-b">
          <h4 class="delivery-payment__info-block-title">
            Открыты точки самовывоза в г. Одесса по адресам:
          </h4>
          <ul class="delivery-payment__info-block-list">
            <li class="delivery-payment__info-block-list-item">
              Рынок "Староконный", ул. Раскидайловская 31/к, маг. ЗП-3, ЗП-4
            </li>
            <li class="delivery-payment__info-block-list-item">
              Рынок "Селянка", проспект Небесної Сотні, 14Б/12 (11).
            </li>
            <p class="delivery__text">Телефон для консультации 0800 208-977.</p>
          </ul>
        </div>
      </div>
      <div class="delivery">
        <div class="delivery__info">
          <h2 class="delivery__title">Доставка</h2>
          <p class="delivery__text">
            Доставка товаров, которые находится в разделе "Альтернативная
            энергетика" и "Электротранспорт" осуществляется за счет покупателя.
          </p>
          <p class="delivery__text">
            Доставка товара производятся по предоплате в размере не менее 20% от
            стоимости заказа. В случае, когда сумма заказа меньше 300 грн,
            предоплата производится в размере 100% от стоимости заказа. За
            дополнительной информацией обращайтесь к менеджеру, по номеру
            указанному на сайте.
          </p>
          <p class="delivery__text">
            Доставка товара производятся по предоплате в размере не менее 20% от
            стоимости заказа. В случае, когда сумма заказа меньше 300 грн,
            предоплата производится в размере 100% от стоимости заказа. За
            дополнительной информацией обращайтесь к менеджеру, по номеру
            указанному на сайте.
          </p>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">Самовывоз г.Одесса</h3>
          <p class="delivery__text">
            Свой заказ можно получить в любом из магазинов сети "LogicPower" в
            Одессе
          </p>
          <p class="delivery__text">
            График: согласно графику работы магазинов
          </p>
          <p class="delivery__text">
            Стоимость: <span class="delivery__text-free">бесплатно</span>
          </p>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">Доставка по Одессе</h3>
          <p class="delivery__text">
            Свой заказ можно получить в любом из магазинов сети "LogicPower" в
            Одессе
          </p>
          <p class="delivery__text">
            График: согласно графику работы магазинов
          </p>
        </div>
        <div class="delivery__pickup info-block-b">
          <h3 class="delivery-payment__info-block-title">График доставок:</h3>
          <div class="delivery__text-w">
            <p class="delivery__text">
              Пн-Пт: с 13:00 до 20:00 (при оформлении заказа до 14.00 - доставка
              в тот же день, после - на следующий)*
            </p>
            <p class="delivery__text">
              Сб: с 13:00 до 19:00 (при оформлении заказа до 12.00 - доставка в
              тот же день, после - в понедельник)*
            </p>
            <p class="delivery__text">
              Вс: доставка не осуществляется (доставка в понедельник)*
            </p>
          </div>
          <p class="delivery__text">*при условии наличия товара на складе</p>
        </div>
        <div class="delivery__pickup info-block-b">
          <h3 class="delivery-payment__info-block-title">Стоимость:</h3>
          <ul class="delivery-payment__info-block-list">
            <li class="delivery-payment__info-block-list-item">
              бесплатно при сумме заказа от 2000 грн**
            </li>
            <li class="delivery-payment__info-block-list-item">
              от 60 грн, при сумме заказа до 2000 грн**
            </li>
          </ul>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">Доставка в почтовое отделение</h3>
          <p class="delivery__text">
            Забрать свой заказ можно в любом из отделений перевозчиков «Нова
            Пошта», «Укрпошта», «Justin» или «Delivery».
          </p>
        </div>
        <div class="delivery__post">
          <div class="delivery__post-img-col">
            <!-- <div class="delivery__post-img-w">
              <img class="delivery__post-img" src="../assets/img/novaPoshta.png" alt="" />
            </div>
            <div class="delivery__post-img-w">
              <img class="delivery__post-img" src="../assets/img/ukrPoshta.png" alt="" />
            </div>
          </div>
          <div class="delivery__post-img-col">
            <div class="delivery__post-img-w">
              <img class="delivery__post-img" src="../assets/img/justin.png" alt="" />
            </div>
            <div class="delivery__post-img-w">
              <img class="delivery__post-img" src="../assets/img/delivery.png" alt="" />
            </div>
          </div> -->
            <img
              class="delivery__post-img"
              src="../assets/img/novaPoshta.png"
              alt=""
            />
            <img
              class="delivery__post-img"
              src="../assets/img/ukrPoshta.png"
              alt=""
            />
            <img
              class="delivery__post-img"
              src="../assets/img/justin.png"
              alt=""
            />
            <img
              class="delivery__post-img"
              src="../assets/img/delivery.png"
              alt=""
            />
          </div>
        </div>
        <div class="delivery__pickup">
          <p class="delivery__text">
            <span class="delivery__text-attention">Внимание!</span> Доставка
            литиевых аккумуляторных батарей, не осуществляется Новой почтой.
          </p>
          <p class="delivery__text">
            <span class="delivery__text-attention">Внимание!</span> При
            получении заказа курьерскими службами обязательно проверяйте наличие
            всего товара в посылке, его внешний вид и комплектацию. В случае
            повреждения товара, или неполной комплектации необходимо отказаться
            от получения всего заказа и его оплаты, а так же сообщить нам об
            этом по телефону Горячей линии 0800-30-15-85. Получив заказ у
            перевозчика, Вы соглашаетесь с его внешним состоянием или
            комплектацией.
          </p>
          <p class="delivery__text">
            График: по графику отделения перевозчика.
          </p>
        </div>
        <div class="delivery__pickup info-block-b">
          <h3 class="delivery-payment__info-block-title">Стоимость:</h3>
          <ul class="delivery-payment__info-block-list">
            <li class="delivery-payment__info-block-list-item">
              «Нова Пошта» - согласно тарифу перевозчика,
              <span class="delivery__text-free">бесплатно</span> при сумме
              заказа от 1500 грн
            </li>
            <li class="delivery-payment__info-block-list-item">
              «Укрпошта» - согласно тарифу перевозчика,
              <span class="delivery__text-free">бесплатно</span> при сумме
              заказа от 500 грн
            </li>
            <li class="delivery-payment__info-block-list-item">
              «Justin» - согласно тарифу перевозчика.
            </li>
            <li class="delivery-payment__info-block-list-item">
              «Delivery» - согласно тарифу перевозчика.
              <span class="delivery__text-free">бесплатно</span> при сумме
              заказа от 500 грн
            </li>
          </ul>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">Доставка в почтовое отделение</h3>
          <div class="delivery__pickup info-block-b">
            <ul class="delivery-payment__info-block-list">
              <li class="delivery-payment__info-block-list-item">
                Срок доставки: 2-7 дня
              </li>
              <li class="delivery-payment__info-block-list-item">
                Стоимость доставки: 80 грн.
              </li>
            </ul>
          </div>
        </div>
        <div class="delivery__pickup">
          <p class="delivery__text">
            Если у Вас нет времени на то, что бы получить Ваш заказ на складе
            Новой Почты или в отделении Укрпочты, Вы можете воспользоваться
            услугами Курьера Новой Почты - Доставка в кратчайшие сроки - Оплата
            при получении.
          </p>
          <p class="delivery__text">
            Как получить посылку от курьера? После того, как посылка с Вашим
            заказом прибудет к Вам в город, курьер свяжется с Вами и уточнит,
            где и когда Вам удобно будет получить посылку. Вы предъявляете
            курьеру свои документы (водительское удостоверение или паспорт) и
            получаете посылку.
          </p>
        </div>
      </div>
      <div class="payment">
        <h2 class="delivery__title">Оплата</h2>
        <p class="delivery__text">
          При заказе на сумму менее 300грн, отправка осуществляется только при
          100% предоплате.
        </p>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">Наличными</h3>
          <p class="delivery__text">
            Оплатить заказ наличными средствами можно при получении заказа в
            магазинах сети «LogicPower».
          </p>
          <p class="delivery__text">
            Комиссия: <span class="delivery__text-free">отсутствует</span>
          </p>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">Наложенным платежом</h3>
          <p class="delivery__text">
            «Наложенный платеж» - услуга перевозчика, воспользовавшись которой
            Вы можете оплатить товар при получении заказа в отделении
            перевозчика. Отправка заказа с услугой «Наложенный платеж» возможна
            только перевозчиками «Нова Пошта» или «Укрпошта». Внимание! Если
            сумма заказа составляет менее чем 200 грн. Вы не можете
            воспользоваться оплатой "Наложенный платеж". Комиссия: «Нова Пошта»,
            «Укрпошта»
          </p>
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">Онлайн Visa/Mastercard</h3>
          <p class="delivery__text">
            Современные способы оплаты онлайн (через смартфон или ПК) с помощью
            карт Visa/Mastercard и популярных платежных сервисов:
          </p>
          <ul class="delivery-payment__info-block-list">
            <li class="delivery-payment__info-block-list-item">
              при оформлении заказа на сайте, выбрав соответствующий способ
              оплаты
            </li>
            <li class="delivery-payment__info-block-list-item">
              при получении заказа в магазине (ссылка или код для оплаты будет
              сформирован менеджером при выдаче заказа)
            </li>
          </ul>
        </div>
        <div class="payment__icon-w">
          <img
            class="payment__icon"
            src="../assets/icons/visaIcon.png"
            alt=""
          />
          <img
            class="payment__icon"
            src="../assets/icons/mastercardIcon.png"
            alt=""
          />
          <img
            class="payment__icon"
            src="../assets/icons/applePayIcon.png"
            alt=""
          />
          <img
            class="payment__icon"
            src="../assets/icons/googlePayIcon.png"
            alt=""
          />
          <img class="payment__icon" src="../assets/icons/pbIcon.png" alt="" />
        </div>
        <div class="delivery__pickup">
          <h3 class="delivery__pickup-title">Безналичным расчетом</h3>
          <ol class="payment__info-block-list">
            <li>
              После получения заказа Вам выставляется счет для оплаты,
              актуальный на протяжении двух банковских дней. Срок поступления
              денег на счет, в зависимости от банка, может занять до 3 рабочих
              дней.
            </li>
            <li>
              После поступления суммы на счет, с Вами свяжется менеджер для
              уточнения деталей получения или доставки заказа.Все необходимые
              документы (оригинал счета и товарная накладная) будут доставлены
              вместе с заказом.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue } from "~/tools/version-types";

@Component({})
export default class DeliveryComponent extends Vue {}
</script>

<style lang="scss">
.delivery-payment {
  @extend %flex-column;
  align-items: center;

  @extend %padding-wrp;
  padding-bottom: 80px;

  &__w {
    @extend %flex-column;
    @extend %width-content;
    gap: 40px;
  }

  &__info {
    @extend %flex-column;
    align-items: center;
    gap: 56px;
  }

  &__title {
    @include fontUnify(42, 50, 700);
    text-align: center;

    @include mobile {
      @include fontUnify(24, 34, 700);
    }
  }

  &__info-block {
    @extend %flex-column;
    align-items: flex-start;
    gap: 16px;
  }

  &__info-block-title {
    @include fontUnify(24, 34);
    letter-spacing: 0.02em;
  }

  &__info-block-list {
    @include fontUnify(18, 24);
    letter-spacing: 0.02em;
    list-style: inside;
  }

  &__info-block-list-item {
  }
}

.info-block-b {
  @extend %width-content;
  padding: 32px;
  border: 1px solid #393d38;
  border-radius: 8px;
}

.delivery {
  @extend %flex-column;
  align-content: center;
  gap: 32px;

  &__text {
    @include fontUnify(18, 24);
    letter-spacing: 0.02em;

    @include mobile {
      @include fontUnify;
    }
  }

  &__text-attention {
    color: #e25750;
  }

  &__info {
    @extend %flex-column;
    align-items: flex-start;
    gap: 16px;
  }

  &__title {
    @include fontUnify(32, 40, 600);
    letter-spacing: 0.02em;
    margin-bottom: 32px;

    @include mobile {
      @include fontUnify(24, 34);
      margin-bottom: 0;
    }
  }

  &__pickup {
    @extend %flex-column;
    align-items: flex-start;
    gap: 16px;
  }

  &__pickup-title {
    @include fontUnify(24, 32);

    @include mobile {
      @include fontUnify(20, 28);
    }
  }

  &__text-free {
    color: #159822;
  }

  &__post {
    display: flex;
    justify-content: space-between;

    @include mobile {
      justify-content: center;
    }
  }

  &__post-img {
  }

  &__post-img-col {
    // @extend %flex-column;
    // justify-content: space-between;
    // gap: 64px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 36px 108px;

    @include mobile {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__pickup-text {
  }
}

.payment {
  @extend %flex-column;
  align-content: center;
  gap: 32px;

  &__icon-w {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;

    @include mobile {
      justify-content: center;
      gap: 36px 80px;
    }
  }

  &__info-block-list {
    @include fontUnify(18, 24);
    letter-spacing: 0.02em;
    list-style: decimal;
    padding-left: 24px;
  }
}
</style>
