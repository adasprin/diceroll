<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png"-->
    <Diceroll msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Diceroll from '@/components/Diceroll.vue'

export default {
  name: 'home',
  components: {
    Diceroll
  }
}
</script>
