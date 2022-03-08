<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOptions">
          <swiper-slide v-for="(item, i) in swiperList" :key="i">
            <a href="javascript:;"><img :src="item.url" /></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../components/service-bar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
  name: "index",
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          shadowOffset: 70,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperList: [{
        id: '42',
        url: '/imgs/slide-1.jpg'
      }, {
        id: '43',
        url: '/imgs/slide-2.jpg'
      }, {
        id: '44',
        url: '/imgs/slide-3.jpg'
      }, {
        id: '45',
        url: '/imgs/slide-4.jpg'
      }, {
        id: '46',
        url: '/imgs/slide-5.jpg'
      }]
    }
  },
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
  }
};
</script>
<style lang="scss">
@import './../assets/scss/base.scss';

.index {
  .swiper-container {
    height: 451px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // .swiper-pagination {
  //   bottom: 20px;
  //   left: 600px;
  // }
}
</style>