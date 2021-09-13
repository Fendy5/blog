import Vue from 'vue'
import { getArticleListApi } from '~/api/article'

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
    handleSizeChange (val: number) {
      console.log('size change')
      this.page.per_page = val
      this.getList()
    },
    handleCurrentChange (val: number) {
      this.page.current_page = val
      this.$router.push({ query: { per_page: this.page.per_page, current_page: val }, path: '/' })
      this.getList()
    },
    getList (page: number = this.page.current_page, rowsPerPage: number = this.page.per_page) {
      getArticleListApi({ page, rowsPerPage }).then((value) => {
        const data = value.data
        this.articleList = data.data
        Object.keys(this.page).forEach((key) => { this.page[key] = parseInt(data[key]) })
      })
    }
  }
})

export { articleMixin }
