/*
 * @Author: your name
 * @Date: 2020-04-27 09:16:24
 * @LastEditTime: 2020-04-29 15:43:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\router\index.js
 */
/** 
 * 1、异步引入组件
   2、创建createRouter工厂函数
   3、返回router实例，为避免数据污染
   4、设置hash：'history'，后端无法拿到'#'后面的路径
 */
import Vue from 'vue';
import Router from 'vue-router'

// 注册全局插件
Vue.use(Router);
const Home = () => import('../views/Home.vue');
const Detail = () => import('../views/Detail.vue');
const About = () => import('../views/About.vue');

export function createRouter() {
  // 返回路由实例
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect:'/home',
      }, {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/detail',
        name: 'detail',
        component: Detail,
      },
      {
        path: '/about',
        name: 'about',
        component: About,
      },
    ]
  });
}