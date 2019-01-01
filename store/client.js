export default {
    state: {
        page  : '',
        client: ''
    },

    getters: {
        GET_PAGE_DATA(state) {
            return state.page;
        }
    },

    actions: {
        async nuxtServerInit({commit}, {app}) {
            const data = await app.$axios.$get('api/pages/home');

            commit('SET_PAGE_DATA', data);
        }
    },

    mutations: {
        SET_PAGE_DATA(state, data) {
            state.page = data;
        }
    }
};
