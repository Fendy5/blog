<template>
  <div class="blog-left-sidebar">
    <div class="text-center ">
      <img class="cover" :src="article.cover" alt="图片暂无法显示">
    </div>
    <h2 class="title">{{ article.title }}</h2>
    <ul class="flex text-gray-600 text-sm divide-x">
      <li class="flex-items-center pr-4">
        <svg-icon class="wh-25 mr-1" icon-class="sort" />
        <NuxtLink to="/">{{ article.category_id.name }}</NuxtLink>
      </li>
      <li class="flex-items-center pl-4">
        <svg-icon class="wh-25 mr-1" icon-class="time" />
        <span>{{ article.created_at }}</span>
      </li>
    </ul>
    <div class="overflow-x-scroll" v-html="article.content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { getArticleApi } from '~/api/article'

export default Vue.extend({
  name: 'Article',
  asyncData (ctx: Context): Promise<object | void> | object | void {
    return getArticleApi(ctx.params.id).then((value) => {
      ctx.app.head.title = value.data.title
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
    box-shadow: $blog-box-shadow;
    & > * {
      @apply mb-4;
    }
    h2 {
      @apply font-bold text-2xl;
    }
  }
}
</style>
