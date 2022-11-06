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

          <button class="c-button c-button--primary mt-4 w-100">Iniciar sesión</button>
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
        //
      }

      this.$router.push({
        path: '/market-place',
      });
    },
  },
};
</script>
