import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 99,
        p_count: 0,
        p_id: []
    },
    mutations: {
        justAddItUp(state, payload) {
            return state.count += payload.amount;
        },
        justSubFromIt(state, payload) {
            return state.count -= payload.amount;
        },
        increaseMyCount(state, payload) {
            return state.p_count += payload.trigger;
        },
        addProductID(state, payload) {
            return state.p_id.push(payload.id);
        },
    },
    actions: {
        increment(ctx, payload) {
            ctx.commit('justAddItUp', payload);
        },
        decrement(ctx, payload) {
            ctx.commit('justSubFromIt', payload);
        },
        product_increment(ctx, payload) {
            ctx.commit('increaseMyCount', payload);
        },
        product_id(ctx, payload) {
            ctx.commit('addProductID', payload);
        }
    }
});