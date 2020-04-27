/*
 * @Author: your name
 * @Date: 2020-04-26 10:15:46
 * @LastEditTime: 2020-04-27 11:18:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\server\index.js
 */

const express = require('express');
const serverRenderer = require('vue-server-renderer')
const Vue = require('vue');

const server = express();
const app = new Vue({
  template:`<div>hello vue ssr</div>`,
});

const renderer=serverRenderer.createRenderer({})
server.get('/', (req, res) => { 
  renderer.renderToString(app, (err, html) => { 
    try {
      res.end(html);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.end("服务器请求错误！");
    }
  });
});

server.listen(8080, () => {
  console.log('Server running at http://127.0.0.11:8080/');
});
