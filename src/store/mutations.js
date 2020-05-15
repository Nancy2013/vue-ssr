/*
 * @Author: your name
 * @Date: 2020-04-28 09:55:51
 * @LastEditTime: 2020-05-15 17:20:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ssr\src\store\mutations.js
 */
export default {
    setUserInfo(state, payload) {
        state.userInfo = {
            ...payload
        };
    },
};
