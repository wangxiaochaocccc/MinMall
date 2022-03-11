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
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;" class="cart-box" @click="goToCart">
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
            <div class="children">
              <ul>
                <li v-for="item in phoneList" :key="item.id">
                  <a
                    class="pruc-link"
                    :href="'/#/product/' + item.id"
                    target="_blank"
                  >
                    <img class="img-box" :src="item.mainImage" />
                    <div class="title-box">{{ item.name }}</div>
                    <div class="price-box">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="menu">
            <div class="title">Redmi红米</div>
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
  data () {
    return {
      username: "jack",
      phoneList: [],
    };
  },
  filters: {
    currency (val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  mounted () {
    this.getPhoneList();
  },
  methods: {
    getPhoneList () {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
          },
        })
        .then((res) => {
          if (res.list.length > 6) {
            this.phoneList = res.list.slice(0, 6);
          }
        });
    },
    goToCart () {
      this.$router.push("/cart");
    },
    login () {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.nav-main {
  width: 100%;
  height: 39px;
  line-height: 39px;
  background-color: #333;
  font-size: 12px;
  .container {
    @include flex();
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
      margin-right: 0;
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
    position: relative;
    height: 112px;
    @include flex();
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
          content: ' ';
          display: inline-block;
          @include bgImg(55px, 55px, '../../public/imgs/logo-mi.png', cover);
        }
        &::after {
          content: ' ';
          display: inline-block;
          @include bgImg(55px, 55px, '../../public/imgs/mi-home.png', cover);
        }
        &:hover::before {
          margin-left: -55px;
          transition: margin-left 0.5s linear;
        }
      }
    }
    .header-menu {
      width: 400px;
      @include flex('');
      .menu {
        margin-right: 20px;
        cursor: pointer;
        .title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }
        .children {
          position: absolute;
          top: 112px;
          left: 0;
          width: 1226px;
          height: 0;
          opacity: 0;
          overflow: hidden;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          border-top: 1px solid #e5e5e5;
          text-align: center;
          font-size: 12px;
          font-weight: bold;
          transition: all 0.5s;
          background-color: #fff;
          z-index: 10;
          ul {
            @include flex('');
          }
          li {
            position: relative;
            width: 204px;
            .pruc-link {
              width: 204px;
              display: inline-block;
              .img-box {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .price-box {
                color: $colorA;
              }
              .title-box {
                color: $colorB;
                margin-top: 19px;
                margin-bottom: 8px;
              }
            }
            &:after {
              content: '';
              width: 1px;
              height: 99px;
              border-left: 1px solid #d7d7d7;
              position: absolute;
              top: 28px;
              right: 0;
            }
            &:last-child:after {
              display: none;
            }
          }
        }
        &:hover .title {
          color: #f60;
        }
        &:hover .children {
          height: 220px;
          opacity: 1;
        }
      }
    }
    .header-search {
      .input-box {
        @include flex();
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
          @include flex(center);
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