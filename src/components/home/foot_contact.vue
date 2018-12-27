<template>
  <footer>
    <div>
      <div class="follow">
        <p class="text--bold">Follow us</p>
        <span class="el-icon-third-icon_twitter"></span>
        <span class="el-icon-third-youtube"></span>
        <span class="el-icon-third-weixin"></span>
        <span class="el-icon-third-weibo"></span>
      </div>
      <div class="advise">
        <p class="text--bold">Subscribe to our movies</p>
        <div><el-input placeholder="Enter Email"></el-input><el-button type="primary">SUBMIT</el-button></div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "foot_contact"
  }
</script>

<style lang="scss">
  footer {
    background-color: #fff;
    text-align: center;
    padding: 20px 0;
    border-top: 1px solid #eee;
    .follow {
      display: inline-block;
      margin-right: 60px;
      p {
        font-size: 18px;
      }
      span {
        font-size: 22px;
        color: #aeaeae;
      }
    }
    .advise {
      display: inline-block;
      p {
        font-size: 18px;
      }
      div {
        position: relative;
        .el-input__inner {
          width: 250px;
        }
        .el-button {
          position: absolute;
          top: 10px;
          left: 155px;
        }
      }
    }
  }
</style>
