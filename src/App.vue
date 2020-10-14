<template>
  <div id="app">
    <div class="wrapper">
      <comment-component />
    </div>
  </div>
</template>

<script>
import commentComponent from './components/comment-component'

export default {
  name: 'App',
  components: {
    commentComponent
  }
}
</script>

<style lang="scss">

@import "assets/responsive";

* {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background: #e6e6e6 !important;
}

p {
  padding: 0;
}

#app {
  font-family: 'Gilroy',sans-serif;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background: #c7cfd6;
}
::-webkit-scrollbar-thumb:window-inactive {
  background: #E1E1E1;
}
</style>
