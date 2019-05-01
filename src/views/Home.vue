<template>
  <div id="Home">
    <!--img alt="Vue logo" src="../assets/logo.png"-->
    <diceroll/>
  </div>
</template>

<script>
// @ is an alias to /src
import diceroll from '@/components/diceroll.vue'

export default {
  name: 'home',
  components: {diceroll}
}
</script>
