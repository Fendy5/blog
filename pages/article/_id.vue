<template>
  <div>
    <main class="app-main">
      <div class="blog-left-sidebar p-8">
        <div class="text-center">
          <img src="https://www.fendy5.cn/public/images/cover/20705011.jpg" alt="图片暂无法显示">
        </div>
        <h2 class="title">乘积最大子数组</h2>
        <ul class="flex text-gray-600 text-sm divide-x">
          <li class="flex-items-center pr-4">
            <svg-icon class="wh-25 mr-1" icon-class="sort" />
            <NuxtLink to="/">算法</NuxtLink>
          </li>
          <li class="flex-items-center pl-4">
            <svg-icon class="wh-25 mr-1" icon-class="time" />
            <span>2021-02-26 09:27:30</span>
          </li>
        </ul>
        <div>123</div>
      </div>
      <div class="blog-right-sidebar">
        <right-panel />
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import RightPanel from '@/components/RightPanel'

export default Vue.extend({
  name: 'Article',
  components: {
    RightPanel
  }
})

</script>

<style lang="scss" scoped>
@import "assets/scss/index";
.app-main {
  @apply mt-12;
  .blog-left-sidebar {
    box-shadow: $blog-box-shadow;
    & > * {
      @apply mb-4;
    }
    h2 {
      @apply font-bold text-2xl;
    }
  }
}
</style>
