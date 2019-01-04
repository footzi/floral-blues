export default {
    state: {
        page      : '',
        mobileMenu: false
    },

    getters: {
        GET_PAGE_DATA(state) {
            return state.page;
        },

        GET_STATE_MOBILE_MENU(state) {
            return state.mobileMenu;
        }
    },

    actions: {
        async nuxtServerInit({commit}, {app}) {
            const data = await app.$axios.$get('api/pages/home');

            commit('SET_PAGE_DATA', data);
        },

        // Экшен клика по бургеру
        mobileMenuChange({commit}) {
            commit('SET_STATE_MOBILE_MENU');
        }
    },

    mutations: {
        SET_PAGE_DATA(state, data) {
            state.page = data;
        },

        // Меняет состояние по клику на бургер
        SET_STATE_MOBILE_MENU(state) {
            state.mobileMenu = !state.mobileMenu;
        }
    }
};
