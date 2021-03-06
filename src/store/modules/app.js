/*
 * @Author: your name
 * @Date: 2020-05-14 14:21:12
 * @LastEditTime: 2020-05-15 17:33:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\store\modules\app.js
 */
import services from 'servicesPath/index';

const {
    appAsk
} = services;

const app = {
    namespaced: true,
    state: {
        userInfo: {},
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = {
                ...payload
            };
        },
    },
    actions: {
        getUserInfo({
            commit
        }, params) {
            return appAsk.getUserInfo(params).then(result => {
                const {
                    errcode,
                    data
                } = result;

                if (errcode === 200) {
                    const {
                        userInfo
                    } = data;
                    commit('setUserInfo', userInfo);
                }
            });
        },
    }
};

export default app;
