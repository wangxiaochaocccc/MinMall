<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="class-menu">
          <ul>
            <li class="menu">
              <a href="javascript:;">手记 电话卡</a>
              <span class="iconfont">&#xe62d;</span>
            </li>
            <li class="menu">
              <a href="javascript:;">电视 盒子</a>
              <span class="iconfont">&#xe62d;</span>
            </li>
            <li class="menu">
              <a href="javascript:;">笔记本 平板</a>
              <span class="iconfont">&#xe62d;</span>
            </li>
            <li class="menu">
              <a href="javascript:;">手家电 插线板</a>
              <span class="iconfont">&#xe62d;</span>
            </li>
            <li class="menu">
              <a href="javascript:;">出行 穿戴</a>
              <span class="iconfont">&#xe62d;</span>
            </li>
            <li class="menu">
              <a href="javascript:;">耳机 音箱</a>
              <span class="iconfont">&#xe62d;</span>
            </li>
            <li class="menu">
              <a href="javascript:;">电源 配件</a>
              <span class="iconfont">&#xe62d;</span>
            </li>
            <li class="menu">
              <a href="javascript:;">生活 箱包</a>
              <span class="iconfont">&#xe62d;</span>
            </li>
          </ul>
        </div>
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
@import './../assets/scss/mixin.scss';

.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-button-prev {
        left: 274px;
      }
    }
    .class-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      background-color: #55585a85;
      padding: 29px 0;
      box-sizing: border-box;
      .menu {
        height: 50px;
        line-height: 50px;
        padding: 0 30px;
        box-sizing: border-box;
        color: #fff;
        @include flex();
        a {
          font-size: 16px;
          font-weight: bold;
          color: #fff;
        }
        &:hover {
          background-color: #ff6600;
        }
      }
    }
  }
}
</style>