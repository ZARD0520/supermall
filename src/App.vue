<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar class="index"/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabbar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style scoped>
  @import "assets/css/base.css";
  .index{
    z-index: 3;
  }
</style>
