<template>
  <div id="App">
    <div id="Nav">
      <router-link to="/">Кубомёт</router-link> |
      <router-link to="/feedback">Пожаловаться</router-link>
    </div>
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

#Nav {
  padding: 20px;
}
html, body { height: 100%; padding: 0; margin: 0;}
body { background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);}

body, input, textarea, button, select {
  font-family: 'Open Sans';
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

.inp-blade {
  background: #333961;
  border: 0;
  border-bottom: 2px solid #e2e2e2;
  color: #e2e2e2;
  width: 64px;
  font-size: 26px;
  padding: 0 8px;
}
</style>
