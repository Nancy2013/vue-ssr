/*
 * @Author: your name
 * @Date: 2020-04-27 09:16:24
 * @LastEditTime: 2020-04-29 16:37:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\entry-server.js
 */
/**   
 * 服务端入口，渲染首屏
 * 
 * 1、引入createApp工厂函数
 * 2、使用context参数
 * 3、进入首屏，push url
 * 4、在onReady函数中调用resolve函数
 */

import { createApp } from './app';

export default (context) => { 
  return new Promise((resolve, reject) => { 
    const { app, router,store } = createApp();
    const { url } = context;
    router.push(url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // console.log(matchedComponents);
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }
      // 使用Promise.all方法遍历路由
      // 如果组件暴露asyncData方法，需要先请求数据，并传递store、当前路由
      // 将请求结果添加入context，返回app
      resolve(app);
    }, reject);
  })
}


