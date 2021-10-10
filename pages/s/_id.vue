<template>
  <div class="blog-left-sidebar">
    <div class="text-center ">
      <img class="cover" :src="article.cover" alt="图片暂无法显示">
    </div>
    <h1 class="title">{{ article.title }}</h1>
    <ul class="flex text-gray-600 text-sm divide-x">
      <li class="flex-items-center pr-4">
        <svg-icon class="mr-1" icon-class="sort" />
        <span>{{ article.category_id.name }}</span>
      </li>
      <li class="flex-items-center pl-4">
        <svg-icon class="mr-1" icon-class="time" />
        <span>{{ article.created_at }}</span>
      </li>
    </ul>
    <div id="write" v-highlight class="overflow-x-auto" v-html="article.content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { getArticleApi } from '~/api/article'
import { Head } from '~/types'
import highlight from '~/directive/highlight'

export default Vue.extend({
  name: 'Article',
  directives: { highlight },
  asyncData (ctx: Context): Promise<object | void> | object | void {
    return getArticleApi(ctx.params.id).then((value) => {
      const head = ctx.app.head as Head
      head.title = value.data.title
      return { article: value.data }
    })
  },
  data () {
    return {
      article: {
        title: '',
        category_id: {},
        cover: '',
        content: '',
        summary: '',
        created_at: ''
      }
    }
  },
  head () {
    return {
      title: this.title
    }
  }
})

</script>

<style lang="scss" scoped>
@import "assets/scss/index";
.app-main {
  @apply mt-12 px-0;
  .blog-left-sidebar {
    @apply px-4;
    box-shadow: $blog-box-shadow;
    & > * {
      @apply mb-4;
    }
  }
}
</style>
