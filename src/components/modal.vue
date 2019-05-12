<template>
  <transition name="modal">
    <div @click="hidewithFog($event)" class="modal">
      <div class="modal-view">
        <div v-if="showTitle" class="modal-title">{{title}}</div>
        <div class="modal-content">
          <slot></slot>
        </div>
        <div v-if="showActions" class="modal-actions">
          <button @click="hideModal()" class="modal-btn">Готово</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'modal',
  props: {
    title: {
      default: 'Укажите заголовок'
    },
    showTitle: {
      default: true
    },
    showActions: {
      default: true
    }
  },
  methods: {
    hidewithFog: function (e) { // Закрываем при клике за пределами контента
      if (e.target.classList.contains('modal')) {
        this.hideModal();
      }
    },
    hideModal: function () {
      this.$emit('hideModal');
    }
  }

}
</script>
<style>
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.5);
  align-items: center;
  color: #e2e2e2;
  transition: opacity .3s ease;
  z-index: 900;
}
.modal-view {
  width: 350px;
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
.modal-content { overflow: hidden;}
.modal-content-title {
  margin-bottom: 10px;
  text-transform: uppercase;
  display: block;
}
.modal-content-anno {
  font-size: 12px;
  font-weight: 200;
  margin: 10px 0 16px;
}
.modal-btn {
  padding: 0 12px;
  text-align: center;
  background-color: #e2e2e2;
  color: #2c3154;
  border: none;
  border-radius: 2px;
  line-height: 34px;
  height: 34px;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  z-index: 1;
  position: relative;
  letter-spacing: 1px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
}
.modal hr {
    background: #43486B;
    border: none;
    height: 1px;
    margin: 10px 0;
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