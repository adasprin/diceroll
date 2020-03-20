<template>
  <div id="Home">
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
