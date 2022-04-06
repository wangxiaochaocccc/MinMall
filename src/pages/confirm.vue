<template>
  <div class="confirm">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="position: absolute; width: 0px; height: 0px; overflow: hidden"
    >
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path
            d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"
            class="path1"
          ></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path
            d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"
            class="path1"
          ></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
            class="path1"
          ></path>
          <path
            d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path2"
          ></path>
          <path
            d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path3"
          ></path>
          <path
            d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path4"
          ></path>
        </symbol>
      </defs>
    </svg>
    <div class="container">
      <div class="main-wrapper">
        <div class="getGoods">
          <h2>收货地址</h2>
          <div class="addr-box">
            <div
              class="add-address"
              v-for="(item, index) in addrList"
              :key="index"
            >
              <div class="name">{{ item.receiverName }}</div>
              <div class="phone">{{ item.receiverMobile }}</div>
              <div class="addr">
                {{
                  item.receiverProvince +
                  ' ' +
                  item.receiverCity +
                  ' ' +
                  item.receiverAddress
                }}
              </div>
              <div class="btn-box">
                <a href="javascript:;" class="fl" @click="delAddress(item)">
                  <svg class="icon icon-del">
                    <use xlink:href="#icon-del"></use>
                  </svg>
                </a>
                <a
                  href="javascript:;"
                  class="fr"
                  @click="editAddressModal(item)"
                >
                  <svg class="icon icon-edit">
                    <use xlink:href="#icon-edit"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="distribution-way">
          <span>配送方式</span>
          <span>包邮</span>
        </div>
        <div class="invoice">
          <span>发票</span>
          <span>电子发票</span>
          <span>个人</span>
          <span>商品明细</span>
        </div>
        <div class="goods-info">
          <div class="goods-item">
            <span class="goods-num">商品件数:</span>
            <span class="goods-last">7件</span>
          </div>
          <div class="goods-item">
            <span class="price-name">商品总价:</span>
            <span class="goods-last">6788元</span>
          </div>
          <div class="goods-item">
            <span class="discount">优惠活动:</span>
            <span class="goods-last">788元</span>
          </div>
          <div class="goods-item">
            <span class="distribution-name">运费:</span>
            <span class="goods-last">19元</span>
          </div>
          <div class="goods-item goods-total">
            <span class="distribution-name">应付总额:</span>
            <span class="goods-last">7899元</span>
          </div>
        </div>
        <div class="btn-box">
          <div class="go-cart btn btn-default">返回购物车</div>
          <div class="go-order btn">去结算</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'confirm',
  data () {
    return {
      addrList: [] //收货地址
    }
  },
  mounted () {
    this.getAddr()
  },
  methods: {
    getAddr () {
      this.axios.get('/shippings').then(res => {
        this.addrList = res.list
      })
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';

.confirm {
  width: 1226px;
  height: 800px;
  margin: 30px auto 204px;
  background-color: #fff;
  .container {
    .main-wrapper {
      padding: 38px 0 90px 63px;
      box-sizing: border-box;
      .getGoods {
        border-bottom: 1px solid #e5e5e5;
        h2 {
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #333333;
          margin-bottom: 21px;
        }
        .addr-box {
          display: flex;
          flex-wrap: wrap;

          .add-address {
            width: 271px;
            height: 180px;
            margin-bottom: 64px;
            margin-right: 12px;
            padding: 15px 20px;
            box-sizing: border-box;
            border: 1px solid #e5e5e5;
            span {
              display: inline-block;
            }
            .name {
              font-size: 18px;
              color: #333;
              margin-bottom: 10px;
            }
            .btn-box {
              height: 50px;
              line-height: 50px;
              .icon {
                width: 20px;
                height: 20px;
                fill: #666;
                &:hover {
                  fill: #ff6700;
                }
              }
            }
          }
        }
      }
      .distribution-way,
      .invoice {
        margin: 31px 0 41px;
        span:first-child {
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #333333;
          margin-right: 71px;
        }
        span {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #ff6700;
          margin-right: 23px;
        }
      }
      .invoice {
        margin: 0 0 50px 0;
        span:first-child {
          margin-right: 112px;
        }
      }
      .goods-info {
        text-align: right;
        border-bottom: 1px solid #e5e5e5;
        .goods-item {
          min-width: 127px;
          font-size: 16px;
          font-family: PingFang SC;
          color: #666666;
          margin-bottom: 12px;
          .goods-last {
            display: inline-block;
            width: 100px;
            color: #ff6700;
          }
        }
        .goods-total {
          font-weight: bold;
          margin: 21px 0 33px;
        }
      }
      .btn-box {
        text-align: right;
        margin-top: 37px;
        .go-cart {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>