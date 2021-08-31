<template>
  <header class="flex font-bold">
    <div class="fd-container z-10 flex-justify-between items-center flex">
      <nuxt-link class="flex-items-center" to="/">
        <svg-icon class="wh-3rem" icon-class="logo" />
        <span class="text-xl">流云辞</span>
      </nuxt-link>
      <ul class="nav">
        <li v-for="(i,index) in menuList" :key="index">
          <nuxt-link exact :class="{'nuxt-link-active': `/category/${$route.params.name && $route.params.name.split('-')[0]}`===i.path}" :to="i.children.length>0?'#':i.path">
            <span :class="{'arrow': i.children.length>0}"> {{ i.name }} </span>
          </nuxt-link>
          <ul v-if="i.children" class="sub-menu">
            <li v-for="(x,idx) in i.children" :key="idx">
              <nuxt-link :to="`/category${x.path}`">
                {{ x.name }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
      <div ref="mobile-menu" class="mobile-menu" @click="mobileActive=!mobileActive">
        <div :class="{active: mobileActive}" class="menu-btn">
          <div class="line1" />
          <div class="line2" />
          <div class="line3" />
        </div>
      </div>
    </div>
    <div :class="{'sub-menu-active': mobileActive}" class="menu-content absolute">
      <ul>
        <li v-for="(i,index) in menuList" :key="index" @click="clickMobileMenu(i.id, i.children.length>0)">
          <nuxt-link :to="i.children.length>0?'#':i.path">
            {{ i.name }}
            <span v-if="i.children.length>0" :class="[mobileSubMenu===i.id?'plus subtract':'plus']">
              <span class="line1" />
              <span class="line2" />
            </span>
          </nuxt-link>
          <ul v-if="i.children" :class="[mobileSubMenu===i.id?'sub-menu-open':'sub-menu']">
            <li v-for="(x,idx) in i.children" :key="idx" @click="clickMobileMenu(i.id, false)">
              <nuxt-link :to="`/category${x.path}`">
                {{ x.name }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-show="mobileActive" class="dialog" @click="mobileActive=false" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { getMenuListApi } from '~/api'

export default Vue.extend({
  name: 'FdHeader',
  data () {
    return {
      mobileActive: false,
      activeIndex: 1,
      mobileSubMenu: 0,
      menuList: []
    }
  },
  created () {
    getMenuListApi().then((value) => {
      this.menuList = value.data.menu
    })
  },
  methods: {
    clickMobileMenu (id: number, hasSubMenu: boolean) {
      this.mobileSubMenu = id === this.mobileSubMenu ? 99 : id
      !hasSubMenu && (this.mobileActive = false)
    }
  }
})
</script>

<style lang="scss" scoped>
@import "assets/scss/common";
$animate-width: 25px;
// 菜单按钮的样式
$menu_btn-width: 25px;
// 菜单按钮的颜色
$menu_btn-color: $bg-primary;
// 移动端菜单的阴影
$menu-shadow: 0px 5px 5px #d5d5f257;
header{
  background: $bg-primary;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
  height: 70px;
  @apply w-full text-white fixed z-10 top-0;
  svg {
    width: 4rem;
    height: 4rem;
  }
  .sub-menu {
    @apply font-light;
  }
  // 移动端
  @media #{$tablet} {
    .nav {
      @apply hidden;
    }
    .mobile-menu {
      display: none;
      position: relative;
      .menu-btn {
        position: relative;
        width: $menu_btn-width;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .line1 {
          position: relative;
          top: -7px;
          width: $menu_btn-width;
          height: 2px;
          background-color: $white;
          transition: .3s;
        }

        .line2 {
          width: $menu_btn-width;
          height: 2px;
          background-color: $white;
          transition: .3s;
        }

        .line3 {
          position: relative;
          bottom: -7px;
          width: $menu_btn-width;
          height: 2px;
          background-color: $white;
          transition: .3s;
        }

        &.active {
          .line1 {
            transform: rotate(125deg);
            top: 3px;
            position: relative;
          }

          .line2 {
            width: 0;
          }

          .line3 {
            transform: rotate(-145deg);
            bottom: 0;
            position: relative;
          }
        }
      }
      .nav-bar {
        list-style-type: none;
        text-align: center;
        border-radius: 8px;
        background: #ffffff;
        font-size: 16px;
        li {
          padding: 7px 0;
          a {
            @apply flex justify-between px-4;
            color: $black;
            text-decoration: none;
          }
          .sub-menu {
            display: none;
          }
          .sub-menu.active {
            display: block;
          }
        }
      }
    }
    .menu-content {
      z-index: 999;
      color: $bg-primary;
      background: #ffffff;
      width: calc(100% - 2rem);
      transform: translateX(-50%) scaleY(0);
      transform-origin: top center;
      left: 50%;
      transition: .26s;
      border-radius: 0 0 4px 4px;
      box-shadow: $menu-shadow;
      top: 70px;
      list-style-type: none;
      @apply py-6 px-12;
      ul {
        li {
          @apply py-2 relative;
          a {
            @apply flex justify-between;
          }
          .sub-menu {
            @apply font-medium;
            max-height: 0;
            transition: .5s;
            overflow: hidden;
          }
          .sub-menu-open {
            @apply font-medium;
            max-height: 100vh;
            transition: .5s;
          }
          ul {
            @apply pl-6
          }
        }
      }
    }
    .mobile-menu {
      display: flex;
      padding: 15px 0;
    }
    .sub-menu-active {
      transform: translateX(-50%) scaleY(1);
    }
  }
  // 桌面端
  @media #{$laptop} {
    .mobile-menu {
      display: none;
    }
    ul {
      @apply flex;
      .active {
        a:before {
          width: $animate-width;
        }
      }
      li {
        position: relative;
        @apply mx-2;
        a {
          @apply text-sm px-4 py-2 block;
          &:before {
            background-color: white;
            content: '';
            height: 2px;
            width: 0;
            transition: .26s;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
          &:hover {
            &:before {
              width: $animate-width;
            }
            .arrow {
              &:after {
                transform: rotate(45deg);
              }
            }
          }
        }
        .sub-menu {
          @apply absolute flex-col py-2;
          background: $bg-primary;
          transform: scale(0);
          left: 0;
          transform-origin: top center;
          li {
            @apply px-2 text-center;
          }
        }
        &:hover {
          .sub-menu {
            transform: scale(1);
            transition: .5s;
            @apply visible;
          }
          .arrow {
            &:after {
              transform: rotate(45deg);
            }
          }
        }
      }
    }
    .menu-content {
      display: none;
    }
  }

  $plus-width: 20px;
  .plus {
    @apply relative;
    width: $plus-width;
    .line1 {
      width: $plus-width;
      background: $menu_btn-color;
      position: absolute;
      height: 2px;
      top: ($plus-width - 4px)/2;
    }
    .line2 {
      left: ($plus-width - 4px)/2;;
      background: $menu_btn-color;
      height: $plus-width;
      transition: .3s;
      position: absolute;
      width: 2px;
    }
  }
  .subtract {
    .line2 {
      left: ($plus-width - 4px)/2;;
      background:$menu_btn-color;
      transform: rotate(270deg);
      position: absolute;
      width: 2px;
      height: 0;
    }
  }
  .nuxt-link-active {
    &:before {
      width: $animate-width;
    }
  }
  .dialog {
    z-index: 9;
    width: 100vw;
    height: 100vh;
    position: fixed;
    opacity: .5;
    left: 0;
    top: 0;
    background: #000000;
  }
}
</style>
