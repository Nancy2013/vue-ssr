/*
 * @Author: your name
 * @Date: 2020-04-27 09:16:24
 * @LastEditTime: 2020-04-27 10:10:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\entry-server.js
 */
// 服务端入口，渲染首屏
// 通过createAPP 创建APP实例
// 使用context参数
// 返回promise
// 进入首屏，向router中push url
// 在router.onReady中返回APP

import { createApp } from './app';

export default (context) => { 
  return new Promise((resolve, reject) => { 
    const { app, router } = createApp();
    const { url } = context;
    router.push(url);
    router.onReady(() => {
      resolve(app);
    }, reject).catch(reject);
  })
}


