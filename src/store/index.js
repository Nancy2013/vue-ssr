/*
 * @Author: your name
 * @Date: 2020-04-28 09:53:06
 * @LastEditTime: 2020-04-28 09:56:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\store\index.js
 */

import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      userInfo: {},
    },
    getters,
    mutations,
    actions,
  });
}