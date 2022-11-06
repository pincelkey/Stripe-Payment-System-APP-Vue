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
                    </button>
                </section>

                <section>
                    <h2 class="w-bold fs-21 mb-3">Membresías</h2>
                    <div class="c-card-membership p-4">
                        <h4 class="fs-21 w-bold black">Plan mensual</h4>
                        <p class="fs-18 w-bold pri-gray">10 USD / Mes</p>
                        <button class="c-button c-button--primary w-100">
                            Suscribirse
                        </button>
                    </div>
                </section>
            </section>
        </div>
    </section>
</template>

<script>
export default {
  methods: {
    createOrder(productType) {
      this.$router.push({
        path: `/checkout/${productType}`,
      });
    },
  },
};
</script>
