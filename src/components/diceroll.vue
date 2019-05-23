<template>
  <div id="Diceroll">
    <div id="Table">
      <div id="Dicebag">
        <dice @rolled='sendRecord' 
          :quant="dice.quant" 
          :faces="dice.faces" 
          :modif="dice.modif" 
          :key="index"
          :color="dice.color" v-for="(dice, index) in dicebag"/>
      </div>
      <log/>
    </div>
    <div id="Controls">
      <button class="controls-action" @click="resetdicebag()">Ресет</button>
      <button class="controls-action" @click="clearLog()">Очистить лог</button>
      <button class="controls-action" @click="opndDicecreator=true">Добавить кубик</button>
      <dicecreator v-if="opndDicecreator" @closeDicecreator="opndDicecreator=false"/>

      <button class="controls-action" @click="opndSettings=true">Настройки</button>
      <settings v-if="opndSettings" @hideSettings="opndSettings=false"/>

    </div>
  </div>
</template>

<script>
import dice from '@/components/dice.vue';
import log from '@/components/log.vue';
import settings from '@/components/settings.vue';
import dicecreator from '@/components/dicecreator.vue';
export default {
  name: 'diceroll',
  data: function () {
    return {
      dicebag: Array(),
      settings: {
        opacitybefore: false,
        sepaeach: 6
      },
      opndSettings: false,
      opndDicecreator: false
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
  components: {dice, log, settings, dicecreator}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#Diceroll {
  margin: 0 auto;
  width: 686px;
}
#Table {
  padding: 26px;
  display: flex;
  justify-content: space-between;
  position: relative;
  background: #ececec;
  box-shadow: 0 2px 11px rgba(0, 0, 0, .3);
  border-radius: 2px;
}
#Dicebag { width: 200px;}
#Controls {
  display: flex;
  padding-top: 4px;
  justify-content: flex-end;
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
  border: 1px solid #800080;
  text-transform: uppercase;
}
.controls-action:hover {
  background: #9a2f9a;
}
.controls-action:focus {
  border: 1px dotted #ca3cca;;
}
</style>
