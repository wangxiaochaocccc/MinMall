<template>
  <div class="detail">
    <product-bar :title="product.name"></product-bar>
    <div class="main-cont">
      <div class="container">
        <div class="wrapper">
          <div class="swiper-box">
            <swiper :options="swiperOptions">
              <swiper-slide>
                <img src="/imgs/phone-1.jpg" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="/imgs/phone-2.jpg" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="/imgs/phone-3.jpg" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="/imgs/phone-4.jpg" alt="" />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="right-product-info">
            <div class="title">{{ product.name }}</div>
            <div class="desc">
              相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS /
              骁龙845处理器 / 红<br />外人脸解锁
            </div>
            <div class="runway">小米自营</div>
            <div class="price1">{{ product.price }}元</div>
            <div class="poasition-box">
              <div class="position">
                <span>北京 北京市 朝阳区 安定门街道</span>
                <span class="fix-btn">修改</span>
              </div>
              <div class="has-pro">有现货</div>
            </div>
            <div class="title2">选择版本</div>
            <div class="version-box">
              <div
                class="version version1"
                :class="{ active: version == 1 }"
                @click="version = 1"
              >
                4GB+64GB 移动4G 1049元
              </div>
              <div
                class="version version1"
                :class="{ active: version == 2 }"
                @click="version = 2"
              >
                6GB+64GB 全网通 1099元
              </div>
            </div>
            <div class="title2">选择颜色</div>
            <div class="color-box">
              <span>深空灰</span>
            </div>
            <div class="final-box">
              <div class="price-box">
                <span>{{
                  version == 1
                    ? '4GB+64GB 移动4G 1049元'
                    : '6GB+64GB 全网通 1099元'
                }}</span>
                <span>{{ product.price }}元</span>
              </div>
              <div class="all-price">总计：{{ product.price }}元</div>
            </div>
            <div class="btn-box">
              <div class="btn btn-large add-cart" @click="addcart">
                加入购物车
              </div>
              <div class="add-like">喜欢</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="price-explain">
      <div class="container">
        <div class="title">价格说明</div>
        <div class="explain-box"></div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import productBar from './../components/product-bar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ServiceBar from '../components/service-bar.vue'

export default {
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      product: [], //产品信息
      version: 1,  //手机版本
      productId: this.$route.params.id //产品id
    }
  },
  mounted () {
    this.getProductData()
  },
  methods: {
    getProductData () {
      this.axios.get(`/products/${this.productId}`).then(res => {
        this.product = res
      })
    },
    addcart () {
      this.axios.post('/carts', {
        productId: this.productId,
        selected: true
      }).then(res => {
        this.$store.dispatch('setCartNum', res.cartTotalQuantity)
        this.$router.push('/cart')
      })
    }
  },
  components: {
    productBar,
    SwiperSlide,
    Swiper,
    ServiceBar
  }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/base.scss';
.detail {
  .container {
    .wrapper {
      @include flex(space-between, '');
      .swiper-box {
        width: 642px;
        height: 617px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right-product-info {
        width: 584px;
        line-height: 22px;
        .title {
          font-weight: bold;
          color: $colorB;
          font-size: $fontC;
          margin-bottom: 16px;
        }
        .desc {
          font-size: $fontJ;
          color: $colorD;
          margin-bottom: 26px;
        }
        .runway {
          font-size: $fontI;
          color: $colorA;
          margin-bottom: 14px;
          font-weight: bold;
        }
        .price1 {
          height: 37px;
          font-size: $fontG;
          color: $colorA;
          margin-bottom: 28px;
          font-weight: bold;
          border-bottom: 1px solid $colorH;
        }
        .poasition-box {
          width: 584px;
          height: 108px;
          background: #fafafa;
          border: 1px solid $colorH;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding-left: 64px;
          box-sizing: border-box;
          margin-bottom: 30px;
          .position {
            span {
              font-size: $fontJ;
              color: $colorC;
              margin-right: 20px;
            }
            .fix-btn {
              color: $colorA;
            }
          }
          .has-pro {
            color: $colorA;
          }
        }
        .title2 {
          font-size: $fontH;
          color: $colorB;
          margin-bottom: 20px;
        }
        .version-box {
          @include flex();
          width: 584px;
          margin-bottom: 30px;
          .version {
            width: 287px;
            height: 50px;
            line-height: 50px;
            border: 1px solid $colorH;
            text-align: center;
            font-size: $fontI;
            color: $colorB;
            &.active {
              border: 1px solid $colorA;
              color: $colorA;
            }
          }
        }
        .color-box {
          width: 287px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border: 1px solid $colorA;
          font-size: $fontI;
          color: $colorA;
          margin-bottom: 50px;
        }
        .final-box {
          width: 584px;
          height: 108px;
          background: #fafafa;
          padding: 24px 31px 29px 30px;
          box-sizing: border-box;
          margin-bottom: 30px;
          .price-box {
            @include flex();
            margin-bottom: 18px;
          }
          .all-price {
            font-weight: bold;
            color: $colorA;
            font-size: $fontE;
          }
        }
        .btn-box {
          @include flex('');
          width: 463px;
          margin-bottom: 50px;
          .add-like {
            width: 142px;
            height: 54px;
            line-height: 54px;
            background: #bbbbbb;
            text-align: center;
            color: $colorG;
            margin-left: 21px;
          }
        }
      }
    }
  }
  .price-explain {
    height: 340px;
    background: #f3f3f3;
    overflow: hidden;
    .title {
      font-size: $fontE;
      color: $colorB;
      font-weight: bold;
      margin: 38px 0 30px;
    }
    .explain-box {
      width: 1226px;
      height: 189px;
      background-color: $colorG;
      background: url('//cdn.cnbj1.fds.api.mi-img.com/mi-mall/43e2954feb6d1b108438481f1d5b0bd3.png');
      background-size: cover;
    }
  }
}
</style>