<!--
 * @Author: your name
 * @Date: 2020-04-27 09:16:24
 * @LastEditTime: 2020-04-29 16:30:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\views\Home.vue
 -->

<template>

  <div>Home</div>
</template>
<script>
  // 定义asynData方法，dispatch $store中的actions
  export default {
    name: "Home",
    props: {
      msg: String
    }
  };
</script>