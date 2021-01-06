<template>
  <header>
    <div class="container">
      <nav>
        <div class="main-menu">
          <div class="row align-items-center">
            <div class="col-2">
              <a class="logo" href="/">流云辞</a>
            </div>
            <div class="col-10">
              <ul>
                <li class="active">
                  <a class="nav-link" href="">首页</a>
                </li>
                <li>
                  <a class="nav-link" href="">日常杂谈</a>
                </li>
                <li>
                  <a class="nav-link" href="">学习笔记</a>
                </li>
                <li><a class="nav-link" href="">最近趣事</a></li>
                <li><a class="nav-link" href="">福利活动</a></li>
                <li><a class="nav-link" href="">资源分享</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mobile-menu justify-content-between">
          <a class="logo" href="/">流云辞</a>
          <div class="menu-btn" :class="{'active':active}" @click="openMenu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
          <div class="navbar-nav">
            <div class="nav-item">123</div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    openMenu () {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/header";
</style>
