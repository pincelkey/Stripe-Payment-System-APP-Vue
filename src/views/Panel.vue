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
                    <li
                      v-for="(courseItem, cindex) of courses"
                      :key="`course-${cindex}`"
                      class="c-courses__item p-3"
                    >
                      Curso {{cindex + 1}}: {{courseItem.course}}
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 class="w-bold fs-21 mb-3">Mi suscripción</h2>
                  <div v-if="subscriptions.length" class="c-membership p-4">
                    <p class="fs-18 w-bold black">
                      <span>Estado:</span> <span class="success">Activo</span>
                    </p>
                    <p class="fs-18 w-bold black mb-0">
                      <span>Expiración:</span>
                      {{(new Date(subscriptions[0].current_period_end * 1000).toString())}}
                    </p>
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
      courses: [],
      subscriptions: [],
    };
  },
  mounted() {
    this.getCourses();
    this.getSubscriptions();
  },
  methods: {
    getCourses() {
      const stripePayment = window.localStorage.getItem('stripe_payment');
      const customerId = JSON.parse(stripePayment)?.customer;

      fetch(`${process.env.VUE_APP_API}/users/${customerId}/courses`)
        .then((res) => {
          if (res.status === 200 || res.status < 300) {
            return res.json();
          }

          throw res;
        })
        .then((response) => {
          if (response.status) {
            this.courses = response.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSubscriptions() {
      const stripePayment = window.localStorage.getItem('stripe_payment');
      const customerId = JSON.parse(stripePayment)?.customer;

      fetch(`${process.env.VUE_APP_API}/users/${customerId}/subscriptions`)
        .then((res) => {
          if (res.status === 200 || res.status < 300) {
            return res.json();
          }

          throw res;
        })
        .then((response) => {
          if (response.status) {
            this.subscriptions = response.data;

            console.log(this.subscriptions);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
