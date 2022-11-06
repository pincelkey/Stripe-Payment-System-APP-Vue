<template>
  <section class="c-section c-section--checkout">
    <div class="container">
      <section class="py-5 h-100">
        <h1 class="w-bold fs-24 text-center mb-4">
          Checkout
        </h1>

        <section class="mb-4">
          <div class="row">
            <div class="col-5">
              <figure>
                <img class="w-100 h-100" src="@/assets/img/example.jpg" alt="">
              </figure>
            </div>
            <div class="col-7">
              <h4 class="black w-bold fs-21">Comprar curso de WordPress Avanzado</h4>
              <p class="w-bold fs-18 pri-gray">20 USD</p>
            </div>
          </div>
        </section>

        <section>
          <div class="c-checkout p-4">
            <stripe-element-payment
              class="c-stripe-checkout"
              :class="{'error': isError}"
              ref="stripePaymentRef"
              :pk="publishableKey"
              :elements-options="elementsOptions"
              :confirm-params="confirmParams"
              @error="markError()"
              @element-focus="disableError()"
            />
            <button
              @click="pay()"
              class="c-button c-button--primary w-100 mt-4"
            >
              Comprar curso
              <Icon icon="eos-icons:loading"/>
            </button>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
import { StripeElementPayment } from '@vue-stripe/vue-stripe';

export default {
  data() {
    return {
      isError: false,
      order: 0,

      elementsOptions: {
        clientSecret: 'pi_3M0taSEl9RLg2yjv1nJaBxQF_secret_pSMFoGkHD4tgmqjgwiZnTkNrq',
        appearance: {
          variables: {
            colorPrimary: '#5600ec',
            colorText: '#222',
            colorDanger: '#ff1d1d',
            fontFamily: 'Josefin Sans, Ideal Sans, system-ui, sans-serif',
            spacingUnit: '5px',
            borderRadius: '5px',
          },
          rules: {
            '.Input': {
              border: '2px solid #ebebeb',
            },
            '.Error': {
              fontSize: '14px',
            },
            '.Input:focus': {
              border: '2px solid #5600ec',
              boxShadow: 'none',
            },
            '#stripe-payment-element-errors': {
              color: 'red',
            },
          },
        },
        locale: 'es-ES',
      },
      confirmParams: {
        return_url: `${process.env.VUE_APP_SITE}/checkout/order-received/${this.order}`,
      },
    };
  },
  components: {
    StripeElementPayment,
  },
  computed: {
    publishableKey() {
      return process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY;
    },
  },
  methods: {
    pay() {
      this.$refs.stripePaymentRef.submit();
    },

    markError() {
      this.isError = true;
    },
    disableError() {
      this.isError = false;
    },
  },
};
</script>
