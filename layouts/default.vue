<template>
  <div>
    <fd-header />
    <Nuxt />
    <fd-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FdHeader from '@/layouts/FdHeader.vue'
import FdFooter from '@/layouts/FdFooter.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    FdHeader,
    FdFooter
  }
})
</script>

<style lang="scss">
</style>
