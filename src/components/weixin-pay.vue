<template>
  <div class="weixin-pay">
    <div class="main-box">
      <div class="left-box"></div>
      <div class="right-box">
        <div class="top">
          <span class="title">微信支付</span>
          <span class="close-icon"></span>
        </div>
        <img src="" class="qr-code" />
        <p class="desc">扫一扫 二维码完成支付</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weixin-pay'
}
</script>
<style lang="scss">
.weixin-pay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  .main-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 660px;
    height: 485px;
    display: flex;
    align-items: center;
    .left-box {
      width: 296px;
      height: 485px;
      background: url('/imgs/icon-scan.png') no-repeat center;
      background-size: cover;
    }
    .right-box {
      width: 370px;
      height: 440px;
      background-color: #fff;
      .top {
        height: 60px;
        line-height: 60px;
        background: #f5f5f5;
        box-sizing: border-box;
        padding: 0 10px;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .close-icon {
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url('/imgs/icon-close.png') no-repeat center;
          background-size: cover;
        }
      }
      .qr-code {
        display: block;
        width: 237px;
        height: 240px;
        margin: 44px auto 26px;
        background-color: pink;
      }
      .desc {
        text-align: center;
        font-size: 14px;
        color: #333;
      }
    }
  }
}
</style>