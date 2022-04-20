<template>
  <div class="order-pay">
    <div class="container">
      <div class="order-pay-top">
        <div class="order-succ-box">
          <div class="succss-icon"></div>
          <div class="order-explain">
            <p class="succ-title">订单提交成功！去付款咯～</p>
            <p class="order-limit-time">
              请在<span class="orange">0小时30分</span>内完成支付,
              超时后将取消订单
            </p>
            <p class="consignee">
              收货信息：高丽 183****0972 北京 北京市 朝阳区 望京街道
              望京(地铁站)
            </p>
          </div>
          <div class="order-price">
            <div class="price">
              应付总额：<span class="span-price">2198元</span>
            </div>
            <div class="order-detail">订单详情 <i class="icon-down"></i></div>
          </div>
        </div>
        <div class="order-info">
          <div class="consignee-num item-info">
            <span class="l">订单号：</span>
            <span class="r orange">5190702816411009</span>
          </div>
          <div class="consignee-info item-info">
            <span class="l">收货信息：</span>
            <span class="r"
              >高丽 183****0972 北京 北京市 朝阳区 望京街道 望京(地铁站)</span
            >
          </div>
          <div class="goods-name item-info">
            <span class="l">商品名称：</span>
            <span class="r"
              >小米8 青春 全网通版 6GB内存 深空灰 64GB 小米8青春版 标准高透贴膜
              高透</span
            >
          </div>
          <div class="ticket-info item-info">
            <span class="l">发票信息：</span>
            <span class="r">电子发票 个人</span>
          </div>
        </div>
      </div>
      <div class="order-pay-bottom">
        <div class="pay-way">选择以下支付方式付款</div>
        <div class="pay-title">支付平台</div>
        <div class="pay-way-box">
          <div class="pay-btn active">
            <div class="weixin"></div>
          </div>
          <div class="pay-btn">
            <div class="ali"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
.order-pay {
  width: 100%;
  background-color: #f5f5f5;
  padding: 30px 0 130px;
  .container {
    background-color: #f5f5f5;
    .orange {
      color: #ff6600;
    }
    .order-pay-top {
      box-sizing: border-box;
      padding: 0 51px 53px 53px;
      background-color: #fff;
      margin-bottom: 30px;
      .order-succ-box {
        height: 206px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #d7d7d7;
        margin-bottom: 49px;
        .succss-icon {
          width: 90px;
          height: 90px;
          line-height: 90px;
          background: url('/imgs/icon-gou.png') no-repeat center;
          border-radius: 50%;
          background-color: #7ec688;
          background-size: 60px;
          margin-right: 42px;
        }
        .order-explain {
          flex: 4;
          font-family: PingFang SC;
          font-weight: bold;
          .succ-title {
            font-size: 24px;
            color: #333333;
            line-height: 60px;
            margin-bottom: 20px;
          }
          .order-limit-time,
          .consignee {
            font-size: 14px;
            color: #666666;
            line-height: 24px;
          }
        }
        .order-price {
          font-size: 14px;
          color: #666666;
          line-height: 24px;
          font-weight: bold;

          .price {
            margin-bottom: 30px;
            .span-price {
              color: #ff6600;
              font-size: 32px;
            }
          }
          .order-detail {
            text-align: right;
            .icon-down {
              display: inline-block;
              width: 14px;
              height: 10px;
              background: url('/imgs/icon-down.png') no-repeat center;
              background-size: cover;
            }
          }
        }
      }
      .order-info {
        margin-left: 133px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #333333;
        line-height: 24px;
        .item-info {
          margin-bottom: 19px;
          span {
            display: inline-block;
          }
          .l {
            width: 72px;
            margin-right: 27px;
          }
        }
      }
    }
    .order-pay-bottom {
      padding: 0 55px 72px 52px;
      background-color: #fff;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
      .pay-way {
        height: 70px;
        line-height: 70px;
        font-size: 20px;
        border-bottom: 1px solid #d7d7d7;
        margin-bottom: 26px;
      }
      .pay-title {
        font-size: 18px;
        margin-bottom: 19px;
      }
      .pay-way-box {
        display: flex;
        .pay-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 188px;
          height: 64px;
          border: 1px solid #d7d7d7;
          margin-right: 20px;
          .weixin {
            width: 111px;
            height: 33px;
            background: url('/imgs/icon-wechat.png') no-repeat center;
            background-size: cover;
          }
          .ali {
            width: 103px;
            height: 38px;
            background: url('/imgs/icon-ali.png') no-repeat center;
            background-size: cover;
          }
          &.active {
            border: 1px solid #ff6700;
          }
        }
      }
    }
  }
}
</style>