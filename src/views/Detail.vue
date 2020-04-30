<!--
 * @Author: your name
 * @Date: 2020-04-30 09:11:33
 * @LastEditTime: 2020-04-30 15:16:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\views\Detail.vue
 -->
<template>
  <div>
    <div>userInfo</div>
    <div :key="index" v-for="(value, key, index) in userInfo">
      {{ `${key}: ${value}` }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  props: {
    msg: String,
  },
  asyncData({ store, route }) {
    return store.dispatch('getUserInfo', route.params.id);
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>
