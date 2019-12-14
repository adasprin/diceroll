<template>
  <button :class="['dice', quant > 99 || faces > 99 ? 'dice-longtext' : false ]" @click='roll'>
    <span class="dice-color" :style="{'background-color': color}"></span>
    <span>{{quant}}d{{faces}}</span>
    <span v-if="modif != 0" class="dice-modif" :style="{'color': color}">{{modif > 0 ? '+' + modif : modif}}</span>
  </button> 
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
          equallog = '',
          xdy = quant + 'd' + faces;         
      for ( var i = quant; i > 0; i--) {
        currand = randomNumber(1, faces);
        equal = equal + currand;
        if (i > 1) {
          equallog += currand + '<span class="log-rec-equallog-plus"> + </span>';
        } else {
          equallog += currand;
        }
      }
      if (quant == 1 && faces == 20) {
        if (equal == 20) {
          crit = 'CRIT_HIT';
        } else if (equal == 1) {
          crit = 'CRIT_FAIL';
        }
      }
      equal = equal + modif;
      if (!this.$store.state.settings.negativeresult) {
        equal <= 0 ? equal = 1 : equal;
      }
      var options = {xdy, equal, color, modif, equallog, crit, quant};
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
    line-height: 23px;
    vertical-align: top;
  }
  .dice-longtext { font-size: 16px;}
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
  .dice-modif {
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 200;
    color: #d1d1d1;
    background: #f3f3f3;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid #dbdbdb;
  }
  .dice:focus .dice-modif{
    border: 1px dotted #8a8a8a;
  }
  .dice:hover .dice-modif {
    border: 1px solid rgb(198,198,198);
  }
</style>
