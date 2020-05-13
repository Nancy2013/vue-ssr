import axios from 'axios';

const app = {
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