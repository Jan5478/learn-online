<template>
  <div class="banner_container fl--clear">
    <div class="block fl--left">
      <el-carousel trigger="click" height="400px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="login fl--left">
      <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
        <el-tab-pane label="二维码登录" name="first" class="img">
          <p>看视频学英语</p>
          <img src="../../assets/getUrlQrcode.jpg" alt="二维码">
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="second">
          <div class="mes">
            <span class="el-icon-third-zhanghao span1"></span>
            <el-input
              placeholder="请输入手机号"
              v-model="inputNum"
              clearable>
            </el-input>
            <span class="el-icon-third-mima span2"></span>
            <el-input
              placeholder="请输入密码"
              v-model="inputPass"
              clearable>
            </el-input>
          </div>
          <div class="rem">
            <a href="#">忘记密码?</a>
          </div>
          <div class="button">
            <el-button type="primary">登录</el-button>
            <el-button type="primary" plain>注册</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: "banner",
    data() {
      return {
        activeName: 'second',
        stretch: true,
        inputNum: '',
        inputPass: '',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../src/scss/common.scss';
  .banner_container {
    padding: 20px 15px;
    background-color: #fff;
    .block {
      width: 650px;
      height: 400px;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }
    .login {
      width: 430px;
      height: 400px;
      margin-top: 25px;
      margin-left: 75px;
      .el-tab-pane {
        &.img {
          text-align: center;
          p {
            font-size: 20px;
            line-height: 100px;
          }
          img {
            margin: 0 auto;
          }
        }
      }
      .mes {
        width: 310px;
        margin-top: 50px;
        .el-input__inner {
          margin-bottom: 15px;
          margin-left: 60px;
          padding: 0 30px;
          height: 45px;
        }
        span {
          &.span1 {
            display: block;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 63px;
            left: 65px;
            font-size: 20px;
            z-index: 99;
          }
          &.span2 {
            display: block;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 130px;
            left: 65px;
            font-size: 20px;
            z-index: 99;
          }
        }
      }
      .rem {
        font-size: 14px;
        text-align: right;
        margin-right: 65px;
        margin-bottom: 20px;
        color: cornflowerblue;
      }
      .button {
        text-align: center;
        .el-button {
          width: 150px;
          font-size: 18px;
        }
      }
    }
  }
</style>
