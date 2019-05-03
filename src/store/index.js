import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
    settings: {},
    dicebag: {},
    log: []
  },
  mutations: {
    addRecord (state, record) {
      state.log.unshift(record + (state.log.length + 1));
    },
    entropyRecord (state, index) {
      //record = 'enfjnu374g';
      //state.log.splice(index, 1);
      Vue.set(state.log, index, 'R%40h834g907398h25rrg333');
      //console.log(state.log);
    },
    clearLog (state) {
      state.log.splice(0, state.log.length)
    }
  }
})