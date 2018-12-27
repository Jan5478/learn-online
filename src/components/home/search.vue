<template>
  <div class="container">
    <div class="grid-content">
      <span class="text">My Show</span>
      <input type="text" class="fl--right" placeholder="Search for a movie, play or more"/>
      <span class="el-icon-search text--bold search-icon fl--right"></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "search",
    }
</script>

<style lang="scss" scoped>
  @import '../../../src/scss/common.scss';
  .container {
    background-color: #fff;
    min-height: 70px;
    .grid-content {
      position: relative;
      .text {
        line-height: 70px;
        margin-left: 15px;
        color: royalblue;
      }
      input {
        width: 280px;
        height: 35px;
        padding-left: 30px;
        margin-top: 15px;
        margin-right: 15px;
        outline: none;
      }
      .search-icon {
        font-size: 18px;
        position: absolute;
        top: 25px;
        right: 302px;
      }
    }
  }
</style>
