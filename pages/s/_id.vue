<template>
  <div class="grid-cols-2_1" @click="toggleCatalogue('open')">
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
      <!--      <div v-show="!isMobile() || catalogOpen" class="is-fixed" :class="!isMobile() || catalogOpen?'':'catalog w-360'">-->
      <div class="panel-card divide-y divide-gray-300" :class="[isMobile()?'is-fixed':'catalog', catalogOpen?'active overflow-scroll':'']">
        <!--        <div v-show="!isMobile() || catalogOpen" :class="isMobile()?'is-fixed':'catalog'">-->
        <div class="pc-title pt-4">目录结构</div>
        <div class="pt-4 text-gray-700" @click="handleGoTo($event)">
          <div v-for="(item, index) in catalog" :key="index" :style="{ fontSize: 18 * (1 - 0.1 * item.level) + 'px' }">
            <div class="py-2 pr-6 catalog-item ellipsis cursor-pointer" :data-id="item.id" :class="item.id" :style="{ paddingLeft: item.level * 1.5 + 'rem' }">
              {{ item.title }}
            </div>
          </div>
          <div v-if="!catalog.length" class="text-center">暂无目录</div>
        </div>
      </div>
    </div>
    <div v-if="isMobile()" class="catalogue-icon" @click.stop="toggleCatalogue">
      <svg-icon v-if="!catalogOpen" class="text-white" icon-class="catalogue" />
      <svg-icon v-else class="text-white" icon-class="close" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import _ from 'lodash'
import { getArticleApi, getArticleListApi } from '~/api/article'
import { Head } from '~/types'
import highlight from '~/directive/highlight'
import { isMobile } from '~/utils'

interface CatalogueProp {
  id: string,
  title: string,
  offsetTop: number,
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
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: _.throttle(function () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.catalog.forEach((i: CatalogueProp) => {
        const t = scrollTop - i.offsetTop
        const e = document.getElementsByClassName(i.id)[0] as HTMLElement
        if (t >= 200 && t > 0) {
          e.style.color = '#562fc6'
        } else {
          e.style.color = '#5d6677'
        }
      })
    }, 50),
    handleGoTo (e: PointerEvent) {
      const targetId = (e.target as HTMLElement).getAttribute('data-id') as string
      document.getElementById(targetId)?.scrollIntoView()
      console.log(targetId)
    },
    isMobile,
    generateCatalogue (article: HTMLElement) {
      const nodes = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
      const titles: CatalogueProp[] = []
      const catalog = article.childNodes as NodeListOf<HTMLElement>
      catalog.forEach((e, index) => {
        if (nodes.includes(e.nodeName)) {
          const id = 'header-' + index
          e.setAttribute('id', id)
          titles.push({
            id,
            title: e.innerHTML,
            offsetTop: e.offsetTop,
            level: Number(e.nodeName.substring(1, 2)),
            nodeName: e.nodeName
          })
        }
      })
      this.catalog = titles
    },
    // 移动端切换目录
    toggleCatalogue (status?: 'open'| 'close') {
      if (status === 'open') {
        this.catalogOpen = false
      } else {
        this.catalogOpen = !this.catalogOpen
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
.catalog {
  position: sticky;
  top: 72px;
  .catalog-item {
    &:hover {
      background: rgba(138, 138, 138, 0.11);
    }
  }
}
.active {
  height: 360px !important;
  box-shadow: 0 12px 20px 10px #c5b5b54d !important;
}
.is-fixed {
  padding: 0 !important;
  position: fixed;
  bottom: 5.5rem;
  background: #ffffff;
  left: 50%;
  width: 90%;
  height: 0;
  overflow: hidden;
  transition: 0.3s;
  transform: translateX(-50%);
  border-radius: 12px;
  //box-shadow: 0 2px 10px 0 #0000001a;
}
.catalogue-icon {
  position: fixed;
  bottom: 3.5rem;
  cursor: pointer;
  left: 1.5rem;
  width: 40px;
  height: 40px;
  background: #5355c7;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  color: white;
}
</style>
