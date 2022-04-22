<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>这是您的所有订单呦</span>
      </template>
    </order-header>
    <div class="container">
      <loading v-if="isloading"></loading>
      <ul>
        <li v-for="(order, index) in list" :key="index">
          <div class="order-info">
            <div class="left-info">
              {{ order.createTime }}
              <span>|</span>
              {{ order.receiverName }}
              <span>|</span>
              {{ '订单号：' + order.createTime }}
              <span>|</span>
              {{ order.paymentTypeDesc }}
            </div>
            <div class="right-price">
              应付金额： <em>{{ order.payment }}</em> 元
            </div>
          </div>
          <div class="goods-info">
            <div class="goods-left">
              <div
                class="left-goods"
                v-for="(goods, i) in order.orderItemVoList"
                :key="i"
              >
                <img :src="goods.productImage" alt="" />
                <div class="goods-name">
                  <p class="name">{{ goods.productName }}</p>
                  <p class="price">
                    {{ goods.totalPrice + 'X' + goods.quantity }}
                  </p>
                </div>
              </div>
            </div>

            <div class="right-status" v-if="order.status == 10">
              <a href="javascript:;" @click="gotoPay(order.orderNo)">{{
                order.statusDesc
              }}</a>
            </div>
            <div class="right-status" v-else>
              <a href="javascript:;">{{ order.statusDesc }}</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import orderHeader from './../components/order-header'
import Loading from './../components/loading'

export default {
  name: 'order-list',
  data () {
    return {
      list: [],
      isloading: true
    }
  },
  mounted () {
    this.getOrderList()
  },
  methods: {
    getOrderList () {
      this.axios.get('/orders').then(res => {
        this.isloading = false
        this.list = res.list
      }).catch(() => {
        this.isloading = false
      })
    },
    gotoPay (orderNo) {
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      })
    }
  },
  components: {
    orderHeader,
    Loading
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
      background: #ffffff;
      border: 1px solid #d7d7d7;
      margin-bottom: 31px;
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
        .left-info {
          span {
            display: inline-block;
            margin: 0 9px;
          }
        }
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
            width: 70px;
          }
          .goods-name {
            color: #333;
          }
        }
        .right-status {
          a {
            color: #ff6600;
          }
        }
      }
    }
  }
}
</style>