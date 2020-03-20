<template>
  <modal  theme="dim" title="Создать комбинацию" :showActions="false">
    <div v-for="(item, index) in selected" :key="index">
      <div v-if="index!='color'">
        <label :for="index + '-dicecreator'" class="modal-content-title">{{item.title}}</label>
        <input :id="index + '-dicecreator'" v-model.number.lazy="item.value" type="number" :name="index" :class="['modal-inp', item.error ? 'modal-inp-error' : '']">
        <div v-if="item.error && index !== 'modif'" class="modal-content-anno" :class="['modal-content-anno', item.error ? 'modal-content-error' : '']">
          {{item.message}}
        </div>
        <div v-else-if=" index === 'modif'" class="modal-content-anno" :class="['modal-content-anno', item.error ? 'modal-content-error' : '']">
          {{item.message}}
        </div>
        <hr>
      </div>
    </div>

    <div class="modal-content-title">Цвет</div>
    <div class="clrpcker">
      <button
        @click="selectColor(index)"
        :style="{'background-color': color}"
        :class="[ index == selected.color.value ? 'clrpcker-color-selected' : '', 'clrpcker-color']"
        :key="index"
        v-for="(color, index) in colors"></button>
    </div>
    <div v-if="selected.color.error" :class="['modal-content-anno', selected.color.error ? 'modal-content-error' : '']">
      {{selected.color.message}}
    </div>
    <hr>
    <button @click="createDice()" class="modal-btn dicecreator-save">Создать</button>
    <button class="modal-btn" @click="closeDicecreator()">Отмена</button>
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
        quant: {
          title: 'Количество кубиков',
          value: null,
          message: 'Укажите положительное целое число кубиков не больше 100',
          error: false
        },
        faces: {
          title: 'Количество граней на кубике',
          value: null,
          message: 'Укажите целое положительное число граней не больше 100',
          error: false
        },
        modif: {
          title: 'Модификатор',
          value: null,
          message: 'Укажите положительное или отрицательное целое число не больше 100, или укажите 0 если модификатор не требуется.',
          error: false
        },
        color: {
          value: null,
          message: 'Выберите цвет',
          error: false
        }
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
      }
    }     
  },
  methods: {
    closeDicecreator: function (){
      this.$emit('closeDicecreator');
    },
    selectColor: function (selectedColor) {
      this.selected.color.value = selectedColor;
    },
    createDice: function () {
      var quant = Number(this.selected.quant.value),
          faces = Number(this.selected.faces.value),
          modif = this.selected.modif.value,
          color = this.colors[this.selected.color.value],
          output = {
            quant: null,
            faces: null,
            modif: null,
            color: null
          },
          noErrors = true;
      // Проверка количества кубиков
      if ( quant <= 0 || !Number.isInteger(quant) || quant > 100) {
        this.selected.quant.error = true;
        noErrors = false;
      } else {
        this.selected.quant.error = false;
        output.quant = quant;
      }
      // Проверка количества граней
      if ( faces <= 0 || !Number.isInteger(faces) || faces > 100) {
        this.selected.faces.error = true;
        noErrors = false;
      } else {
        this.selected.faces.error = false;
        output.faces = faces;
      }
      // Проверка модификатора
      if (!Number.isInteger(modif) || modif > 100 || modif < -100) {
        this.selected.modif.error = true;
        noErrors = false;
      } else {
        this.selected.modif.error = false;
        output.modif = modif;
      }
      // Проверка цвета
      if (!color) {
        this.selected.color.error = true;
        noErrors = false;
      } else {
        this.selected.color.error = false;
        output.color = color;
      }
      // Проверка на ошибки и создание
      if (noErrors) {
        this.$store.commit('addDice', output);
        this.closeDicecreator();
      }
    }
  }
}
</script>
<style>
.dicecreator-save { margin-right: 10px;}
.clrpcker {
  display: flex;
  flex-wrap: wrap;
}
.clrpcker-color {
  width: 32px;
  height: 50px;
  border: 4px solid #171717;
  font-size: 10px;
  text-align: center;
  cursor: pointer;
  flex-grow: 1;
}
.clrpcker-color:focus { border: 4px solid #313131;}
.clrpcker-color.clrpcker-color-selected { border: 4px solid #e2e2e2;}
</style>
