<template>
  <div>
    <Banner />
    <main class="app-main">
      <div class="blog-left-sidebar">
        <div class="blog-list">
          <div v-for="i in articleList" :key="i.article_id" class="blog-item">
            <div class="blog-cover">
              <img :src="i.cover" alt="图片暂无法显示">
              <div class="blog-date">
                <h3>10日</h3>
                <p>07月</p>
              </div>
            </div>
            <div class="blog-detail">
              <nuxt-link :to="`/article/${i.article_id}`">
                <h2>{{ i.title }}</h2>
              </nuxt-link>
              <p>{{ i.summary }}</p>
              <ul class="divide-x">
                <li class="flex-items-center pr-4">
                  <svg-icon class="wh-25 mr-1" icon-class="sort" />
                  <NuxtLink to="/">算法</NuxtLink>
                </li>
                <li class="flex-items-center pl-4">
                  <svg-icon class="wh-25 mr-1" icon-class="comment" />
                  <NuxtLink to="/">评论(0)</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-right mt-12 mb-16">
          <el-pagination
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
      <div class="blog-right-sidebar">
        <right-panel />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RightPanel from '@/components/RightPanel.vue'
// import { getArticleListApi } from '~/api/article'
// import { Context } from '@nuxt/types'

export default Vue.extend({
  name: 'Home',
  components: {
    RightPanel
  },
  // asyncData (): Promise<object | void> | object | void {
  //   return getArticleListApi().then((value) => {
  //     return { articleList: value.data.data }
  //   })
  // },
  data () {
    return {
      articleList: [],
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange (val: number) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val: number) {
      console.log(`当前页: ${val}`)
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/index";
@media #{$desktop} {
  .blog-list {
    @apply grid grid-cols-2 gap-x-4;
  }
}
</style>
