<template>
  <div>
    <Banner />
    <main class="app-main">
      <div class="blog-left-sidebar">
        <div class="blog-list">
          <div v-for="i in articles" :key="i.article_id" class="blog-item">
            <div class="blog-cover">
              <img :src="i.cover" alt="图片暂无法显示">
              <div class="blog-date">
                <h3>{{ i.day }}日</h3>
                <p>{{ i.month }}月</p>
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
            :hide-on-single-page="true"
            :current-page="page.current_page"
            :page-sizes="[6,12,30,50]"
            :page-size="page.per_page"
            layout="total, prev, pager, next"
            :total="page.total"
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
import { Context } from '@nuxt/types'
import { getArticleListApi } from '~/api/article'
import { articleMixin } from '~/mixins/article'
import { processArticleList } from '~/pages/article/common'
import { Article } from '~/types'

export default Vue.extend({
  name: 'Home',
  components: {
    RightPanel
  },
  mixins: [articleMixin],
  asyncData (ctx: Context): Promise<object | void> | object | void {
    return getArticleListApi({ page: ctx.query.current_page || 1, rowsPerPage: ctx.query.per_page || 6 }).then((value) => {
      return processArticleList(value)
    })
  },
  data () {
    return {
      articleList: []
    }
  },
  computed: {
    articles (): Article[] {
      return this.articleList.map((value: any) => {
        const time = value.updated_at.split(' ')[0].split('-')
        value.month = time[1]
        value.day = time[2]
        return value
      })
    }
  },
  watch: {
    $route: {
      handler (val) {
        if (!val.query.current_page || val.query.current_page === 1) {
          this.getList(1, 6)
        }
      }
    }
  },
  methods: {}
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
