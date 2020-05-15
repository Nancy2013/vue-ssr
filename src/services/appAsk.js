/*
 * @Author: your name
 * @Date: 2020-05-14 14:26:19
 * @LastEditTime: 2020-05-15 10:03:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\services\appAsk.js
 */
import {
  HTTP_METHOD
} from 'commonPath/config/index';
import {
  reqHandle
} from 'commonPath/ajax';

export default {
  getUserInfo: reqHandle('/user', {
    method: HTTP_METHOD.POST,
  }),
}