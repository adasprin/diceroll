<template>
  <button class="dice" @click='roll'>{{quant}}d{{faces}}</button>
</template>

<script>
export default {
  name: 'dice',
  props: {
    quant: Number,
    faces: Number,
    color: String,
    modif: Number
  },
  methods: {
    roll () {
      this.$emit('rolled', {
        string:  this.quant + 'd' + this.faces
      })
    }
  }
}
</script>
<style>
</style>
