/*
 * @Author: your name
 * @Date: 2020-04-27 09:16:24
 * @LastEditTime: 2020-04-27 13:52:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\app.js
 */
/**  
 * 创建vue实例，并返回app实例与router对象
 * 
 * 1、引入Vue模块，createRouter工厂函数
 * 2、引入App界面
 * 3、创建createAPP工厂函数
 * 4、返回app、router
 * 5、服务器端不需要挂载
 */

import Vue from 'vue';
import App from './App.vue'
import { createRouter } from './router'

export function createApp() { 
  const router = createRouter();
  const app=new Vue({
    router,
    render:h=>h(App),
  });

  return {app,router}
}