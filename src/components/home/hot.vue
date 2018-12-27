<template>
  <swiper :options="swiperOption" class="hot_swiper">
    <swiper-slide v-for="slide in swiperSlides" :key="slide">I'm Slide {{ slide }}</swiper-slide>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
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
        swiperSlides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
