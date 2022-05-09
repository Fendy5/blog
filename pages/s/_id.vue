<template>
  <div class="grid-cols-2_1">
    <div class="blog-left-sidebar">
      <div class="text-center ">
        <img class="cover" :src="article.cover" alt="图片暂无法显示">
      </div>
      <h1 class="title">{{ article.title }}</h1>
      <ul class="flex text-gray-600 text-sm divide-x">
        <li class="flex-items-center pr-4">
          <span>{{ article.category_id.name }}</span>
        </li>
        <li class="flex-items-center pl-4">
          <svg-icon class="mr-1" icon-class="time" />
          <span>{{ article.created_at }}</span>
        </li>
      </ul>
      <div id="write" v-highlight class="overflow-x-auto" v-html="article.content" />
    </div>
    <div class="right-panel relative">
      <div class="panel-card divide-y divide-gray-300">
        <div class="pc-title">最近更新</div>
        <div class="pc-content">
          <ul>
            <li v-for="i in recentList" :key="i.article_id" class="flex">
              <div class="cover-thumbnail">
                <img :src="i.cover" alt="">
              </div>
              <div class="summary">
                <RouterLink :to="`/s/${i.article_id}`">
                  <!--                <span class="ellipsis">{{ i.title }}</span>-->
                  <p class="truncate font-bold w-40">{{ i.title }}</p>
                </RouterLink>
                <p class="text-secondary">{{ i.created_at }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="!isMobile() || catalogOpen" :class="isMobile()?'is-fixed':'catalog'">
        <div class="panel-card divide-y divide-gray-300">
          <div class="pc-title">目录结构</div>
          <div class="pt-4 text-gray-700">
            <template v-for="(item, index) in catalog">
              <a :key="index" :href="'#' + item.id" :style="{ fontSize: 18 * (1 - 0.1 * item.level) + 'px' }">
                <div class="py-2 pr-6 catalog-item ellipsis" :style="{ paddingLeft: item.level * 1.5 + 'rem' }">
                  {{ item.title }}
                </div>
              </a>
            </template>
            <div v-if="!catalog.length" class="text-center">暂无目录</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile()" class="catalogue-icon" @click="toggleCatalogue">
      <svg-icon v-if="!catalogOpen" icon-class="catalogue" />
      <svg-icon v-else icon-class="close" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { getArticleApi, getArticleListApi } from '~/api/article'
import { Head } from '~/types'
import highlight from '~/directive/highlight'
import { isMobile } from '~/utils'

interface CatalogueProp {
  id: string,
  title: string,
  level: number,
  nodeName: string
}
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
      },
      catalog: [],
      catalogOpen: false,
      recentList: []
    }
  },
  mounted () {
    const article = document.getElementById('write')
    this.generateCatalogue(article)
    getArticleListApi({ rowsPerPage: 5, page: 1 }).then((value) => { this.recentList = value.data.data })
  },
  methods: {
    isMobile,
    generateCatalogue (article: HTMLElement) {
      const nodes = ['H1', 'H2', 'H3']
      const titles: CatalogueProp[] = []
      article.childNodes.forEach((e, index) => {
        if (nodes.includes(e.nodeName)) {
          const id = 'header-' + index
          // @ts-ignore
          e.setAttribute('id', id)
          titles.push({
            id,
            // @ts-ignore
            title: e.innerHTML,
            level: Number(e.nodeName.substring(1, 2)),
            nodeName: e.nodeName
          })
        }
      })
      this.catalog = titles
    },
    // 移动端切换目录
    toggleCatalogue () {
      this.catalogOpen = !this.catalogOpen
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
.catalog {
  position: sticky;
  top: 72px;
  .catalog-item {
    &:hover {
      background: rgba(138, 138, 138, 0.11);
    }
  }
}
.is-fixed {
  position: fixed;
  bottom: 5.5rem;
  background: #ffffff;
  left: 50%;
  width: 90%;
  transform: translateX(-50%);
  border-radius: 12px;
  box-shadow: 0 2px 10px 0 #0000001a;
}
.catalogue-icon {
  position: fixed;
  bottom: 3.5rem;
  cursor: pointer;
  left: 1.5rem;
  width: 35px;
  height: 35px;
  background: #d3d1d1;
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
}
</style>
