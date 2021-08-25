<template>
  <div class="mt-24">
    <main class="app-main">
      <div class="blog-left-sidebar">
        <div class="blog-list">
          <div v-for="i in 2" :key="i" class="blog-item">
            <div class="blog-cover">
              <img src="https://www.fendy5.cn/public/images/cover/20705011.jpg" alt="图片暂无法显示">
              <div class="blog-date">
                <h3>10日</h3>
                <p>07月</p>
              </div>
            </div>
            <div class="blog-detail">
              <nuxt-link :to="`/article/${i}`">
                <h2>乘积最大子数组</h2>
              </nuxt-link>
              <p>给出一个整数数组 nums ，请找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。给出一个整数数组 nums ，请找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。</p>
              <ul class="divide-x">
                <li class="flex-items-center pr-4">
                  <svg-icon class="wh-25 mr-1" icon-class="sort" />
                  <NuxtLink to="/">算法</NuxtLink>
                </li>
                <li class="flex-items-center pl-4">
                  <svg-icon class="wh-25 mr-1" icon-class="comment" />
                  <NuxtLink to="/">评论({{ i }})</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-right mt-12 mb-16">
          <el-pagination
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
      <div class="blog-right-sidebar">
        <right-panel />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RightPanel from '@/components/RightPanel.vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  name: 'Category',
  components: { RightPanel },
  asyncData (ctx: Context): Promise<object | void> | object | void {
    console.log(ctx)
  },
  data () {
    return {
      blogList: [],
      currentPage4: 4
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
})

</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
@media #{$desktop} {
  .blog-list {
    @apply grid grid-cols-2 gap-x-4;
  }
}
</style>
