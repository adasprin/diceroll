<template>
  <div id="Diceroll">
    <div id="Dicebag">
      <dice @rolled='sendRecord' v-bind:quant="dice.quant" v-bind:faces="dice.faces" v-bind:key="index" v-for="(dice, index) in dicebag"/>
    </div>
    <div id="Table">
      <log v-bind:result="newRecord"/>
      <settings  v-if="showSettings" @hideSettings="showSettings=false"/>
    </div>
    <button @click="showSettings=true" class="showSettings">НА СТРОЙКЕ</button>
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
      defaultDicebag: [{quant: 1, faces: 4 },{quant: 1, faces: 6},{quant: 1, faces: 8},{quant: 1, faces: 10},{quant: 1, faces: 12},{quant: 1, faces: 20}],
      dicebag: Array(),
      newRecord: String(),
      settings: {
        opacitybefore: false,
        sepaeach: 6
      },
      showSettings: false
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
      localStorage.dicebag = JSON.stringify(this.defaultDicebag);
      this.dicebag = JSON.parse(localStorage.dicebag);
    },
    sendRecord (data) {
      var tstamp = new Date().getTime();
      this.newRecord = data.string+'_'+ tstamp;
    }
  },
  components: {dice, log, settings}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#Diceroll {
  margin: 0 auto;
  min-height: 500px;
  padding: 20px;
  color: purple;
  display: flex;
  position: relative;
  background: #ececec;
  width: 700px;
  box-shadow: 0 2px 11px rgba(0, 0, 0, .3);
  border-radius: 2px;
}
#Dicebag { flex: 1;}
#Table { flex: 2;}
.showSettings {
  background: #800080;
  color: #141c26;
  position: absolute;
  bottom: -30px;
  right: 0px;
  border: none;
  font-weight: bold;
  border-radius: 1px;
  padding: 2px 6px;
  font-size: 12px;
}
</style>
