/*
 * @Author: your name
 * @Date: 2020-04-26 10:15:46
 * @LastEditTime: 2020-05-15 17:26:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\server\index.js
 */
// node后台服务搭建
// TODO 浏览器端打印
const express = require('express');
const path = require('path');
const LRU = require('lru-cache');
const microcache = require('route-cache');
const {
  createBundleRenderer
} = require('vue-server-renderer');
const fs = require('fs');

const resolve = file => path.resolve(__dirname, file);
const isProd = process.env.NODE_ENV === 'production';
const useMicroCache = process.env.MICRO_CACHE !== 'false'; // 页面缓存

const app = express();
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
});
// 资源引用
app.use('/dist', serve('./dist', true));
app.use(microcache.cacheSeconds(1, req => useMicroCache && req.originalUrl));

let renderer;
let readyPromise;

function createRenderer(bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  }));
}

function render(req, res) {
  const context = {
    title: 'vue ssr',
    url: req.url,
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.error(err);
      res.status(500);
      res.end('server error');
    } else {
      res.end(html);
    }
  });
}
const templatePath = resolve('./src/index.template.html');


if (isProd) {
  const bundle = require('./dist/vue-ssr-server-bundle.json'); // 服务器端bundle
  const clientManifest = require('./dist/vue-ssr-client-manifest.json');// 客户端清单文件
  renderer = createRenderer(bundle, {
    template: fs.readFileSync(templatePath, 'utf-8'),
    clientManifest,
  });
} else {
  readyPromise = require('./build/setup-dev-server')(
    app,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options);
    }
  );
}
app.get('*', isProd ? render : (req, res) => {
  readyPromise.then(() => render(req, res));
});

app.listen(8080, '127.0.0.1');
