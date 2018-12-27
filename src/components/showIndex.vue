<template>
  <el-row type="flex" justify="center">
    <el-col :span="20">
      <search></search>
      <nav_home></nav_home>
      <banner></banner>
      <hot></hot>
      <Scheduling></Scheduling>
      <foot_contact></foot_contact>
    </el-col>
  </el-row>
</template>

<script>
  import search from '../components/home/search.vue'
  import nav_home from '../components/home/nav_home.vue'
  import banner from '../components/home/banner.vue'
  import hot from '../components/home/hot.vue';
  import Scheduling from '../components/home/Scheduling.vue';
  import foot_contact from '../components/home/foot_contact.vue';

  export default {
    name: "showIndex",
    components:{
      search,
      nav_home,
      banner,
      hot,
      Scheduling,
      foot_contact
    }
  }
</script>

<style scoped>

</style>
