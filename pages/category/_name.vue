<template>
  <div class="grid-cols-2_1">
    <div>
      <article-list :list="articleList" />
      <article-pagination :type="{ path: $route.params.name }" :temp-page="page" @pageChanged="pageChange" />
    </div>
    <right-panel />
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

export default Vue.extend({
  name: 'Category',
  components: { ArticleList, ArticlePagination },
  mixins: [articleMixin],
  asyncData (ctx: Context): Promise<object | void> | object | void {
    return getArticleListApi({ path: ctx.params.name, page: ctx.query.current_page || 1, rowsPerPage: ctx.query.per_page || 6 }).then((value) => {
      return Object.assign(processArticleList(value), { title: ctx.query.t })
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
