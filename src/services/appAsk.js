/*
 * @Author: your name
 * @Date: 2020-05-14 14:26:19
 * @LastEditTime: 2020-05-14 18:15:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\services\appAsk.js
 */
import { HTTP_METHOD } from './../common/config/index';
import { reqHandle } from './../common/ajax';

export default {
  getUserInfo: reqHandle('/user', {
    method: HTTP_METHOD.POST,
  }),
}