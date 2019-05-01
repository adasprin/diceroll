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

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700');
#App {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
#Nav {
  padding: 20px;
}
html, body { height: 100%; padding: 0; margin: 0;}
* { font-family: 'Open Sans', sans-serif;}
body { background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);}

a { color: purple}
footer { padding: 20px 0; text-align: center;}
footer a { color: #ce2333;}
</style>
