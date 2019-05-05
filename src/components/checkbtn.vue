<template>
  <div class="checkbtn">
    <label><input checked type="checkbox" v-model="checked">{{checked}}</label>
  </div>
</template>

<script>
export default {
  name: 'checkbtn',
  props: {
    quant: Number,
  },
  data: function () {
    return {
      checked: true
    }
  }
}
</script>
<style>
.checkbtn {
  
}
.checkbtn label {
  border: 1px solid #fff;
  padding: 4px;
  display: inline-block;
  width: 50px;
  text-align: center;
}
.checkbtn input { display: none;}
</style>
