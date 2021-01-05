<template>
  <header>
    <div class="container">
      <nav class="row">
        <div class="col-2">
          <a class="navbar-brand" href="/">
            <span class="logo">流云辞</span>
          </a>
        </div>
        <div class="col-10">
          <div class="main-menu">
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
        <div class="mobile-menu">555</div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: #562fc7;
  nav {
    display: flex;
    align-items: center;
    a {
      color: #ffffff;
      font-weight: 600;
    }
    .navbar-brand {
    }
    .main-menu {
      ul {
        display: flex;
        margin-bottom: 0;
        justify-content: flex-end;
        li {
          position: relative;
          z-index: 1;
          margin: 0 5px;
          &.active{
            & > a::before{
              width: 100%;
            }
          }
          list-style: none;
          .nav-link {
            padding: 35px 20px;
            &::before {
              background-color: #ffffff;
              content: '';
              height: 2px;
              width: 0;
              transition: .3s;
              position: absolute;
              bottom: 20px;
              left: 0;
            }
          }
          &:hover {
            & > a::before{
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
