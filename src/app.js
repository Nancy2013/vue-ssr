/*
 * @Author: your name
 * @Date: 2020-04-27 09:16:24
 * @LastEditTime: 2020-05-15 11:21:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\app.js
 */
/**
 * 创建vue实例，并返回app实例与router对象
 *
 * 1、引入Vue模块，createRouter、createStore工厂函数
 * 2、引入App界面
 * 3、创建createAPP工厂函数
 * 4、返回app、router
 * 5、服务器端不需要挂载
 */
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import {
  createRouter
} from './router';
import { createStore } from './store';


export function createApp() {
  const router = createRouter();
  const store = createStore();

  // 与store同步路由，注册`store.state.route`
  sync(store, router);
  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });

  return {
    app,
    router,
    store,
  };
}
