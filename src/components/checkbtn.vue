<template>
  <div class="checkbtn">
    <input v-bind:id="uuido" type="checkbox" v-model="checked">
    <label v-bind:for="uuido">{{checked ? 'ВКЛ' : 'ВЫКЛ'}}</label>
  </div>
</template>

<script>
let uuid = 0;
export default {
  name: 'checkbtn',
  data: function () {
    return {
      checked: true
    }
  },
  beforeCreate() {
    this.uuido = 'checkbox-' + uuid.toString();
    uuid += 1;
  }
}
</script>
<style>
.checkbtn {
  display: inline-block;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
.checkbtn label {
  border-width: 1px;
  border-style: solid;
  border-color: #696969;
  padding: 4px;
  display: inline-block;
  width: 50px;
  text-align: center;
  color: #696969;
}

.checkbtn input:checked + label { color: #e2e2e2; border-color: #e2e2e2; }
.checkbtn input { display: none;}
</style>
