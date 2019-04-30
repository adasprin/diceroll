<template>
  <div class="Diceroll">
    <div id="Dicebag">
      <button v-bind:key="dice.id" v-for="dice in Dicebag">{{dice.name}}</button>
      <dice></dice>
    </div>
    Тут Лог
    Тут настройке
    <button @click="resetDicebag">gjxbcnbnm</button>
  </div>
</template>

<script>
import dice from '@/components/dice.vue'
export default {
  name: 'Diceroll',
  props: {
    msg: String
  },
  data: function () {
    return {
      defaultDicebag: [{id: 0, name: 'куб№1'},{id: 3,name: 'куб№2'},{id: 4,name: 'куб№3'}],
      Dicebag: [],
      log: []
    }
  },
  mounted() {
    if (localStorage.Dicebag) {
      this.Dicebag = JSON.parse(localStorage.Dicebag);
    } else {
      this.resetDicebag();
    }
  },
  watch: {
    Dicebag(newDicebag) {
      localStorage.Dicebag = JSON.stringify(newDicebag);
    }
  },
  methods: {
    resetDicebag: function(){
      localStorage.Dicebag = JSON.stringify(this.defaultDicebag);
      this.Dicebag = JSON.parse(localStorage.Dicebag);
    }
  },
  components: {dice}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
