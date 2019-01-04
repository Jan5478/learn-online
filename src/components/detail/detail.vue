<template>
  <div class="detail-container">
    <!--头部-->
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#000"
      active-text-color="#ffd04b">
      <el-menu-item index="2" class="el-icon-third-home1 home-icon"></el-menu-item>
      <el-menu-item index="1">Home</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Movies</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">Events</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Plays</a></el-menu-item>
    </el-menu>
    <!--视频区域-->
    <play></play>
    <!--底部-->
    <foot_contact></foot_contact>
  </div>
</template>

<script>
  import play from './play.vue';
  import foot_contact from '../home/foot_contact.vue';

  export default {
    name: "detail",
    components: {
      play,
      foot_contact,
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../src/scss/common.scss';
  .detail-container {
    .home-icon {
      font-size: 25px !important;
    }
    .el-menu-item {
      font-size: 20px;
    }
    .el-submenu__title {
      font-size: 20px;
    }
  }
</style>
