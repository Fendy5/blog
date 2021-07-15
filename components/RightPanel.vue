<template>
  <div class="right-panel">
    <div class="panel-card divide-y divide-gray-300">
      <div class="pc-title">座右铭</div>
      <div class="pc-content">
        <p>凭借人类天生的发明力、创造力以及不畏艰难的意志力，在我有生之年，我们定将在这所有领域做出了不起的成就。</p>
      </div>
    </div>
    <div class="panel-card divide-y divide-gray-300">
      <div class="pc-title">分类</div>
      <div class="pc-content">
        <ul class="divide-y divide-gray-300">
          <li><NuxtLink to="/vue">Vue(23)</NuxtLink></li>
          <li><NuxtLink to="/vue">PHP(2)</NuxtLink></li>
          <li><NuxtLink to="/vue">Nuxt(5)</NuxtLink></li>
          <li><NuxtLink to="/vue">JavaScript(9)</NuxtLink></li>
          <li><NuxtLink to="/vue">CSS(0)</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="panel-card divide-y divide-gray-300">
      <div class="pc-title">标签</div>
      <div class="pc-content">
        <ul class="tag">
          <li v-for="i in tagList" :key="i.id" class="inline-block">
            <NuxtLink class="tag-item" to="/">{{ i.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="panel-card divide-y divide-gray-300">
      <div class="pc-title">最近更新</div>
      <div class="pc-content">
        <ul>
          <li v-for="i in recentList" :key="i.id" class="grid-cols-1_2 gap-x-4">
            <div class="cover-thumbnail">
              <img :src="i.cover" alt="">
            </div>
            <div class="summary">
              <RouterLink to="/">
                <p class="truncate w-40">{{ i.title }}</p>
              </RouterLink>
              <p>{{ i.createTime }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'RightPanel',
  data () {
    return {
      recentList: [
        { id: 1, cover: 'https://image.fendy5.cn/s/pOQRrO72iftvEYI9_0.25.gif', title: '乘积最大子数组乘积最大子数组乘积最大子数组乘积最大', createTime: '2021-02-26 09:27:30' },
        { id: 2, cover: 'https://image.fendy5.cn/s/pOQRrO72iftvEYI9_0.25.gif', title: '乘积最大子数组乘积最大子数组乘积最大子数组乘积最大', createTime: '2021-02-26 09:27:30' },
        { id: 3, cover: 'https://image.fendy5.cn/s/pOQRrO72iftvEYI9_0.25.gif', title: '乘积最大子数组乘积最大子数组乘积最大子数组乘积最大', createTime: '2021-02-26 09:27:30' },
        { id: 4, cover: 'https://image.fendy5.cn/s/pOQRrO72iftvEYI9_0.25.gif', title: '乘积最大子数组乘积最大子数组乘积最大子数组乘积最大', createTime: '2021-02-26 09:27:30' },
        { id: 5, cover: 'https://image.fendy5.cn/s/pOQRrO72iftvEYI9_0.25.gif', title: '乘积最大子数组乘积最大子数组乘积最大子数组乘积最大', createTime: '2021-02-26 09:27:30' }
      ],
      tagList: [
        { id: 1, name: 'CSS' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'CSS' },
        { id: 4, name: 'CSS' },
        { id: 5, name: 'CSS' }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.right-panel {
  .panel-card {
    @apply py-8 mb-8;
    box-shadow: $blog-box-shadow;
    .pc-title {
      @apply text-xl px-6 pb-4;
    }
    .pc-content {
      @apply px-6 pt-4 text-gray-700;
      .cover-thumbnail {
        @apply w-full h-full;
      }
      ul {
        li {
          @apply py-3;
          .summary {
            @apply flex justify-between flex-col;
          }
        }
      }
      .tag {
        @apply grid grid-cols-3;
        .tag-item {
          @apply px-2 py-1 border-purple-300 border;
        }
      }
    }
  }
}
</style>
