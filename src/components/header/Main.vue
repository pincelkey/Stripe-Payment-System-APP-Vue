<template>
  <header class="c-header w-100 py-3">
    <div class="container position-relative">
      <div class="d-flex justify-content-between">
        <p class="mb-0">cvalera@gmail.com</p>
        <ul class="ul-reset d-flex">
          <li>
            <router-link to="/market-place">
              Market Place
            </router-link>
          </li>
          <li>
            <router-link to="/panel">
              Panel
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['general']),
  },
  methods: {
    isAtiveMenuItem(item) {
      return item.slug.toLowerCase() === this.$route.name.toLowerCase();
    },
  },
};
</script>
