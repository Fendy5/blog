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
          <li v-for="i in categoryList" :key="i.id"><NuxtLink :to="{path: `/category${i.path}`, query:{ t: i.name }}">{{ i.name }}({{ i.articles_count }})</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="panel-card divide-y divide-gray-300">
      <div class="pc-title">标签</div>
      <div class="pc-content">
        <ul class="tag">
          <li v-for="i in tagList" :key="i.id" class="inline-block">
            <NuxtLink class="tag-item" :to="{path: `/tag/${i.name}`}">{{ i.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="panel-card divide-y divide-gray-300">
      <div class="pc-title">最近更新</div>
      <div class="pc-content">
        <ul>
          <li v-for="i in recentList" :key="i.article_id" class="flex">
            <div class="cover-thumbnail">
              <img :src="i.cover" alt="">
            </div>
            <div class="summary">
              <RouterLink :to="`/s/${i.article_id}`">
                <!--                <span class="ellipsis">{{ i.title }}</span>-->
                <p class="truncate font-bold w-40">{{ i.title }}</p>
              </RouterLink>
              <p class="text-secondary">{{ i.created_at }}</p>
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
import { dataFormat } from '~/utils'

export default Vue.extend({
  name: 'RightPanel',
  filters: {
    dataFormat
  },
  data () {
    return {
      recentList: [],
      categoryList: [],
      tagList: []
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
</style>
