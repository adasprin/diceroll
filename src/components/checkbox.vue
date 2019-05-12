<template>
  <label @change="onChange($event)" class="checkbox">
    <slot></slot>
    <input v-bind:checked="checked" type="checkbox">
    <span class="checkbox-mark"></span>
  </label>
</template>

<script>
export default {
  name: 'checkbox',
  methods: {
    onChange: function (e) {
      this.$emit('change', e.target.checked);
    }
  },
  props: {
    checked: {
      default: false,
      type: Boolean
    }
  }
}
</script>
<style>
.checkbox {
  vertical-align: middle;
  min-height: 28px;
  display: inline-block;
  line-height: 28px;
  padding-left: 28px;
  position: relative;
  cursor: pointer;
  margin: 0;
}

/* Hide the browser's default checkbox */
.checkbox input { position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0;}
.checkbox-mark {
  border: 2px solid #e2e2e2;
  width: 14px;
  height: 14px;
  margin: 5px 0;
  top: 0;
  left: 0;
  position: absolute;
}
.checkbox input + .checkbox-mark::after {
  content: '';
  margin: 2px 2px;
  width: 10px;
  height: 10px;
  background: #e2e2e2;
  opacity: 0;
  -webkit-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;
  -webkit-transform: scale(0);
  transform: scale(0);
  position: absolute;
}
/*.checkbox input:focus + .checkbox-mark {box-shadow: 1px 1px 1px #fff;}*/
.checkbox input:checked + .checkbox-mark::after { transform: scale(1); opacity: 1;}
</style>
