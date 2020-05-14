/*
 * @Author: your name
 * @Date: 2020-05-14 14:21:12
 * @LastEditTime: 2020-05-14 18:26:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\store\modules\app.js
 */
import service from '../../services/index';
const {
    appAsk
} = service;

const app = {
    namespaced: true,
    state: {
        userInfo: {},
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = {
                ...payload
            }
        },
    },
    actions: {
        getUserInfo({
            commit
        }, params) {
            return appAsk.getUserInfo(params).then(result => {
                const {
                    status,
                    data
                } = result;

                if (status === '0') {
                    const {
                        userInfo
                    } = data;
                    commit('setUserInfo', userInfo);
                }

            })
        },
    }
}

export default app;