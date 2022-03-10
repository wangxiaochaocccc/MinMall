<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="class-menu">
          <ul>
            <li class="menu">
              <a href="javascript:;">手记 电话卡</a>
              <span class="iconfont">&#xe62d;</span>
              <div class="children">
                <ul>
                  <li
                    v-for="(item, i) in phoneList"
                    :key="i"
                    class="phone-main-box"
                  >
                    <div class="phone-box" v-for="(phone, j) in item" :key="j">
                      <img
                        :src="
                          phone && phone.img
                            ? phone.img
                            : '/imgs/item-box-1.png'
                        "
                        alt=""
                      />
                      <span class="name">{{
                        phone && phone.name ? phone.name : '小米9'
                      }}</span>
                    </div>
                  </li>
                </ul>
              </div>
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
      }],
      phoneList: [
        [
          {
            id: '31',
            img: '/imgs/item-box-1.png',
            name: '小米9'
          }, {
            id: '32',
            img: '/imgs/item-box-2.png',
            name: '小米 青春版'
          }, {
            id: '33',
            img: '/imgs/item-box-3.jpg',
            name: '红米9+'
          }, {
            id: '34',
            img: '/imgs/item-box-4.jpg',
            name: '移动4G社区'
          }
        ], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ]
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
    position: relative;
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
          .children {
            display: block;
          }
        }
        .children {
          display: none;
          position: absolute;
          top: 0;
          left: 264px;
          width: 964px;
          height: 451px;
          background-color: #fff;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          border-top: 1px solid #e5e5e5;
          .phone-main-box {
            @include flex();
            padding-left: 23px;
            height: 75px;
            .phone-box {
              flex: 1;
              img {
                width: 35px;
                height: 42px;
                vertical-align: middle;
                margin-right: 15px;
              }
              .name {
                font-size: 14px;
                font-weight: bold;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
}
</style>