<template>
  <transition name="modal">
  <div id="Settings" class="modal">
    <div class="modal-view">
      <div class="modal-title">На стройке</div>
      <div class="modal-content">
        <button class="btn">Сбросить настройки</button>
        <div class="modal-anno">Все комбинации кубиков и настройки вернутся в исходное состояние. Страница будет перезагружена.</div>
        <div class="modal-content-title">Разделитель</div>
        <input class="inp-blade" v-model="sepaeach" type="text">
        <div class="modal-anno">Разделитель будет размещен после указанного количества бросков. Укажтите 0 чтобы убрать разделитель.</div>
        <hr>
        <div class="modal-content-title">Критическое попадание и провал</div>
        <checkbtn/>
        <div class="modal-anno">
          В логе будут отмечаться 1d20 броски в которых выпали 20-ка или 1-ка.
        </div>
        <hr>
        <button class="btn" @click="$emit('hideSettings')">ГОТОВО</button>
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
  import checkbtn from '@/components/checkbtn.vue';
  export default {
    name: 'settings',
    computed: {
      sepaeach: {
        get () {
          return this.$store.state.sepaeach;
        },
        set (value) {        
          this.$store.commit('changeSepaeach', value);
        }
      }
    },
    components: {checkbtn}
  }
</script>
<style>
/* потом из этого сделать модальное окно */
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.5);
  align-items: center;
  color: #fff;
  transition: opacity .3s ease;
}
.modal-view {
  width: 300px;
  margin: 0 auto;
  background: #2C3154;
  padding: 20px;
  border-radius: 2px;
  transition: all .3s ease;
}
.modal-title {
  font-size: 26px;
  font-weight: 200;
  line-height: 28px;
  margin-bottom: 30px;
}
.modal-content-title {
  margin-bottom: 10px;
  text-transform: uppercase;
  display: block;
}
.modal-anno {
  font-size: 12px;
  font-weight: 200;
  margin: 10px 0 16px;
}

/* Анимация */
.modal-enter { opacity: 0;}
.modal-leave-active { opacity: 0;}
.modal-enter .modal-view ,
.modal-leave-active .modal-view {
  transform: scale(1.1);
}
/*/ Анимация */
</style>