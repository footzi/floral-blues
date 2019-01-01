import client from './client';
import dashboard from './dashboard';
import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        modules: {
            client,
            dashboard
        }
    });
};

export default createStore;
