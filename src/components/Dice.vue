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
      this.$store.commit('addRecord', 'Бросок №');
    }
  }
}
</script>
<style>
</style>
