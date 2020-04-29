/*
 * @Author: your name
 * @Date: 2020-04-26 10:15:46
 * @LastEditTime: 2020-04-29 15:34:28
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
const isProd = process.env.NODE_ENV === 'production'

const app = express();
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})
// 资源引用
app.use('/dist', serve('./dist', true))

function createRenderer() {
  return createBundleRenderer(bundle, {
    template: fs.readFileSync(templatePath, 'utf-8'),
    clientManifest,
  });
}
const renderer = createRenderer();

app.get('*', (req, res) => {
  console.log(req.url);
  
  const context = {
    title: 'vue ssr',
    url: req.url,
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.error(err);
      res.status(500);
      res.end("server error");
    } else {
      res.end(html);
    }
  });
});

app.listen(8080, () => {
  console.log('Server running at http://127.0.0.11:8080/');
});