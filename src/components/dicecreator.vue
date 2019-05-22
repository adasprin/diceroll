<template>
  <modal  theme="dim" title="Создать комбинацию" :showActions="false">
    <div>
      <label for="Quant-dicecreator" class="modal-content-title">Количество кубиков</label>
      <input id="Quant-dicecreator" v-model.number="selected.quant.value" type="number" placeholder="0" name="quant"
        :class="['modal-inp', selected.quant.error ? 'modal-inp-error' : '']">
      <div v-if="selected.quant.error" class="modal-content-anno modal-content-error">
        {{selected.quant.message}}
      </div>
    </div>
    <hr>
    <div>
      <label for="Faces-dicecreator" class="modal-content-title">Количество граней на кубике</label>
      <input id="Faces-dicecreator" v-model.number="selected.faces.value" type="number" placeholder="0" name="faces"
        :class="['modal-inp', selected.faces.error ? 'modal-inp-error' : '']">
      <div v-if="selected.faces.error" class="modal-content-anno modal-content-error">
        {{selected.faces.message}}
      </div>
    </div>
    <hr>
    <div>
      <label for="Modif-dicecreator" class="modal-content-title">Модификатор</label>
      <input id="Modif-dicecreator" v-model.number="selected.modif.value" type="number" placeholder="0" name="faces" 
        :class="['modal-inp', selected.modif.error ? 'modal-inp-error' : '']">
      <div class="modal-content-anno" :class="['modal-content-anno', selected['modif'].error ? 'modal-content-error' : '']">
        {{selected.modif.message}}
      </div>
    </div>
    <hr>
    <div class="modal-content-title">Цвет</div>
    <div class="sclrpcker">
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
    <div v-for="(error, index) in errors" :key="index">- {{error}}</div>
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
          value: null,
          message: 'Укажите положительное целое число кубиков не больше 1000',
          error: false
        },
        faces: {
          value: null,
          message: 'Укажите целое положительное число граней не больше 1000',
          error: false
        },
        modif: {
          value: null,
          message: 'Укажите положительное или отрицательное целое число не больше 1000, или укажите 0 если модификатор не требуется.',
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
    clearNumber: function () {
      //this[model] = Number(this[model].replace(/[^-0-9+]/gim,''));
      //var str='saafsdfsd+2e3432-sdgfdsg';
      //alert();.replace(/[^-0-9+]/gim,'')
    },
    selectColor: function (selectedColor) {
      this.selected.color.value = selectedColor;
    },
    fuck: function (value) {
      console.log(value);
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
      this.errors = [];

      if ( quant <= 0 || !Number.isInteger(quant) || quant > 1000) {
        this.selected.quant.error = true;
        noErrors = false;
      } else {
        this.selected.quant.error = false;
        output.quant = quant;
      }
      if ( faces <= 0 || !Number.isInteger(faces)) {
        this.selected.faces.error = true;
        noErrors = false;
      } else {
        this.selected.faces.error = false;
        output.faces = faces;
      }
      if (!Number.isInteger(modif)) {
        this.selected.modif.error = true;
        noErrors = false;
      } else {
        this.selected.modif.error = false;
        output.modif = modif;
      }
      if (!color) {
        this.selected.color.error = true;
        noErrors = false;
      } else {
        this.selected.color.error = false;
        output.color = color;
      }
      console.log(output, noErrors);
    }
  }
}
</script>
<style>
.dicecreator-save { margin-right: 10px;}
.clrpcker-color {
  width: 70px;
  height: 50px;
  border: 4px solid #171717;
  font-size: 10px;
  text-align: center;
  cursor: pointer;
}
.clrpcker-color:focus { border: 4px solid #313131;}
.clrpcker-color.clrpcker-color-selected { border: 4px solid #e2e2e2;}
</style>
