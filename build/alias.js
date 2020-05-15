/*
 * @Author: your name
 * @Date: 2020-05-15 09:55:10
 * @LastEditTime: 2020-05-15 10:53:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\build\alias.js
 */ 
const path = require('path');
const srcRoot = path.resolve(__dirname, '../src');

module.exports = {
  '@': srcRoot,
  commonPath: '@/common',
  componentsPath: '@/components',
  mixinsPath: '@/mixins',
  routerPath: '@/router',
  servicesPath: '@/services',
  storePath: '@/store',
  stylesPath: '@/styles',
  viewsPath: '@/views',
}