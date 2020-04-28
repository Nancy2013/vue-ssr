/*
 * @Author: your name
 * @Date: 2020-04-26 10:15:46
 * @LastEditTime: 2020-04-28 14:06:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\server\index.js
 */
// node后台服务搭建
const express = require('express');
const path = require('path');
const {
  createBundleRenderer
} = require('vue-server-renderer')
const fs = require('fs');
const resolve = file => path.resolve(__dirname, file);
const bundle = require('./dist/vue-ssr-server-bundle.json'); // 服务器端bundle
const clientManifest = require('./dist/vue-ssr-client-manifest.json') // 客户端清单文件
const templatePath = resolve('./src/index.template.html')


const server = express();

function createRenderer() {
  return createBundleRenderer(bundle, {
    template: fs.readFileSync(templatePath, 'utf-8'),
    clientManifest,
  });
}
const renderer = createRenderer();

server.get('/', (req, res) => {
  const context = {
    title: 'vue ssr',
    url: req.url,
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      res.end(html);
    } else {
      console.error(err);
      res.status(500);
      res.end("服务器请求错误！");
    }
  });
});

server.listen(8080, () => {
  console.log('Server running at http://127.0.0.11:8080/');
});