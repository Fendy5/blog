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
          <ul class="nav-bar" :class="{'menu-open':active}">
            <li class="bar-item">
              <a href="#">首页</a>
            </li>
            <li class="bar-item">
              <a href="#">日常杂谈</a>
            </li>
            <li class="bar-item">
              <a href="#">学习笔记</a>
              <div class="sub-menu">
                <ul>
                  <li class="bar-item">
                    <a href="">Python</a>
                  </li>
                  <li class="bar-item">
                    <a href="">Laravel</a>
                  </li>
                  <li class="bar-item">
                    <a href="">Vue</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="bar-item">
              <a href="#">最近趣事</a>
            </li>
          </ul>
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
.nav-bar {
  position: absolute;
  width: 100%;
  top: 60px;
  box-shadow: 1px 2px 10px #bdbdbd;
  height: 0;
  transition: .3s;
  overflow: hidden;
  z-index: 99;
  .bar-item {
    li {
      list-style-type: none;
      a {
        color: #555555;
        padding: 10px 20px;
      }
    }
  }
  &.menu-open {
    height: 165px;
  }
}
</style>
