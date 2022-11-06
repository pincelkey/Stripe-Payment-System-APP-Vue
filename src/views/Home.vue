<template>
  <section class="c-section c-section--home">
    <div class="container">
      <section class="py-5 h-100 text-center">
        <h1 class="w-bold fs-24">
          Iniciar sesión
        </h1>
      </section>

      <section class="p-4">
        <form @submit.prevent="login">
          <div class="c-form-group mb-4" :class="{ 'c-form-group--error': $v.email.$error }">
            <label class="c-form-group__label">Correo electrónico</label>
            <input class="c-form-group__input" v-model.trim="$v.email.$model"/>

            <div class="c-form-group__error" v-if="!$v.email.required">Field is required</div>
            <div class="c-form-group__error" v-if="!$v.email.alpha">
              No es un email
            </div>
          </div>

          <button class="c-button c-button--primary mt-4 w-100">
            Iniciar sesión
            <Icon v-if="isLoading" icon="eos-icons:loading"/>
          </button>
        </form>
      </section>
    </div>
  </section>
</template>

<script>
import {
  required,
  helpers,
} from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      email: '',

      isLoading: false,
    };
  },
  validations: {
    email: {
      required,
      alpha: helpers.regex('alpha', /.+@.+\..+/),
    },
  },
  methods: {
    login() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.isLoading = true;

        fetch(`${process.env.VUE_APP_API}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
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
              window.localStorage.setItem('stripe_payment', JSON.stringify({
                customer: response.data.id,
              }));

              this.$router.push({
                path: '/market-place',
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
