<template>
  <div>
    <article-list :list="articleList" />
    <article-pagination :temp-page="page" @pageChanged="pageChange" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { articleMixin } from '~/mixins/article'
import { getArticleListApi } from '~/api/article'
import { processArticleList } from '~/pages/s/common'
import ArticleList from '~/components/ArticleList.vue'
import ArticlePagination from '~/components/ArticlePagination.vue'

export default Vue.extend({
  name: 'Tag',
  components: { ArticleList, ArticlePagination },
  mixins: [articleMixin],
  asyncData (ctx: Context): Promise<object | void> | object | void {
    return getArticleListApi({ tag: ctx.params.name, page: 1, rowsPerPage: 6 }).then((value) => {
      ctx.app.head.title = ctx.params.name
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
