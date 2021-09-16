<template>
  <div class="right-panel">
    <div class="panel-card divide-y divide-gray-300">
      <div class="pc-title">座右铭</div>
      <div class="pc-content">
        <p>凭借人类天生的发明力、创造力以及不畏艰难的意志力，在我有生之年，我们定将在这所有领域做出了不起的成就。</p>
      </div>
    </div>
    <div class="panel-card divide-y divide-gray-300">
      <div class="pc-title">笔记分类</div>
      <div class="pc-content">
        <ul class="divide-y divide-gray-300">
          <li v-for="i in categoryList" :key="i.id"><NuxtLink :title="i.title" :to="`/category${i.path}`">{{ i.name }}({{ i.articles_count }})</NuxtLink></li>
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
          <li v-for="i in recentList" :key="i.article_id" class="grid-cols-1_2 gap-x-4">
            <div class="cover-thumbnail">
              <img :src="i.cover" alt="">
            </div>
            <div class="summary">
              <RouterLink :to="`/s/${i.article_id}`">
                <p class="truncate w-40">{{ i.title }}</p>
              </RouterLink>
              <p>{{ i.updated_at }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getTagListApi } from '~/api/tag'
import { getCategoryListApi } from '~/api/category'
import { getArticleListApi } from '~/api/article'

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
      categoryList: [],
      tagList: [
        { id: 1, name: 'CSS4' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'CSS' },
        { id: 4, name: 'CSS' },
        { id: 5, name: 'CSS' }
      ]
    }
  },
  created () {
    getArticleListApi({ rowsPerPage: 5, page: 1 }).then((value) => { this.recentList = value.data.data })
    getTagListApi({ isQueue: true }).then((value) => {
      this.tagList = value.data
    })
    getCategoryListApi({ isCategory: true }).then((value) => {
      this.categoryList = value.data
    })
  }
})
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.right-panel {
  .panel-card {
    @apply py-8;
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
        //@apply grid grid-cols-3;
        li {
          @apply mr-2;
          a {
            @apply rounded;
          }
        }
        .tag-item {
          @apply px-2 py-1 border-purple-300 border;
        }
      }
    }
  }
}
</style>
