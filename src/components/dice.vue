<template>
  <button class="dice" @click='roll'>
    <span class="dice-color" :style="{'background-color': color}"></span>
    {{quant}}d{{faces}}</button>
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
          crit = false,
          currand = '',
          equallog = [],
          xdy = quant + 'd' + faces;         
      for ( var i = quant; i > 0; i--) {
        currand = randomNumber(1, faces);
        equal = equal + currand;
        equallog.push(currand);
      }
      if (quant == 1 && faces == 20) {
        if (equal == 20) {
          crit = 'CRIT_HIT';
        } else if (equal == 1) {
          crit = 'CRIT_FAIL';
        }
        
      }
      equal = equal + modif;
      if (!this.$store.state.settings.nullmodif) {
        equal <= 0 ? equal = 1 : equal;
      }
      var options = {xdy, equal, color, modif, equallog, crit};
      this.$store.commit('addRecord', options);
    }
  }
}
</script>
<style>
  .dice {
    display: inline-block;
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
    margin: 0 20px 20px 0;
    width: 90px;
    font-family: arial,sans-serif;
    font-weight: bold;
    text-decoration: none;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    background: rgb(245,245,245) linear-gradient(#f4f4f4, #f1f1f1);
    position: relative;
  }
  .dice:nth-child(2n) {
    margin-right: 0;
  }
  .dice:hover {
    color: rgb(24,24,24);
    border: 1px solid rgb(198,198,198);
    background: #f7f7f7 linear-gradient(#f7f7f7, #f1f1f1);
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }
  .dice:focus {
    border: 1px dotted #8a8a8a;
  }
  .dice:active {
    color: rgb(51,51,51);
    border: 1px solid rgb(204,204,204);
    background: rgb(238,238,238) linear-gradient(rgb(238,238,238), rgb(224,224,224));
    box-shadow: 0 1px 2px rgba(0,0,0,.1) inset;
  }
  .dice-color {
    position: absolute;
    width: 4px;
    top: 3px;
    left: 3px;
    bottom: 3px;
    border-radius: 4px;
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25);
    display: block;
    background-color: #dadada;
  }
</style>
