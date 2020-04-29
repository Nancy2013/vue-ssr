<!--
 * @Author: your name
 * @Date: 2020-04-26 10:15:46
 * @LastEditTime: 2020-04-29 15:25:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\App.vue
 -->
<template>
  <div id="app">
    <router-link to='/home'> Home </router-link>
    <router-link to='/detail'> Detail </router-link>
    <router-link to='/about'> About </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {}
  };
</script>

<style scoped lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
