<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>这是您的所有订单呦</span>
      </template>
    </order-header>
    <div class="container">
      <loading v-if="isloading"></loading>
      <ul class="order-box">
        <li class="order-item" v-for="(order, index) in list" :key="index">
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
      <el-pagination
        v-if="false"
        background
        class="pagination"
        layout="prev, pager, next"
        :total="total"
        :pageSize="pageSize"
        @current-change="handleChange"
      >
      </el-pagination>
      <div class="load-more">
        <el-button type="primary" :loading="load" @click="loadMore"
          >加载更多</el-button
        >
      </div>
      <div
        class="scroll-more"
        v-infinite-scroll="scrollMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="410"
      >
        <img
          src="/imgs/loading-svg/loading-spinning-bubbles.svg"
          v-show="isloading"
        />
      </div>
      <no-data v-if="!isloading && list.length == 0"></no-data>
    </div>
  </div>
</template>

<script>
import orderHeader from './../components/order-header'
import Loading from './../components/loading'
import NoData from '../components/no-data.vue'
import { Pagination, Button } from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'

export default {
  name: 'order-list',
  data () {
    return {
      list: [],
      isloading: true,
      total: 0, //数据总数
      pageSize: 10,
      pageNum: 1,
      load: false, //加载更多按钮加载中状态
      busy: false, //判断是否滚动
    }
  },
  directives: { infiniteScroll },
  mounted () {
    this.getOrderList()
  },
  methods: {
    getOrderList () {
      this.load = true
      this.busy = true
      this.axios.get('/orders', {
        params: {
          pageNum: this.pageNum
        }
      }).then(res => {
        this.load = false
        this.isloading = false
        this.list = this.list.concat(res.list)
        this.total = res.total
        this.busy = false
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
    },
    handleChange (pageNum) {
      this.pageNum = pageNum
      this.getOrderList()
    },
    loadMore () {
      this.pageNum++
      this.getOrderList()
    },
    // 滚动加载
    scrollMore () {
      this.busy = true
      setTimeout(() => {
        this.pageNum++
        this.getList()
      }, 500)
    },
    // 专门给滚动加载用
    getList () {
      this.isloading = true
      this.axios.get('/orders', {
        params: {
          pageNum: this.pageNum
        }
      }).then(res => {
        this.list = this.list.concat(res.list)
        this.isloading = false
        if (res.hasNextPage) {
          this.busy = false
        } else {
          this.busy = true
        }
      })
    },
  },
  components: {
    orderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button
  }
}
</script>
<style lang="scss">
.order-list {
  background-color: #f5f5f5;
  padding-bottom: 30px;
  ul.order-box {
    box-sizing: border-box;
    padding: 31px 0;
    li.order-item {
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
          margin-bottom: 30px;
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
  .load-more,
  .scroll-more {
    text-align: center;
  }
  .pagination {
    text-align: right;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6600;
  }
  .el-button--primary {
    background-color: #ff6600;
    border-color: #ff6600;
  }
}
</style>