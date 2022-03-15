<template>
  <div class="product">
    <product-bar :title="productInfo.name">
      <template v-slot:buy>
        <button class="btn btn-small" @click="buy">立即购买</button>
      </template>
    </product-bar>
    <div class="img-box1">
      <div class="title">{{ productInfo.name }}</div>
      <div class="desc">{{ productInfo.subtitle }}</div>
      <div class="kinds-skill">
        <span>全球首款双频 GPS</span>
        <span>|</span>
        <span>骁龙845</span>
        <span>|</span>
        <span>AI 变焦双摄</span>
        <span>|</span>
        <span>红外人脸识别</span>
      </div>
      <div class="price"><sub>￥</sub>6789</div>
    </div>
    <div class="img-box2">
      <div class="container">
        <div class="main-img"></div>
      </div>
    </div>
    <div class="img-box3"></div>
    <div class="img-box4">
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide><img src="/imgs/gallery-2.png" alt="" /></swiper-slide>
          <swiper-slide><img src="/imgs/gallery-3.png" alt="" /></swiper-slide>
          <swiper-slide><img src="/imgs/gallery-4.png" alt="" /></swiper-slide>
          <swiper-slide><img src="/imgs/gallery-5.jpg" alt="" /></swiper-slide>
          <swiper-slide><img src="/imgs/gallery-6.jpg" alt="" /></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="desc">小米8 AI变焦双摄拍摄</div>
      </div>
    </div>
    <div class="video-box">
      <div class="container">
        <div class="title">60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</div>
        <div class="desc">
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI
          精准分析视频内容，15个场景智能匹配背景音效。
        </div>
        <div class="video-main" @click="showVideo = true"></div>
        <div class="video-modal">
          <div class="mask" v-if="showVideo"></div>
          <div class="video-play" :class="{ slide: showVideo }">
            <span class="btn-close" @click="showVideo = false">X</span>
            <video src="/imgs/video.mp4" controls muted autoplay></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productBar from './../components/product-bar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      showVideo: false,
      productInfo: {}, //商品信息
      swiperOption: {
        loop: true,
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }
    }
  },
  mounted () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      let id = this.$route.params.id
      this.axios.get(`/products/${id}`).then(res => {
        this.productInfo = res
      })
    },
    buy () {
      let id = this.$route.params.id
      this.$router.push(`/detail/${id}`)
    }
  },
  components: {
    productBar,
    Swiper,
    SwiperSlide
  }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.product {
  .btn {
    margin-left: 18px;
  }
  .img-box1 {
    height: 718px;
    background: url('/imgs/product-bg-1.png') no-repeat center;
    border: 1px dashed #ccc;
    overflow: hidden;
    color: $colorB;
    text-align: center;
    .title {
      font-size: $fontA;
      font-weight: bold;
      margin: 55px 0 13px;
    }
    .desc {
      font-size: $fontE;
      margin-bottom: 22px;
      letter-spacing: 3px;
    }
    .kinds-skill {
      font-size: $fontI;
      margin-bottom: 30px;
      span:nth-child(2n) {
        margin: 0 15px;
      }
    }
    .price {
      font-size: $fontB;
      sub {
        vertical-align: text-top;
        font-size: 30px;
      }
    }
  }
  .img-box2 {
    padding: 38px 0 45px;
    .container {
      .main-img {
        height: 397px;
        background: url('/imgs/product-bg-2.png') no-repeat;
        background-size: cover;
        border: 1px dashed #ccc;
      }
    }
  }
  .img-box3 {
    height: 638px;
    background: url('/imgs/product-bg-3.png') no-repeat center;
    background-size: cover;
    border: 1px dashed #ccc;
    margin-bottom: 36px;
  }
  .img-box4 {
    height: 390px;
    .swiper-box {
      height: 100%;
      img {
        width: 100%;
      }
      .swiper-wrapper {
        height: 310px;
      }
      .swiper-pagination {
        .swiper-pagination-bullet {
          width: 29px;
          height: 3px;
          background-color: $colorE;
          border-radius: 0;
        }
        .swiper-pagination-bullet-active {
          background-color: $colorC;
        }
      }
      .desc {
        font-size: $fontH;
        color: $colorB;
        font-weight: bold;
        text-align: center;
      }
    }
  }
  .video-box {
    height: 1044px;
    background-color: #070708;
    overflow: hidden;
    color: $colorG;
    text-align: center;
    .title {
      font-size: 60px;
      line-height: 60px;
      margin: 82px 0 47px 0;
    }
    .desc {
      font-size: $fontJ;
      margin-bottom: 58px;
    }
    .video-main {
      height: 540px;
      background: url('/imgs/gallery-1.png') no-repeat center;
      background-size: cover;
    }
    .video-modal {
      .mask {
        @include fixed();
        background-color: $colorB;
        opacity: 0.4;
        z-index: 10;
      }
      .video-play {
        position: fixed;
        top: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1000px;
        height: 536px;
        z-index: 11;
        opacity: 0;
        transition: all 0.6s;
        &.slide {
          top: 50%;
          opacity: 1;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          outline: none;
        }
        .btn-close {
          position: absolute;
          top: 20px;
          right: 15px;
          width: 30px;
          height: 30px;
          background-color: red;
          text-align: center;
          line-height: 30px;
          border-radius: 50%;
          font-size: 20px;
          z-index: 11;
          cursor: pointer;
        }
      }
    }
  }
}
</style>