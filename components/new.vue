// CheckoutForm.vue

import CashPaymentTypeForm.vue as CashPaymentTypeForm
import CashlessPaymentTypeForm.vue as CashlessPaymentType

const paymentTypes = {
    'cashless': {
        title: 'Безналичная оплата',
        component: CashlessPaymentType,
    }
}

const selectedPaymentType = 'cash';

const extra = null;

onExtraReady(extra) {
  this.extra = extra
}

onSubmit()
{
    this.api('createPayment', {
        paymentType: this.selectedPaymentType,
        extra: this.extra
    })
}

<Component :is="paymentTypes[selectedPaymentType].component" @extraReady=onExtraReady/>

<button @submit=onSubmit :disabled="null === extra" value=Оплатить/>

<div v-for="(paymentType, paymentTypeKey) in paymentTypes">
  <label for="foo">{{ paymentType.title }}</label>
  <input id="foo" type="radio"></input>
  <Component
    v-if="paymentTypeKey === selectedPaymentType"
    :is="paymentTypes[selectedPaymentType].component" @extraReady=onExtraReady
  />
</div>

// CashlessPaymentTypeForm.vue

<input type=text placeholder="Card Number" v-model=cardNumber/>

const cardNumber = '';

@Watch('cardNumber')
onCardNumberChanged(newValue, oldValue) {
    if (newValue.length === 16) {
        this.$emit('extraReady', {
            cardNumber: this.cardNumber
        })
    }
}