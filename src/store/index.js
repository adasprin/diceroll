import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
    settings: {
      negativeresult: false,
      critical: true,
      sepaeach: 6
    },
    defaultDicebag: [{quant: 1, faces: 4},{quant: 1, faces: 6},{quant: 1, faces: 8},{quant: 1, faces: 10},{quant: 1, faces: 12},{quant: 1, faces: 20},{quant: 3, faces: 4, modif: -5}],
    dicebag: {},
    log: [],
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
      state.log.splice(0, state.log.length);
      state.counter = 0;
    },
    changeSetting (state, options) {
      //console.log(options.setting, options.data);
      state.settings[options.setting] = options.data;

      //var newval = value.replace(/\D+/g,"");
      //console.log(typeof(value));
    },
    changeSepaeach (state, value){

      state.settings.sepaeach = value;
      state.counter = 0;
    },
    changeCritical (state, value) {
      state.settings.critical = value;
    }
  }
})