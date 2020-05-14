/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-22 11:51:43
 * @LastEditTime: 2020-05-14 18:33:29
 * @LastEditors: Please set LastEditors
 */
import {
  HTTP_METHOD,
  DEFAULT_REQ_METHOD,
  URL_DEFAULT_PREFIXER,
  IS_SERIALIZER_PARAMS,
  REQ_TIME_OUT,
} from '../config';
import {
  paramsSerializer,
  isPlainObject
} from '../utils';
import axiosInstance from './axios';

function setAxiosCfg() {
  return {
    paramsSerializer,
    timeout: REQ_TIME_OUT,
    headers: {},
    validateStatus: (status) => true,
  };
}

export function getAxiosInstance() {
  return axiosInstance(setAxiosCfg());
}

export const AJAX = {
  get(url = '', params = {}, opts = {}) {
    return getAxiosInstance().get(url, {
      params,
      ...opts,
    });
  },
  post(url = '', params = {}, opts = {}) {
    return getAxiosInstance().post(url, params, {
      ...opts,
    });
  },
};

const defaultPrefixer = URL_DEFAULT_PREFIXER;

/**
 * @param {String} path
 * @param {Object} opts
 * @prop {GET|POST} method - 请求类型
 * @prop {String} prefixer - url前缀
 * @prop {Boolean} isSerializerParams - 是否序列化提交数据
 */
export function reqHandle(
  path = '', {
    method = DEFAULT_REQ_METHOD,
    prefixer = defaultPrefixer,
    isSerializerParams = IS_SERIALIZER_PARAMS,
    ...props
  } = {
    method: DEFAULT_REQ_METHOD,
    prefixer: defaultPrefixer,
    isSerializerParams: IS_SERIALIZER_PARAMS,
  }
) {
  const reqPath = path.indexOf('/') === 0 ? path.slice(1) : path;
  const reqUrl = /http(s)?:\/\//.test(reqPath) ?
    reqPath :
    `${prefixer}/${reqPath}`;

  return (params) => {
    let reqParams = params;
    if (
      isSerializerParams &&
      method.toUpperCase() === HTTP_METHOD.POST &&
      (isPlainObject(reqParams) || Array.isArray(reqParams))
    ) {
      reqParams = paramsSerializer(reqParams);
    }
    return AJAX[method.toLowerCase()](reqUrl, reqParams, {
      ...props,
    });
  };
}