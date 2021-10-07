<template>
  <div class="text-right mt-12 mb-16">
    <el-pagination
      :hide-on-single-page="true"
      :current-page="page.current_page"
      :page-sizes="[6,12,30,50]"
      :page-size="page.per_page"
      layout="total, prev, pager, next"
      :total="page.total"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getArticleListApi } from '~/api/article'

export default Vue.extend({
  props: {
    type: {
      type: Object,
      default: () => { return {} }
    },
    tempPage: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      page: {
        total: 0,
        per_page: 6,
        current_page: 1
      }
    }
  },
  watch: {
    tempPage: {
      immediate: true,
      handler () {
        Object.keys(this.page).forEach((key) => { this.page[key] = this.tempPage[key] })
      }
    }
  },
  // created () {
  //   Object.keys(this.page).forEach((key) => { this.page[key] = this.tempPage[key] })
  // },
  methods: {
    handleCurrentChange (val: number) {
      this.page.current_page = val
      this.$router.push({ query: { per_page: this.page.per_page, current_page: val }, path: `${this.$route.fullPath}` })
      this.getList()
    },
    getList (page: number = this.page.current_page, rowsPerPage: number = this.page.per_page) {
      getArticleListApi({ page, rowsPerPage, ...this.type }).then((value) => {
        const data = value.data
        this.$emit('pageChanged', data.data)
        Object.keys(this.page).forEach((key) => { this.page[key] = parseInt(data[key]) })
      })
    }
  }
})

</script>

<style lang="scss" scoped>

</style>
