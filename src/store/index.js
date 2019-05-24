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
      { quant: 1, faces: 4 },
      { quant: 1, faces: 6, color: '#cddc39' },
      { quant: 1, faces: 8 },
      { quant: 1, faces: 10 },
      { quant: 1, faces: 12 },
      { quant: 1, faces: 20 },
      { quant: 1, faces: 100 },
      { quant: 1, faces: 4, modif: -5 }],
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
    }
  }
})