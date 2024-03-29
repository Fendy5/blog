<template>
  <div class="grid-cols-2_1">
    <div>
      <article-list :list="articleList" />
      <article-pagination :temp-page="page" @pageChanged="pageChange" />
    </div>
    <right-panel />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import ArticleList from '~/components/ArticleList.vue'
import ArticlePagination from '~/components/ArticlePagination.vue'
import { getArticleListApi } from '~/api/article'
import { articleMixin } from '~/mixins/article'
import { processArticleList } from '~/pages/s/common'
import { Head } from '~/types'
import RightPanel from '~/components/RightPanel.vue'

export default Vue.extend({
  name: 'Home',
  components: { ArticleList, ArticlePagination, RightPanel },
  mixins: [articleMixin],
  asyncData (ctx: Context): Promise<object | void> | object | void {
    const head = ctx.app.head as Head
    head.title = '流云辞'
    return getArticleListApi({ page: ctx.query.current_page || 1, rowsPerPage: ctx.query.per_page || 6 }).then((value) => {
      return processArticleList(value)
    })
  },
  data () {
    return {}
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
  methods: {
    getList (page: number = this.page.current_page, rowsPerPage: number = this.page.per_page) {
      getArticleListApi({ page, rowsPerPage }).then((value) => {
        const tmp = processArticleList(value)
        this.page = tmp.page
        this.articleList = tmp.articleList
      })
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
