<template>
  <div class="grid-cols-2_1">
    <div>
      <article-list :list="articleList" />
      <article-pagination :type="{ tag: $route.params.name }" :temp-page="page" @pageChanged="pageChange" />
    </div>
    <right-panel />
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
import { Head } from '~/types'

export default Vue.extend({
  name: 'Tag',
  components: { ArticleList, ArticlePagination },
  mixins: [articleMixin],
  asyncData (ctx: Context): Promise<object | void> | object | void {
    const head = ctx.app.head as Head
    head.title = ctx.params.name
    return getArticleListApi({ tag: ctx.params.name, page: ctx.query.current_page || 1, rowsPerPage: ctx.query.per_page || 6 }).then((value) => {
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
