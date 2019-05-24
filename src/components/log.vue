<template>
  <div id="Log">
    <div :class="['log-list', this.$store.state.settings.opacitybefore ? 'log-list-opacitybefore' : false]">
      <transition name="fail">
        <div v-if="this.$store.state.log.length == 0" :class="['log-list-cover', this.$store.state.log.length != 0 ? 'log-list-hidden' : false]"></div>
      </transition>
      <div class="log-item" :class="[index == 0 ? 'log-item-first' : false]" :key="index" v-for="(record, index) in records">
        <div v-if="!record.issepa">
          <div class="log-rec" :style="{'border-left-color': record.color}">
            <div class="log-rec-equal" :style="{'color': record.color}">{{record.equal}}<span class="log-rec-crit">cr hit</span></div>
            <div class="log-rec-xdym">{{record.xdy}}{{(record.modif != 0) ? record.modif : ''}}</div>
            <div v-if="record.equallog.length > 1" class="log-rec-equallog">
              <span :key="index" v-for="(roll, index) in record.equallog">{{roll}}<span class="log-rec-equallog-plus" v-if="index+1 != record.equallog.length"> + </span></span>
            </div>
          </div>
        </div>
        <hr v-else>
      </div>
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
  },
  watch: {},
  data: function (){
    return {
      records: this.$store.state.log
    }
  },
  computed: {}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
#Log {
  width: 400px;
  position: relative;
}
.log-list {
  overflow-y: auto;
  height: inherit;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  height: 450px;
  background-color: #fff;
}

.log-list-cover { 
  background: url(../assets/log_bg_1.png) no-repeat center; background-size: 250px; content: ''; position: absolute;
  /*background: url(../assets/myr.gif) no-repeat center; background-size: 250px; content: ''; position: absolute; */
  top: 0; left: 0; right: 0; bottom: 0;
  opacity: 1;
  /*transition: 500ms ease-in-out opacity;*/
}
.fail-enter-active, .fail-leave-active {
  transition: opacity .5s;
}
.fail-enter, .fail-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
/*.log-list-cover-hidden { opacity: 0;}*/
.log-list-opacitybefore .log-item { opacity: .5;}
.log-list-opacitybefore .log-item:nth-child(1), .log-list-opacitybefore .log-item:hover { opacity: 1;}

.log-rec {
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: #ccc;
  padding: 10px 10px 10px 20px;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
}
.log-rec:hover { opacity: 1; background: #fbfbfb;}
.log-item-first .log-rec { font-size: 28px; opacity: 1;}
.opaclogold .LogReс:hover,.LogReс:hover { opacity: 1; background: #fbfbfb;}
.log-rec > div { flex-grow: 1;}
.log-rec-crit { font-size: 16px; }
/*.LogRecResult { text-align: right;}*/
.log-rec-xdym { text-align: right;}
.log-rec-equallog { width: 100%; font-size: 14px;}
.log-rec-equallog .log-rec-equallog-plus { color: #b7b7b7;}

/* СКРОЛЛ */
.log-list::-webkit-scrollbar { width: 10px; height: 6px; }
.log-list::-webkit-scrollbar-button { width: 0px; height: 0px;}
.log-list::-webkit-scrollbar-thumb { background: #e1e1e1; border: 0px none #ffffff; border-radius: 2px;}
.log-list::-webkit-scrollbar-thumb:hover { background: #bbb;}
.log-list::-webkit-scrollbar-thumb:active { background: #9e9e9e;}
.log-list::-webkit-scrollbar-track { border: 0px none #ffffff; border-radius: 5px;}
.log-list::-webkit-scrollbar-track:hover {}
.log-list::-webkit-scrollbar-track:active {}
.log-list::-webkit-scrollbar-corner { background: transparent;}
/*/ СКРОЛЛ */
</style>
