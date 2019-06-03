<template>
  <modal title="Настройки" @hideModal="hideSettings">    
    <div class="modal-content-title">Разделитель</div>
    <input class="modal-inp" v-model.number="sepaeach" type="number">
    <div class="modal-content-anno">Разделитель будет размещен после указанного количества бросков. Укажтите 0 чтобы убрать разделитель.</div>
    <hr>
    <div class="modal-content-title">
      <checkbox @change="changeSetting($event, 'critical')" :checked="this.$store.state.settings.critical">
        Критическое попадание и провал
      </checkbox>
    </div>
    <div class="modal-content-anno">
      В логе будут отмечаться 1d20 броски в которых выпали 20-ка или 1-ка.
    </div>
    <div class="modal-content-title"><checkbox @change="changeSetting($event, 'opacitybefore')" :checked="this.$store.state.settings.opacitybefore">Предыдущие броски полупрозрачные</checkbox></div>
    <div class="modal-content-anno">
      В истории бросков, предыдущие броски будут отображаться полупрозрачно.
    </div>
    <div class="modal-content-title"><checkbox @change="changeSetting($event, 'negativeresult')" :checked="this.$store.state.settings.negativeresult">Отрицательный результат</checkbox></div>
    <div class="modal-content-anno">
      Минимальный результат броска кубиков не ограничивается еденицей. Такой результат может получиться при бороске с модификатором.
    </div>
    <hr>
    <button class="modal-btn" @click="reserDiceroll()">Сбросить настройки</button>
    <div class="modal-content-anno">Все комбинации кубиков и настройки вернутся в исходное состояние. Страница будет перезагружена.</div>
    <hr>
    <div class="modal-content-anno">
      Настройки сохраняются автоматически.
    </div>
  </modal>
</template>
<script>
  import modal from '@/components/modal.vue';
  import checkbox from '@/components/checkbox.vue';
  export default {
    name: 'settings',
    created: function() {
      this.$store.watch(
          function (state) {
            return state.settings;
          },
          function (settings) {
            localStorage.settings = JSON.stringify(settings);
          }, {deep: true}
      );
    },
    computed: {
      sepaeach: {
        get () {
          return this.$store.state.settings.sepaeach;
        },
        set (value) {
          this.$store.commit('changeSetting', {setting: 'sepaeach', data: value});
        }
      }
    },
    methods: {
      hideSettings: function () {
        this.$emit('hideSettings');
      },
      changeSetting: function (data, setting) {
        var options = {setting, data};
        this.$store.commit('changeSetting', options);
      },
      reserDiceroll() {
        localStorage.removeItem('dicebag');
        localStorage.removeItem('settings');
        location.reload();
      }
    },
    components: {modal, checkbox}
  }
</script>
<style>
</style>