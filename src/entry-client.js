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
import {
  createApp
} from './app';

const {
  app,
  router,
  store
} = createApp();

// 客户端数据预取
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
// 在路由导航之前解析数据
router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);
    let diffed = false;

    // 过滤非预渲染的组件，以及重新渲染的组件
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c));
    });

    if (!activated.length) {
      next();
    }

    Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({
          store,
          route: to
        })
      }
    })).then(() => {

      // 停止加载指示器(loading indicator)

      next()
    }).catch(next)
  });
  app.$mount('#app');
});