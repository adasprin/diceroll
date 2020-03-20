<template>
  <modal :showTitle="false" theme="dim" title="Что такое Кубомёт?" :showActions="false">
    <img src="/img/logo.f219458f.png" id="About-logo" alt="Кубомёт - Diceroll">
    <div>Кубомёт — это программа, которая иммитирует бросок игровых кубиков.</div>
    <hr>
    <div>Почта для отзывов и предложений: <a href='mailto:replaceme@replaceme.replaceme'>replaceme@greplacememail.replaceme</a></div>
    <hr>
    <button class="modal-btn" @click="closeAbout()">Понятно</button>
  </modal>
</template>
<script>
import modal from '@/components/modal.vue';
export default {
  name: 'about',
  components: {modal},
  methods: {
    closeAbout: function (){
      this.$emit('closeAbout');
    }
  }
}
</script>
<style>
#About-logo {
  width: 100%;
}
</style>
