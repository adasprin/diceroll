<template>
  <button class="dice" @click='roll'>{{quant}}d{{faces}}</button>
</template>

<script>
export default {
  name: 'dice',
  props: {
    quant: Number,
    faces: Number,
    modif: {
      Number,
      default: function () {
        return 0;
      }
    },
    color: {
      type: String,
      default: function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    }
  },
  methods: {
    roll () {
      function randomNumber (m,n) { m = parseInt(m); n = parseInt(n); return Math.floor( Math.random() * (n - m + 1) ) + m;}
      var quant = this.quant,
          faces = this.faces,
          modif = this.modif,
          color = this.color,
          equal = 0,
          currand = '',
          equallog = [],
          xdy = quant + 'd' + faces;         
      for ( var i = quant; i > 0; i--) {
        currand = randomNumber(1, faces);
        equal = equal + currand;
        equallog.push(currand);
      }
      /*equallog = equallog.slice(0, -3); // Отрезаем последний плюс с пробелами
      equallog = equallog.replace(/\+/gi, '<span>+</span>'); // Оборачиваем плюсик в спанку*/
      equal = equal + modif;
      if (this.$store.state.settings.nullmodif) {
        // Ничего не делаем
      } else {
        equal <= 0 ? equal = 1 : equal;
      }
      var options = {xdy, equal, color, modif, equallog};
      this.$store.commit('addRecord', options);
    }
  }
}
</script>
<style>
</style>
