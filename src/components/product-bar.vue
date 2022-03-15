<template>
  <div class="product-bar" :class="{ is_Fixed: isFixed }">
    <div class="container">
      <div class="product-title">
        <div class="title">{{ title }}</div>
      </div>
      <div class="product-params">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-bar',
  props: {
    title: String
  },
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 152 ? true : false
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.product-bar {
  height: 70px;
  background-color: $colorG;
  border-top: 1px solid $colorH;
  &.is_Fixed {
    width: 100%;
    position: fixed;
    top: 0;
    box-shadow: 0 5px 5px $colorE;
    z-index: 10;
  }
  .container {
    height: 100%;
    @include flex();
    .product-title {
      .title {
        font-size: $fontH;
        font-weight: bold;
        color: $colorB;
      }
    }
    .product-params {
      font-size: $fontJ;
      span {
        margin: 0 10px;
      }
      a {
        color: $colorC;
      }
    }
  }
}
</style>