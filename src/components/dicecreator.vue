<template>
  <modal  theme="dim" v-if="true" title="Создать комбинацию" :showActions="false">
    <label for="Quant-dicecreator" class="modal-content-title">Количество кубиков</label>
    <input id="Quant-dicecreator" v-model.number="selected.quant" max="4" type="number" placeholder="0" name="quant" class="modal-inp">
    <hr>
    <label for="Faces-dicecreator" class="modal-content-title">Количество граней на кубике</label>
    <input id="Faces-dicecreator" v-model.number="selected.faces" type="number" placeholder="0" name="faces" class="modal-inp">
    <hr>
    <label for="Modif-dicecreator" class="modal-content-title">Модификатор</label>
    <input id="Modif-dicecreator" v-model.number="selected.modif" type="number" placeholder="0" name="faces" class="modal-inp">
    <div class="modal-content-anno">
      Укажите число, например 5 или -3, модификатор будет добавлен к результату броска.
    </div>
    <hr>
    <div class="modal-content-title">Выберите цвет</div>
    <div class="dicecreator-colorpocker">
      <button
        @click="selectColor(index)"
        :style="{'background-color': color}"
        :class="[ index == selected.color ? 'dicecreator-clrpcker-selected' : '', 'dicecreator-clrpcker']"
        :key="index"
        v-for="(color, index) in colors"></button>
    </div>
    <hr>
    <button @click="createDice()" class="modal-btn dicecreator-save">Создать</button>
    <button class="modal-btn">Отмена</button>
  </modal>
</template>
<script>
import modal from '@/components/modal.vue';
export default {
  name: 'dicecreator',
  components: {modal},
  data: function () {
    return {
      selected: {
        quant: null,
        faces: null,
        modif: null,
        color: null,
      },
      colors: {
        'red': '#f44336',
        'pink': '#e91e63',
        'purple': '#9c27b0',
        'dpurple': '#673ab7',
        'indigo': '#3f51b5',
        'blue': '#1565C0',
        'lblue': '#03a9f4',
        'cyan': '#00bcd4',
        'teal': '#009688',
        'green': '#4caf50',
        'lgreen': '#8bc34a',
        'lime': '#cddc39',
        'amber': '#ffc107',
        'orange': '#ff9800',
        'dorange': '#ff5722',
        'brown': '#795548',
        'grey': '#9e9e9e',
        'bgrey': '#607d8b',
        'dgrey': '#212121'
      },
      
    }     
  },
  methods: {
    clearNumber: function () {
      //this[model] = Number(this[model].replace(/[^-0-9+]/gim,''));
      //var str='saafsdfsd+2e3432-sdgfdsg';
      //alert();.replace(/[^-0-9+]/gim,'')
    },
    selectColor: function (selectedColor) {
      this.selected.color = selectedColor;
    },
    createDice: function () {
      console.log('111');
    }
  }
}
</script>
<style>
.dicecreator-save { margin-right: 10px;}
.dicecreator-clrpcker {
  width: 70px;
  height: 50px;
  border: 4px solid #171717;
  font-size: 10px;
  text-align: center;
  cursor: pointer;
}
.dicecreator-clrpcker-selected { border: 4px solid #e2e2e2;}
</style>
