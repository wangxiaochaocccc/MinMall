<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="header-title">
        <span class="title">{{ title }}</span>
        <span class="tip">
          <slot name="tip"></slot>
        </span>
      </div>
      <div class="username">
        <a href="javascript:;">{{ username }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    title: String
  },
  computed: {
    ...mapState(['username'])
  }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
.order-header {
  padding: 30px 0;
  background-color: $colorG;
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