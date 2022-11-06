<template>
    <section class="c-section c-section--panel">
        <div class="container">
            <section class="py-5 h-100">
                <h1 class="w-bold fs-24 text-center mb-4">
                  Mi Panel
                </h1>

                <section class="mb-4">
                  <h2 class="w-bold fs-21 mb-3">Mis cursos</h2>
                  <ul class="c-courses ul-reset">
                    <li class="c-courses__item p-3">
                      Curso 1: Comprar curso de WordPress Avanzado
                    </li>
                    <li class="c-courses__item p-3">
                      Curso 1: Comprar curso de WordPress Avanzado
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 class="w-bold fs-21 mb-3">Mi suscripción</h2>
                  <div class="c-membership p-4">
                      <p class="fs-18 w-bold black">
                        <span>Estado:</span> <span class="success">Activo</span>
                      </p>
                      <p class="fs-18 w-bold black mb-0">
                        <span>Expiración:</span> 12/11/12321
                      </p>
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
