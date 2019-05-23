import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
    log: [],
    settings: {
      negativeresult: false,
      critical: true,
      sepaeach: 6,
      opacitybefore: false
    },
    defaultDicebag: [
      {quant: 1, faces: 4},
      {quant: 1, faces: 6, color: '#cddc39'},
      {quant: 1, faces: 8},
      {quant: 1, faces: 10},
      {quant: 1, faces: 12},
      {quant: 1, faces: 20},
      {quant: 1, faces: 100},
      {quant: 1, faces: 4, modif: -5}
    ],
    dicebag: [],
    counter: 0
  },
  mutations: {
    addRecord (state, record) {
      if (state.counter==state.settings.sepaeach) {
        state.log.unshift({issepa: true});
        state.counter = 0;
      }
      state.log.unshift(record);
      state.counter++;
    },
    clearLog (state) {
      console.log('!');
      state.log = [];
      state.counter = 0;
    },
    changeSetting (state, options) {
      state.settings[options.setting] = options.data;
    },
    changeSepaeach (state, value){
      state.settings.sepaeach = value;
      state.counter = 0;
    },
    changeCritical (state, value) {
      state.settings.critical = value;
    },
    addDice (state, value) {
      state.dicebag.push(value);
      // Синхронизировать с ЛОКАЛСТОРАГЕ!
    }
  }
})