<template>
    <div id="app">
      <!--首页区域-->
      <router-view></router-view>
      <!--底部区域-->
    </div>
</template>

<script>

    export default {
        name: 'App',
    }
</script>

<style lang="scss">
  @import '../src/scss/common.scss';

  #app {
      font-family: 'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #eaeaea;
  }
</style>
