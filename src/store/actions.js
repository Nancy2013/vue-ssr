/*
 * @Author: your name
 * @Date: 2020-04-28 09:55:59
 * @LastEditTime: 2020-04-30 16:55:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\store\actions.js
 */
import axios from 'axios';
export default {
    getUserInfo({
        commit
    }, id) {
        const url = 'https://www.fastmock.site/mock/e398c1e27a9fdac16c810a30b03ddb6a/vuessr/user';
        return axios.get(`${url}/${id}`).then(result => {
            const { status, data } = result.data;
        
            if (status === '0') {
                const { userInfo } = data;
                commit('setUserInfo', userInfo);
             }

        }).catch(err => {
            console.error(err);
        });

    },
}