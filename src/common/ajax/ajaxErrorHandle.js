/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-22 11:51:43
 * @LastEditTime: 2020-05-15 17:31:22
 * @LastEditors: Please set LastEditors
 */
/**
 * ajax 错误处理
 * @see 具体参数文档 - https://github.com/mzabriskie/axios#response-schema
 */
import {
  DEFAULT_ERR_MSG
} from '../config';

export function ajaxFulFilledHandle(data = {}, config) {
  return new Promise((resolve, reject) => {
    const {
      errmsg,
      errcode,
    } = data;
    let errMsg = JSON.stringify(errmsg || DEFAULT_ERR_MSG);
    if (errcode === 200) {
      // 返回成功
      resolve(data);
    } else {
      if (errMsg.length > 100) {
        errMsg = `${errMsg.slice(0, 100)}...`;
      }
      console.error(errMsg);
      reject(data);
    }
  });
}

export function ajaxRejectedHandle(err) {
  console.error('ajax err', err);
  const {
    response
  } = err;
  console.error(response.statusText);
  return Promise.reject(err);
}
