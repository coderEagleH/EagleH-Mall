<template>
  <div id="app">
    <keep-alive exclude="Detail,Cart"><router-view></router-view></keep-alive>
    <MainTabBar> </MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
