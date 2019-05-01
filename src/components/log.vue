<template>
  <div id="Log">
    <div class="log-list">
      <div class="record" :title="'Бросок номер: ' + (index + 1)" v-bind:key="index" v-for="(record, index) in records">{{record}}</div>
      <div class="">{{recordsquan}}</div>
    </div>
    <div class="log-setup">
      <button class="log-clear" @click="clearLog()">Х</button>
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
      this.records = [];
    }
  },
  watch: {
    result: function(newVal) {
      this.records.unshift(newVal);
      console.log(
        `%c Сообщение %c ${newVal} %c`,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
        'background:transparent'
      )
    }
  },
  data: function (){
    return {
      records: ['Броски будут тут :3']
    }
  },
  computed: {
    recordsquan: function () {
      return this.records.length;
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
#Log {
  border: 1px solid purple;
  border-radius: 2px;
  padding: 10px;
  height: 250px;
  overflow: auto;
  font-family: 'Comfortaa', cursive;
}
.log-clear {
  border-radius: 100%;
  width: 25px; height: 25px;
  background: #800080;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0 , .3);
  color: #fff;
}
</style>
