<template>
  <div class="schedule fl--clear">
    <div class="left_bar fl--left">
      <el-radio-group v-model="radio3">
        <el-radio-button label="Now Playing"></el-radio-button>
        <el-radio-button label="Opening This Weekend"></el-radio-button>
        <el-radio-button label="Comming Soon"></el-radio-button>
      </el-radio-group>
      <ul class="picture">
        <li class="fl--left">
          <div><a href="#"><img src="../../assets/pic-1.jpg" alt=""></a></div>

          <button @click="goDetail">Study Now</button>

          <div class="con">
            <div class="circle fl--left">
              <div class="text-circle text--bold">88</div>
            </div>
            <p>%<br/>Want to see</p>
          </div>
        </li>
        <li class="fl--left">
          <div><a href="#"><img src="../../assets/pic-1.jpg" alt=""></a></div>
          <button>Study Now</button>
          <div class="con">
            <div class="circle fl--left">
              <div class="text-circle text--bold">88</div>
            </div>
            <p>%<br/>Want to see</p>
          </div>
        </li>
        <li class="fl--left">
          <div><a href="#"><img src="../../assets/pic-1.jpg" alt=""></a></div>
          <button>Study Now</button>
          <div class="con">
            <div class="circle fl--left">
              <div class="text-circle text--bold">88</div>
            </div>
            <p fl--left>%<br/>Want to see</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="right_bar fl--right">
      <h6>Top Movies</h6>
      <ul class="list">
        <li><span class="el-icon-star-on star"></span><span>77%</span><a href="">Jurassic World (3D) (U/A)</a></li>
        <li><span class="el-icon-star-on star"></span><span>88%</span><a href="">Jurassic World (3D Hindi) (U/A)</a>
        </li>
        <li><span class="el-icon-star-on star"></span><span>77%</span><a href="">Jurassic World (3D) (U/A)</a></li>
        <li><span class="el-icon-star-on star"></span><span>77%</span><a href="">Jurassic World (3D) (U/A)</a></li>
        <li><span class="el-icon-star-on star"></span><span>90%</span><a href="">Jurassic World (3D) (U/A)</a></li>
        <li><span class="el-icon-star-on star"></span><span>77%</span><a href="">Jurassic World (3D) (U/A)</a></li>
        <li><span class="el-icon-star-on star"></span><span>80%</span><a href="">Jurassic World (3D) (U/A)</a></li>
        <li><span class="el-icon-star-on star"></span><span>77%</span><a href="">Jurassic World (3D) (U/A)</a></li>
        <li><span class="el-icon-star-on star"></span><span>76%</span><a href="">Jurassic World (3D) (U/A)</a></li>
        <li><span class="el-icon-star-on star"></span><span>77%</span><a href="">Jurassic World (3D) (U/A)</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import detail from '../detail/detail.vue';

  export default {
    name: "Scheduling",
    components: {
      detail
    },
    data() {
      return {
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
      };
    },
    methods: {
      goDetail(){
        this.$router.push('detail')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../src/scss/common.scss';

  .schedule {
    background-color: #fff;
    padding-left: 20px;
    padding-bottom: 15px;
    .left_bar {
      .el-radio-button__inner {
        border: none;
        font-size: 18px;
        font-weight: bold;
        color: #000;
      }
      .el-radio-button:first-child .el-radio-button__inner {
        border: none;
        border-radius: 0;
      }
      .el-radio-button:last-child .el-radio-button__inner {
        border-radius: 0;
      }
      .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        background-color: #007DD3;
        color: #fff;
      }
      .picture {
        li {
          img {
            margin-right: 15px;
            display: block;
            margin-bottom: 15px;
          }
          button {
            display: block;
            width: 220px;
            height: 35px;
            background-color: #003B64;
            cursor: pointer;
            border: none;
            color: #fff;
            font-weight: bold;
            margin-bottom: 15px;
            &:hover {
              background-color: #fff200;
              color: #000;
            }
          }
          .con {
            display: inline-block;
            height: 70px;
            width: 220px;
            .circle {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background-color: #d8d8d8;
              margin-left: 5px;
              position: relative;
              .text-circle {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                background-color: #fff;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-51%, -50%);
                font-size: 20px;
                text-align: center;
                line-height: 42px;
                color: #007DD3;
              }
            }
            p {
              font-size: 12px;
              margin-left: 65px;
              margin-top: 8px;
            }
          }
        }
      }
    }
    .right_bar {
      width: 450px;
      h6 {
        color: #007DD3;
        margin-bottom: 15px;
      }
      ul {
        font-size: 16px;
        li {
          margin-bottom: 15px;
          span {
            margin-right: 10px;
            font-weight: bold;
            &.star {
              color: #007DD3;
            }
          }
        }
      }
    }
  }
</style>
