<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="header-title">
        <span class="title">{{ title }}</span>
        <span class="tip">
          <slot name="tip"
            >温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</slot
          >
        </span>
      </div>
      <div class="username">
        <a href="javascript:;">{{ username }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: this.$store.state.username
    }
  },
  props: {
    title: String
  }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
.order-header {
  padding: 30px 0;
  .container {
    .header-logo {
      float: left;
    }
    .header-title {
      float: left;
      height: 55px;
      line-height: 55px;
      margin-left: 54px;
      .title {
        font-size: $fontE;
        color: $colorB;
        margin-right: 17px;
        font-weight: bold;
      }
      .tip {
        font-size: $fontJ;
        color: $colorD;
        vertical-align: top;
      }
    }
    .username {
      float: right;
      height: 55px;
      line-height: 55px;
      font-size: $fontI;
      a {
        color: $colorC;
      }
    }
  }
}
</style>