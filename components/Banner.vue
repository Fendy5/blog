<template>
  <div class="banner">
    <div class="fd-container">
      <h2>Stay Hungry， Stay Foolish~</h2>
      <h2>编程与音乐，科技与艺术~</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/common";
$bg-banner: #3b13b0;
.banner {
  margin-top: 70px;
  background: $bg-banner;
  @apply text-white text-center font-bold;
  // 移动端
  @media #{$tablet} {
    .fd-container {
      @apply px-8 py-24;
      h2 {
        @apply text-2xl;
      }
    }
  }

  // 平板
  @media #{$laptop} {
    .fd-container {
      @apply px-8 py-32;
      h2 {
        @apply text-3xl;
      }
    }
  }

  // PC端
  @media #{$desktop} {
    .fd-container {
      @apply px-8 py-40;
      h2 {
        @apply text-5xl;
      }
    }
  }

}
</style>
