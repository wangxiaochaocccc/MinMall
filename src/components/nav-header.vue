<template>
  <div>
    <div class="nav-main">
      <div class="container">
        <div class="nav-left">
          <a href="javascript:;">松果出行</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="nav-right">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;"><span class=""></span>购物车</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>
<style scoped lang="scss">
.nav-main {
  width: 100%;
  height: 39px;
  line-height: 39px;
  background-color: #333;
  font-size: 12px;
  .container {
    width: 1226px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    a {
      display: inline-block;
      margin-right: 17px;
      color: #b0b0b0;
    }
  }
}
</style>