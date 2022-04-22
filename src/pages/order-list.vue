<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>这是您的所有订单呦</span>
      </template>
    </order-header>
    <div class="container">
      <ul>
        <li>
          <div class="order-info">
            <div class="left-info">2019年10月10日 19:20 | 陈建兵</div>
            <div class="right-price">应付金额： <em>1998.00</em> 元</div>
          </div>
          <div class="goods-info">
            <div class="left-goods">
              <img src="" alt="" />
              <div class="goods-name">
                <p class="name">Redmi Note 8 4GB+64GB 皓月白 64GB</p>
                <p class="price">999元 X 2</p>
              </div>
            </div>
            <div class="right-status">未支付</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import orderHeader from './../components/order-header'

export default {
  name: 'order-list',
  components: {
    orderHeader
  }
}
</script>
<style lang="scss">
.order-list {
  background-color: #f5f5f5;
  ul {
    box-sizing: border-box;
    padding: 31px 0;
    li {
      width: 1226px;
      height: 220px;
      background: #ffffff;
      border: 1px solid #ff6700;
      .order-info {
        width: 1224px;
        height: 74px;
        background: #fffaf7;
        padding: 0 43px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        font-size: 16px;
        color: #666666;
        .right-price {
          em {
            font-style: normal;
            font-size: 26px;
            color: #333;
          }
        }
      }
      .goods-info {
        padding: 24px 43px 32px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        .left-goods {
          display: flex;
          align-items: center;
          img {
            height: 100%;
          }
          .goods-name {
            color: #333;
          }
        }
        .right-status {
          color: #ff6600;
        }
      }
    }
  }
}
</style>