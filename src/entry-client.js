/*
 * @Author: your name
 * @Date: 2020-04-27 09:16:24
 * @LastEditTime: 2020-04-27 10:12:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\entry-client.js
 */
// 挂载、激活APP
// 使用createAPP创建APP实例
// 引入APP，router
// 在onReady中挂载APP

import { createApp } from './app';


const { app, router } = createApp();

router.onReady(() => { 
  app.$mount('#app');
});
