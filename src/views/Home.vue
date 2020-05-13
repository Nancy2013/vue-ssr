<!--
 * @Author: your name
 * @Date: 2020-04-27 09:16:24
 * @LastEditTime: 2020-05-13 17:50:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\views\Home.vue
 -->

<template>
  <div>
    <div>Home</div>
    <router-link to="/detail/1"> Detail </router-link>
    <router-link to="/about"> About </router-link>
    <router-view> </router-view>
  </div>
</template>
<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>
