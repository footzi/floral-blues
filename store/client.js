// eslint-disable-next-line no-process-env
const domen = process.env.NODE_ENV === 'developmen' ? 'http://localhost:3030' : 'https://vue-ecomboard.herokuapp.com';

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
            // const page = app.context.route.name;
            const data = await app.$axios.$get(`${domen}/api/test`);

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
