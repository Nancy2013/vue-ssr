/*
 * @Author: your name
 * @Date: 2020-05-14 14:21:12
 * @LastEditTime: 2020-05-14 14:31:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\store\modules\app.js
 */
import axios from 'axios';

const app = {
    namespaced:true,
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
        }, id) {
            const url = 'https://www.fastmock.site/mock/e398c1e27a9fdac16c810a30b03ddb6a/vuessr/user';
            return axios.get(`${url}/${id}`).then(result => {
                const {
                    status,
                    data
                } = result.data;
                if (status === '0') {
                    const {
                        userInfo
                    } = data;
                    commit('setUserInfo', userInfo);
                }

            }).catch(err => {
                console.error(err);
            });

        },
    }
}

export default app;