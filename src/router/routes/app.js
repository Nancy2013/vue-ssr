/*
 * @Author: your name
 * @Date: 2020-05-13 17:33:45
 * @LastEditTime: 2020-05-15 17:19:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\router\routes\app.js
 */
const About = () => import('../../views/About.vue');
const Detail = () => import('../../views/Detail.vue');

const app = [
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
  },
];

export default app;
