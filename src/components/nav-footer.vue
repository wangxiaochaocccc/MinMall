<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../../public/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <div class="link-box">
        <a href="javascript:;">我爱我家</a>
        <span>|</span>
        <a href="javascript:;">我爱我家</a>
        <span>|</span>
        <a href="javascript:;">我爱我家</a>
        <span>|</span>
        <a href="javascript:;">我爱我家</a>
      </div>
      <div class="copyright">copyright@20220322</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped lang="scss">
@import './../assets/scss/config.scss';

.footer {
  height: 234px;
  background-color: $colorB;
  border-top: 4px solid $colorA;
  color: #999;
  text-align: center;
  .footer-logo {
    width: 64px;
    margin: 46px auto 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      display: inline-block;
      color: #999;
      margin-bottom: 8px;
    }
    span {
      margin: 0 10px;
    }
  }
}
</style>