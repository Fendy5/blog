<template>
  <div>
    <div v-if="loading">
      <div class="skeleton-image h-80">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M64 896V128h896v768H64z m64-128l192-192 116.352 116.352L640 448l256 307.2V192H128v576z m224-480a96 96 0 1 1-0.064 192.064A96 96 0 0 1 352 288z" /></svg>
      </div>
    </div>
    <div v-show="!loading">
      <img ref="img" class="w-full" :src="url" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    const image = this.$refs.img
    image.onload = () => {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        // 加载完成
        this.loading = false
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.h-80 {
  height: 13.5rem;
}
.skeleton-image {
  background: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);
  background-size: 400% 100%;
  animation: el-skeleton-loading 1.4s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  svg {
    fill: #dcdde0;
    width: 22%;
    height: 22%;
  }
}
</style>
