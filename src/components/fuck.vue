<template>
  <div class="checkbtn">
    <input v-bind:id="uuid" checked type="checkbox" v-model="checked">
    <label v-bind:for="uuid">{{checked ? 'ВКЛ' : 'ВЫКЛ'}}</label>
  </div>
</template>

<script>
export default {
  name: 'fuck',
  data: function () {
    return {
      checked: true,uuid
    }
  },
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  }
}
</script>
<style>
.checkbtn {
  display: inline-block;
}
.checkbtn label {
  border: 1px solid #e2e2e2;
  padding: 4px;
  display: inline-block;
  width: 50px;
  text-align: center;
  color: gray;
}

.checkbtn input:checked + label { color: #fff; }
.checkbtn input { display: none;}
</style>
