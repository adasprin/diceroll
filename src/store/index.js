import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
    settings: {
      negativeresult: false,
      critical: true,
      sepaeach: 6,
      opacitybefore: false
    },
    defaultDicebag: [
      { quant: 1, faces: 6, color: '#cddc39' },
      { quant: 1, faces: 12, color: '#f44336' },
      { quant: 1, faces: 4, color: '#9c27b0'},
      { quant: 1, faces: 8, color: '#ff9800' },
      { quant: 1, faces: 10, color: '#00bcd4' },
      { quant: 1, faces: 20, color: '#03a9f4' },
      { quant: 1, faces: 2, color: '#795548' },
      { quant: 2, faces: 100, color: '#4caf50' }
    ],
    dicebag: [],
    log: [],
    counter: 0
  },
  mutations: {
    addRecord(state, record) {
      if (state.counter == state.settings.sepaeach && state.settings.sepaeach != 0) {
        state.log.unshift({ issepa: true });
        state.counter = 0;
      }
      state.log.unshift(record);
      state.counter++;
    },
    clearLog(state) {
      state.log.splice(0, state.log.length);
      state.counter = 0;
    },
    changeSetting(state, options) {
      state.settings[options.setting] = options.data;
      if (options.setting == 'sepaeach') {
        state.counter = 0;
      }
    },
    addDice(state, value) {
      state.dicebag.push(value);
      // Синхронизировать с ЛОКАЛСТОРАГЕ!
    },
    applyUserDicebag(state) {
      state.dicebag = JSON.parse(localStorage.dicebag);
    },
    saveUserDicebag(state) {
      localStorage.dicebag = JSON.stringify(state.dicebag);
    }
  }
})