<template>
  <div id="Log">
    <div class="log-list">
      <div @click="entropy(index)" class="record" v-bind:key="index" v-for="(record, index) in records">{{record}}</div>
    </div>
    <div class="log-setup">
      <button class="log-clear" @click="clearLog()">Х</button>
      <button>{{this.$store.state.log.length}}</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'log',
  props: {
    result: String()
  },
  methods: {
    clearLog: function(){
      this.$store.commit('clearLog');
    },
    entropy: function (index) {
      this.$store.commit('entropyRecord', index);
      this.counter ++;
    }
  },
  watch: {},
  data: function (){
    return {
      records: this.$store.state.log
    }
  },
  computed: {}
}
      /*console.log(
        `%c Сообщение %c ${newVal} %c`,
        'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#41b883; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
        'background:transparent'
      )*/
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
#Log {

  border-radius: 2px;
  padding: 10px;
  height: 250px;
  overflow: auto;
  font-family: 'Comfortaa', cursive;
}
.log-list {
  border: 1px solid purple;
  padding: 10px;
}
.log-clear {
  width: 25px; height: 25px;
  background: #800080;
  border: none;
  /*box-shadow: 0 2px 4px rgba(0, 0, 0 , .3);*/
  color: #fff;
}
</style>
