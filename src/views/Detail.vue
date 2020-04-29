<template>
  <div>
    <div>Detail</div>
    <div :key="index"
         v-for="(i,index)in userInfo">
      {{i - userInfo[i]}}</div>
  </div>
</template>
<script>
export default {
  name: "Detail",
  props: {
    msg: String
  },
  asyncData(store, route) {
    console.log(route);
    return store.dispatch("getUserInfo", route.params.id);
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  }
};
</script>