<template>
  <div class="product-bar">
    <div class="container">
      <div class="product-title">
        <div class="title">小米8 透明探索版</div>
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
  name: 'product-bar'
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.product-bar {
  height: 70px;
  background-color: $colorG;
  border-top: 1px solid $colorH;
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