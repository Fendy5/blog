<template>
  <div class="text-gray-600 fd-container my-4 text-center">
    <p>
      <a href="https://beian.miit.gov.cn/">粤ICP备17077927号-1</a>
    </p>
    <p>Copyright ©{{ getYear }} All rights reserved | This website is made  by <a class="text-primary" href="https://fendy5.cn">Fendy</a></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    getYear () {
      const date = new Date()
      return date.getFullYear()
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
