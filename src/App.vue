<template>
  <div id="App">
    <header>
      <img src="./assets/logo.png" id="Logo" alt="Кубомёт - Diceroll">
    </header>
    <router-view/>
    <footer>
      <a href="http://rustycrow.ru" target="blank">Ржавая Ворона</a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700');
#Nav { padding: 20px;}
html { background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%); background-attachment: fixed;}
html, body { padding: 0; margin: 0;}
body { }
header {text-align: center; padding: 40px 0 20px;}
#Logo { height: 160px;}
body, input, textarea, button, select {
  font-family: 'Open Sans', Tahoma;
  font-weight: 400;
  font-size: 15px;
  color: #545454;
  outline: none;
}
a { color: purple}
footer { padding: 20px 0; text-align: center;}
footer a { color: #ce2333;}
hr {
  background: #e2e2e2;
  border: none;
  height: 1px;
  margin: 10px 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type='number'] {
    -moz-appearance: textfield;
}

@media ( max-width: 768px ) {
  #Logo { height: 90px;}
  header { padding: 10px 0 0;}
}
</style>
