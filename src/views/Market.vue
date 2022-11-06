<template>
    <section class="c-section c-section--market-place">
        <div class="container">
            <section class="py-5 h-100">
                <h1 class="w-bold fs-24 text-center mb-4">
                    Market Place
                </h1>

                <section class="mb-4">
                    <h2 class="w-bold fs-21 mb-3">Cursos</h2>
                    <button
                      @click="createOrder('course')"
                      class="c-button c-button--primary w-100"
                    >
                      Comprar curso de WordPress Avanzado / 20 USD
                      <Icon v-if="isLoading" icon="eos-icons:loading"/>
                    </button>
                </section>

                <section>
                    <h2 class="w-bold fs-21 mb-3">Membresías</h2>
                    <div class="c-card-membership p-4">
                        <h4 class="fs-21 w-bold black">Plan mensual</h4>
                        <p class="fs-18 w-bold pri-gray">10 USD / Mes</p>
                        <button
                          @click="createOrder('subscription')"
                          class="c-button c-button--primary w-100"
                        >
                          Suscribirse
                          <Icon v-if="isLoading" icon="eos-icons:loading"/>
                        </button>
                    </div>
                </section>
            </section>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    createOrder(productType) {
      this.isLoading = true;

      const stripePayment = window.localStorage.getItem('stripe_payment');
      const customerId = JSON.parse(stripePayment)?.customer;

      fetch(`${process.env.VUE_APP_API}/orders/${productType}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_id: customerId,
        }),
      })
        .then((res) => {
          if (res.status === 200 || res.status < 300) {
            return res.json();
          }

          throw res;
        })
        .then((response) => {
          if (response.status) {
            this.$router.push({
              path: `/checkout/${productType}`,
              query: {
                cs: response.data,
              },
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
