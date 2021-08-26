const articleMixin = {
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
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val: number) {
      console.log(`当前页: ${val}`)
    }
  }
}

export { articleMixin }
