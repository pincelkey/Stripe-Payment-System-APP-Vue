<template>
    <section class="c-section c-section--checkout">
        <div class="container">
            <section class="py-5 h-100">
                <h1 class="w-bold fs-24 text-center mb-4">
                  ¡Muchas gracias!
                </h1>

                <section class="c-thanks mb-4 text-center">
                  <Icon icon="bi:check-circle" />
                </section>

                <router-link
                  to="/panel"
                  class="c-button c-button--primary d-block text-center"
                >
                  Revisar mi panel
                </router-link>
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
