/*
 * @Author: your name
 * @Date: 2020-04-27 09:16:24
 * @LastEditTime: 2020-04-29 16:52:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\entry-client.js
 */
/**   
 * 客户端入口，挂载、激活APP
 * 
 * 1、引入createApp工厂函数
 * 2、在onReady函数中挂载APP
  */
import { createApp } from './app';



const { app, router,store } = createApp();

// 判断window.__INITIAL_STATE__，并加载到state
// 在路由导航之前解析数据
router.onReady(() => { 
  app.$mount('#app');
});
