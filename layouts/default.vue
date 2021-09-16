<template>
  <div :class="{'mt-24': $route.path!=='/'}">
    <fd-header />
    <Banner v-show="$route.path==='/'" />
    <main class="app-main">
      <transition name="slide-fade">
        <Nuxt />
      </transition>
      <right-panel />
    </main>
    <fd-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FdHeader from '@/layouts/FdHeader.vue'
import FdFooter from '@/layouts/FdFooter.vue'
import RightPanel from '~/components/RightPanel.vue'
import Banner from '~/components/Banner.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    Banner,
    FdHeader,
    RightPanel,
    FdFooter
  }
})
</script>

<style lang="scss">
@import "../assets/scss/index";
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
