<template>
  <div class="text-gray-600 fd-container my-4 text-center">
    <p>粤ICP备17077927号-1</p>
    <p>Copyright ©{{ getYear }} All rights reserved | This website is made  by <a class="text-primary" href="https://fendy5.cn">Fendy</a></p>
  </div>
</template>

<script>
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
