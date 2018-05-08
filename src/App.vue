<script src="router/index.js"></script>
<template>
  <div id="app">
    <loading v-model="isLoading"></loading>

    <x-header class="app-header" :left-options="{showBack: false}">首页</x-header>

    <router-view></router-view>

    <tabbar style="position: fixed;">
      <tabbar-item selected>
        <img slot="icon" src="@/assets/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="@/assets/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="@/assets/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="6">
        <img slot="icon" src="@/assets/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Loading, XHeader, Tabbar, TabbarItem} from 'vux'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Loading,
      XHeader,
      Tabbar,
      TabbarItem
    },
    computed: {
      ...mapGetters([
        'isLoading'
      ])
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import 'style/common.less';

  body {
    background-color: @background-color;
  }

  .app-header {
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
  }
</style>
