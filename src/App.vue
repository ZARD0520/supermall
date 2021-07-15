<template>
  <div id="app">
    <router-view/>
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

<style>
  @import "assets/css/base.css";
  .index{
    z-index: 3;
  }
</style>
