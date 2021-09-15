<template>
  <div :class="{'mt-24': $route.path!=='/'}">
    <fd-header />
    <Banner v-show="$route.path==='/'" />
    <main class="app-main">
      <Nuxt />
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
</style>
