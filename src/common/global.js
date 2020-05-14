/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-22 11:51:43
 * @LastEditTime: 2019-09-29 13:29:07
 * @LastEditors: Please set LastEditors
 */
const packageConfig = require('../../package.json');
/* 全局变量 */
export default {
  THEME_COLOR: packageConfig.theme['@theme-color'],
  MAX_LEN: 1000,
  TIME_OUT: 5000, // 超时时长
  TIME_INTERVAL: 10000, // 轮循时间间隔
  EXPIRE_TIME: 24, // token过期时长 hour
  TIME_FOEMAT: 'YYYY-MM-DD HH:mm:ss', // 格式化时间
  TIME_EFFECETIVE: 'YYYY-MM-DDTHH:mm:ss', // 格式化时间
  TIME_LOG: 'YYYY-MM-DD', // 格式化时间
  TIME_EXPERIENCE: 'mm分ss秒', // 格式化体验时间
  TIME_FORMAT_TIMING: 'HH:mm', // 定时时间格式
  NAME_MAX_LEN: 20,
  MAX_TREE_LEVEL: 4, // tree 的最大层级为4级
  PAGE_SIZE: 15, // 每页条数
  PAGE_SIZE_S: 10, // 每页条数-较少
  PAGE_SIZE_XS: 8, // 每页条数-少
  QQ_KEY: '2DGBZ-ZAHR6-WSOSH-MHEYM-GHFZF-BEFIR', // QQ WebService API Key
  IMG_WIDTH: 200, // 图片宽
  IMG_HEIGHT: 150, // 图片高
  FOLDER_TYPE: {
    product: '1', // 产品
    sitelocation: '2', // 站点
    device: '3', // 设备
  }
};
