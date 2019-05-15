<template>
  <div id="Diceroll">
    <div id="Dicebag">
      <dice @rolled='sendRecord' v-bind:quant="dice.quant" v-bind:faces="dice.faces" v-bind:modif="dice.modif" v-bind:key="index" v-for="(dice, index) in dicebag"/>
    </div>
    <div id="Table">
      <log/>
      <settings v-if="opndSettings" @hideSettings="opndSettings=false"/>
    </div>
    <div id="Controls">
      <button class="controls-action" @click="opndSettings=true">НАСТРОЙКИ</button>
      <button class="controls-action" @click="resetdicebag()">РЕСЕТ</button>
      <button class="controls-action">INFO: {{this.$store.state.log.length}}</button>
      <button class="controls-action" @click="clearLog()">Х</button>
    </div>
  </div>
</template>

<script>
import dice from '@/components/dice.vue';
import log from '@/components/log.vue';
import settings from '@/components/settings.vue';
export default {
  name: 'diceroll',
  data: function () {
    return {
      dicebag: Array(),
      settings: {
        opacitybefore: false,
        sepaeach: 6
      },
      opndSettings: false
    }
  },
  mounted() {
    if (localStorage.dicebag) {
      this.dicebag = JSON.parse(localStorage.dicebag);
    } else {
      this.resetdicebag();
    }
  },
  watch: {
    dicebag(newDicebag) {
      localStorage.dicebag = JSON.stringify(newDicebag);
    }
  },
  methods: {
    // Устанавливаем дефолтные кубы
    resetdicebag: function(){
      localStorage.dicebag = JSON.stringify(this.$store.state.defaultDicebag);
      this.dicebag = JSON.parse(localStorage.dicebag);
    },
    sendRecord (data) {
      var tstamp = new Date().getTime();
      this.newRecord = data.string+'_'+ tstamp;
    },
    clearLog: function(){
      this.$store.commit('clearLog');
    }
  },
  components: {dice, log, settings}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#Diceroll {
  margin: 0 auto;
  padding: 26px;
  display: flex;
  position: relative;
  background: #ececec;
  width: 700px;
  box-shadow: 0 2px 11px rgba(0, 0, 0, .3);
  border-radius: 2px;
}
#Dicebag { flex: 1;}
#Table { flex: 2;}
#Controls {
  position: absolute;
  bottom: -30px;
  right: 0px;
}
.controls-action {
  background: #800080;
  color: #141c26;
  border: none;
  font-weight: bold;
  border-radius: 1px;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 4px;
  border: 1px dotted #800080;
}
.controls-action:hover {
  background: #9a2f9a;
}
.controls-action:focus {
  border: 1px dotted #ca3cca;;
}
</style>
