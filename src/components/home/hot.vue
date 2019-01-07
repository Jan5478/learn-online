<template>
  <swiper v-if="swiperSlides.length > 1" :options="swiperOption" class="hot_swiper">
    <swiper-slide   v-for="(slide,index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import api from '../../apis.js'

  export default {
    name: 'hot',
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          slidesPerView: 5,
          spaceBetween: 30,
          loop: true
        },
        swiperSlides: []
      }
    },
    created(){
      this.getHot()
    },
    methods: {
      getHot(){
        api.testGet('/getHot').then(val => {
          this.swiperSlides = val.imgs
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../src/scss/common.scss';
  .hot_swiper {
    background-color: #fff;
    text-align: center;
    height: 240px;
    .swiper-wrapper {
      -webkit-transition-timing-function: linear;
      -moz-transition-timing-function: linear;
      -o-transition-timing-function: linear;
      transition-timing-function: linear;
      margin: 0 auto;
    }
    .swiper-wrapper:nth-child(2n) {
      background-color: cornflowerblue;
    }
    .swiper-wrapper:nth-child(2n+1) {
      background-color: rosybrown;
    }
  }
</style>
