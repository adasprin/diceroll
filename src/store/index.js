import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
    settings: {
      nullmodif: false,
      critical: true
    },
    dicebag: {},
    log: [],
    sepaeach: 6,
    counter: 0
  },
  mutations: {
    addRecord (state, record) {
      if (state.counter==state.sepaeach) {
        state.log.unshift({issepa: true});
        state.counter = 0;
      }
      state.log.unshift(record);
      state.counter++;
    },/*
    entropyRecord (state, index) {
      //record = 'enfjnu374g';
      //state.log.splice(index, 1);
      Vue.set(state.log, index, 'R%40h834g907398h25rrg333');
      //console.log(state.log);
    },*/
    clearLog (state) {
      state.log.splice(0, state.log.length);
      state.counter = 0;
    },
    changeSepaeach (state, value){
      //var newval = value.replace(/\D+/g,"");
      //console.log(typeof(value));
      state.sepaeach = value;
      state.counter = 0;
    }
  }
})