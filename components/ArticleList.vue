<template>
  <div class="blog-left-sidebar">
    <div v-if="articles.length" class="blog-list">
      <div v-for="i in articles" :key="i.id" class="blog-item">
        <div class="blog-cover">
          <cover :url="i.cover" alt="图片暂无法显示" />
          <div class="blog-date">
            <h3>{{ i.day }}日</h3>
            <p>{{ i.month }}月</p>
          </div>
        </div>
        <div class="blog-detail">
          <nuxt-link :title="i.title" :to="`/s/${i.article_id}`">
            <h2>{{ i.title }}</h2>
          </nuxt-link>
          <p>{{ i.summary }}</p>
          <ul class="divide-x">
            <li class="flex-items-center pr-4">
              <svg-icon class="mr-1" icon-class="sort" />
              <span>{{ i.category }}</span>
              <!--              <NuxtLink :to="{path: i.children.length>0?'#':i.path, query: {t:i.name}}">算法</NuxtLink>-->
            </li>
            <li class="flex-items-center pl-4">
              <svg-icon class="mr-1" icon-class="tag" />
              <span v-for="(j,index) in i.tags" :key="index" class="mr-2">{{ j.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <svg-icon class="empty-icon" icon-class="empty" />
      <p class="text-secondary mt-12">暂无内容</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { articleMixin } from '~/mixins/article'
import Cover from '~/components/Cover.vue'
import { Article } from '~/types'

export default Vue.extend({
  name: 'ArticleList',
  components: { Cover },
  mixins: [articleMixin],
  props: {
    list: {
      type: Array,
      default: () => { return [] }
    }
  },
  computed: {
    articles (): Article[] {
      return this.list.map((value: any) => {
        const time = value.created_at.split(' ')[0].split('-')
        value.month = time[1]
        value.day = time[2]
        return value
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
