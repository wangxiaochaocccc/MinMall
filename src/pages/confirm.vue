<template>
  <div class="confirm">
    <div class="container">
      <div class="main-wrapper">
        <div class="getGoods">
          <h2>收货地址</h2>
          <div class="add-address">添加新地址</div>
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
  name: 'confirm'
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
        .add-address {
          width: 271px;
          height: 180px;
          line-height: 180px;
          border: 1px solid #e5e5e5;
          text-align: center;
          margin-bottom: 64px;
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