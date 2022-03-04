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
          <a href="javascript:;" class="cart-box">
            <span class="iconfont">&#xe899;</span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="menu">
            <div class="title">小米手机</div>
            <div class="children"></div>
          </div>
          <div class="menu">
            <div class="title">Redmi红米</div>
            <div class="children"></div>
          </div>
          <div class="menu">
            <div class="title">电视</div>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="input-box">
            <input type="text" />
            <span class="iconfont">&#xe86e;</span>
          </div>
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
    .cart-box {
      display: inline-block;
      width: 110px;
      height: 39px;
      line-height: 39px;
      background-color: #f60;
      text-align: center;
      color: #fff;
      span {
        display: inline-block;
        margin-right: 4px;
        vertical-align: bottom;
      }
    }
  }
}
.nav-header {
  height: 112px;
  .container {
    width: 1226px;
    height: 112px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .header-logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background-color: #ff6600;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        overflow: hidden;
        &::before {
          content: " ";
          display: inline-block;
          width: 55px;
          height: 55px;
          background-image: url("../../public/imgs/logo-mi.png");
          background-size: cover;
        }
        &::after {
          content: " ";
          display: inline-block;
          width: 55px;
          height: 55px;
          background-image: url("../../public/imgs/mi-home.png");
          background-size: cover;
        }
        &:hover::before {
          margin-left: -55px;
          transition: margin-left 0.5s linear;
        }
      }
    }
    .header-menu {
      width: 600px;
      display: flex;
      align-content: center;
      .menu {
        margin-right: 20px;
        cursor: pointer;
        .title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }
        &:hover .title {
          color: #f60;
        }
      }
    }
    .header-search {
      .input-box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 319px;
        height: 50px;
        border: 1px solid #e0e0e0;
        input {
          width: 264px;
          height: 50px;
          border: none;
          padding-left: 10px;
          box-sizing: border-box;
        }
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 50px;
          border-left: 1px solid #e0e0e0;
          color: #666666;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
}
</style>