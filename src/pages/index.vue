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
                        v-lazy="
                          phone && phone.img
                            ? phone.img
                            : '/imgs/item-box-1.png'
                        "
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
            <a href="javascript:;"><img v-lazy="item.url" /></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads">
        <a
          :href="'/#/product/' + item.id"
          v-for="item in adsList"
          :key="item.id"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <img v-lazy="'/imgs/mix-alpha.jpg'" alt="" />
          </div>
          <div class="phone-right">
            <div class="phone-list" v-for="(item, i) in productList" :key="i">
              <div class="item" v-for="(phone, j) in item" :key="j">
                <span class="mark" :class="j % 2 == 1 ? 'new' : 'time'">
                  {{ j % 2 == 1 ? '新品' : '秒杀' }}
                </span>
                <div class="item-img">
                  <img v-lazy="phone.mainImage" alt="" class="phone-img" />
                </div>
                <div class="item-info">
                  <h3>{{ phone.name }}</h3>
                  <p class="info">{{ phone.subtitle }}</p>
                  <div class="price-box">
                    <span class="price">{{ phone.price }}元</span>
                    <span class="iconfont" @click="addCart">&#xe899;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="添加购物车"
      modalType="2"
      sureBtnType="3"
      sureText="查看购物车"
      :showModal="showModal"
      @submit="submit"
      @cancle="cancle"
    >
      <template v-slot:body>添加商品成功！</template>
    </modal>
  </div>
</template>
<script>
import ServiceBar from '../components/service-bar'
import Modal from '../components/modal'
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
          shadowOffset: 30,
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
      ],
      adsList: [
        {
          id: '31',
          img: '/imgs/ads/ads-1.png',
        }, {
          id: '32',
          img: '/imgs/ads/ads-2.jpg',
        }, {
          id: '33',
          img: '/imgs/ads/ads-3.png',
        }, {
          id: '34',
          img: '/imgs/ads/ads-4.jpg',
        }
      ],
      productList: [],
      showModal: false
    }
  },
  mounted () {
    this.getProductData()
  },
  methods: {
    getProductData () {
      this.axios.get('/products', {
        params: {
          categoryId: "100012",
          pageSize: 14
        }
      }).then(res => {
        res.list = res.list.slice(6, 14)
        this.productList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    },
    submit () {
      this.$router.push('/cart')
    },
    cancle () {
      this.showModal = false
    },
    addCart () {
      this.showModal = true
    }
  },
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal
  }
};
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';

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
  .ads {
    height: 167px;
    @include flex();
    margin: 14px 0 31px;
    a {
      width: 296px;
      height: 167px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner {
    margin-bottom: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0;
    h2 {
      font-size: $fontF;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      @include flex(space-between, stretch);
      .banner-left {
        img {
          width: 224px;
          height: 619px;
        }
      }
      .phone-right {
        .phone-list {
          width: 986px;
          @include flex();
          margin-bottom: 14px;
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            .mark {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              text-align: center;
              font-weight: bold;
              color: $colorG;
              font-size: $fontJ;
              &.new {
                background: #7ecf68;
              }
              &.time {
                background: #e82626;
              }
            }
            .item-img {
              height: 195px;
              margin: 10px auto 0;
            }
            .phone-img {
              width: 100%;
              height: 100%;
            }
            .item-info {
              h3 {
                color: $colorB;
                font-size: $fontJ;
              }
              .info {
                font-size: $fontK;
                color: $colorD;
                margin-bottom: 8px;
              }
              .price-box {
                .price {
                  display: inline-block;
                  color: #f20a0a;
                  font-size: $fontJ;
                  margin-right: 5px;
                }
                .iconfont {
                  color: $colorA;
                  font-weight: bold;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>