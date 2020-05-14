/*
 * @Author: your name
 * @Date: 2020-04-28 09:55:59
 * @LastEditTime: 2020-05-14 18:24:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\store\actions.js
 */
import service from '../services/index';
const { appAsk } = service;

export default {
    getUserInfo({
        commit
    }, params) {
        return appAsk.getUserInfo(params).then(result => {
            const { status, data } = result.data;
        
            if (status === '0') {
                const { userInfo } = data;
                commit('setUserInfo', userInfo);
             }

        })
    },
}