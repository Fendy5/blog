import Vue from 'vue'
import { Article } from '~/types'

const articleMixin = Vue.extend({
  data () {
    return {
      articleList: [],
      page: {
        total: 0,
        per_page: 6,
        current_page: 1
      }
    }
  },
  methods: {
    pageChange (value: Article[]) {
      this.articleList = value
    }
  },
  head () {
    return {
      title: this.title || '流云辞'
    }
  }
})

export { articleMixin }
