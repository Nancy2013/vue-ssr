<!--
 * @Author: your name
 * @Date: 2020-04-30 09:11:33
 * @LastEditTime: 2020-05-14 14:23:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\views\Detail.vue
 -->
<template>
  <div>
    <div>userInfo</div>
    <div :key="index"
         v-for="(value, key, index) in userInfo">
      {{ `${key}: ${value}` }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Detail",
  props: {
    msg: String
  },
  asyncData({ store, route }) {
    return store.dispatch("app/getUserInfo", { id: route.params.id });
  },
  computed: {
    userInfo() {
      return this.$store.state.app.userInfo;
    }
  }
};
</script>
