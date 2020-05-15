/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-22 11:51:43
 * @LastEditTime: 2020-05-15 17:19:49
 * @LastEditors: Please set LastEditors
 */
import qs from 'qs';

export function paramsSerializer(params = {}) {
    return qs.stringify(params, {
        arrayFormat: 'brackets'
    });
}

export function isPlainObject(obj) {
    return toString.call(obj) === '[object Object]';
}
