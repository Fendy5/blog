<template>
  <div>
    <article-list :list="articleList" />
    <article-pagination :temp-page="page" @pageChange="pageChange" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { getArticleListApi } from '~/api/article'
import { processArticleList } from '~/pages/s/common'
import ArticlePagination from '~/components/ArticlePagination.vue'
import ArticleList from '~/components/ArticleList.vue'
import { articleMixin } from '~/mixins/article'
import { Head } from '~/types'

export default Vue.extend({
  name: 'Category',
  components: { ArticleList, ArticlePagination },
  mixins: [articleMixin],
  asyncData (ctx: Context): Promise<object | void> | object | void {
    const head = ctx.app.head as Head
    head.title = ctx.params.name
    return getArticleListApi({ path: ctx.params.name, page: 1, rowsPerPage: 6 }).then((value) => {
      return processArticleList(value)
    })
  },
  data () {
    return {}
  },
  methods: {}
})

</script>

<style lang="scss" scoped>
</style>
