<template>
  <section>
    <Header></Header>

    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

import Header from './components/header/Main.vue';

export default {
  data() {
    return {
      isActiveMenu: false,
    };
  },
  components: {
    Header,
  },
  created() {
    this.getGeneralData();
  },
  methods: {
    ...mapActions(['getGeneralData']),
  },
};
</script>
