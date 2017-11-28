<template>
  <div id="app">
    <toolbar />
    <router-view />
    <remarks />
  </div>
</template>

<script>
import Remarks from './containers/Remarks'
import Toolbar from './containers/Toolbar'

export default {
  name: 'app',
  components: {
    Remarks,
    Toolbar
  }
}
</script>

<style lang="less">
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css');
@import url('https://fonts.googleapis.com/css?family=Space+Mono');

* {
  font-family: 'Space Mono', monospace;
  font-weight: 300;
  letter-spacing: 0.025em;
  color: #000;
}

#app {
  margin: 0 auto;
  padding: 3vh 3vh 12vh 3vh;
  max-width: 600px;
}

p, h1, h2, h3 {
  margin: 3vh 0px;
}

p, a {
  font-size: 16px;
  line-height: 1.4;
}

a {
  font-size: 16px;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px dotted green;
  font-size: inherit;

  &:hover {
    border-bottom: 1px solid green;
  }
}

h1 {
  font-size: 26px;
}

h2 {
  font-size: 24px;
}

h3 {
  font-size: 20px;
}

code {
  display: block;
  overflow-x: auto;
  padding: 10px;
  background-color: #ccc;
}

.center {
  text-align: center;
}
</style>
