<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="container container2">
      <div class="cart-box">
        <ul class="top-title">
          <li class="col-1 all-choose-box">
            <span
              class="all-choose"
              :class="{ checked: allSelected }"
              @click="toggleAll"
            ></span
            >全选
          </li>
          <li class="product-name col-3">
            <span>商品名称</span>
          </li>
          <li class="col-1">单价</li>
          <li class="col-2">数量</li>
          <li class="col-1">小计</li>
          <li class="col-1">操作</li>
        </ul>
        <ul class="bottom-cont">
          <li v-for="(item, index) in cartData" :key="index">
            <div class="check-box">
              <span
                class="choose"
                :class="{ checked: item.productSelected }"
                @click="cartNumUpdate(item)"
              ></span>
            </div>
            <div class="name-box">
              <img v-lazy="item.productMainImage" />
              <span class="name">{{ item.productName }}</span>
            </div>
            <div class="price">{{ item.productPrice }}元</div>
            <div class="num-box">
              <div class="cont-box">
                <span @click="cartNumUpdate(item, '-')">-</span>
                <span>{{ item.quantity }}</span>
                <span @click="cartNumUpdate(item, '+')">+</span>
              </div>
            </div>
            <div class="all-price">{{ item.productTotalPrice }}元</div>
            <div class="icon-delete" @click="delProduct(item.productId)">x</div>
          </li>
        </ul>
      </div>

      <div class="cart-bottom">
        <div class="left">
          <span>继续购物</span>
          <span
            >共 <i>{{ allNum }}</i> 件商品，已选择 <i>{{ chooseNum }}</i
            >件</span
          >
        </div>
        <div class="right">
          <span>合计：{{ allPrice }}元</span>
          <span class="btn" @click="goToOrder">去结算</span>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import ServiceBar from '../components/service-bar'
import navFooter from './../components/nav-footer'
import orderHeader from './../components/order-header'
export default {
  data () {
    return {
      cartData: [], //产品信息
      allSelected: false,//是否全选
      allNum: 0, //总商品数
      chooseNum: 0, //选择商品数
      allPrice: 0 //总价

    }
  },
  mounted () {
    this.getCartData()
  },
  methods: {
    getCartData () {
      this.axios.get('/carts').then(res => {
        this.renderData(res)
      })
    },
    toggleAll () {
      let url = this.allSelected ? '/carts/unSelectAll' : '/carts/selectAll'
      this.axios.put(url).then(res => {
        this.renderData(res)

      })
    },
    renderData (res) {
      this.cartData = res.cartProductVoList
      this.allSelected = res.selectedAll
      this.allNum = res.cartTotalQuantity
      this.allPrice = res.cartTotalPrice
      this.chooseNum = res.cartProductVoList.filter(item => item.productSelected).length
    },
    // 购物车数量加减功能及单选功能
    cartNumUpdate (item, type) {
      let quantity = item.quantity,
        selected = item.productSelected
      if (type == '-') {
        if (quantity === 1) {
          alert('商品数量最小为1')
          return
        }
        --quantity
      } else if (type == '+') {
        if (quantity > item.productStock) {
          alert('商品数量不能大于库存')
          return
        }
        ++quantity
      } else {
        selected = !item.productSelected
      }
      this.axios.put(`/carts/${item.productId}`, {
        quantity,
        selected
      }).then(res => {
        this.renderData(res)
      })
    },
    // 删除商品
    delProduct (productId) {
      this.axios.delete(`/carts/${productId}`, {
        productId
      }).then(res => {
        this.renderData(res)
      })
    },
    // 去结算
    goToOrder () {
      let isCheck = this.cartData.every(item => !item.productSelected)
      if (isCheck) {
        alert('选择商品后才能结算哦')
      } else {
        this.$router.push('/order/confirm')
      }
    }
  },
  components: {
    navFooter,
    ServiceBar,
    orderHeader
  },
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
.cart {
  background-color: $colorJ;
  .container2 {
    padding: 32px 0 133px;
    .cart-box {
      width: 1226px;
      background: #ffffff;
      padding: 0 43px;
      box-sizing: border-box;
      .top-title {
        height: 79px;
        line-height: 79px;
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        li {
          display: inline-block;
          font-size: $fontJ;
          color: $colorC;
          vertical-align: middle;
          text-align: center;
        }
        .all-choose-box {
          text-align: left;
        }
        .col-1 {
          flex: 1;
        }
        .col-2 {
          flex: 2;
        }
        .col-3 {
          flex: 3;
        }
        .all-choose {
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid $colorD;
          margin-right: 10px;
          vertical-align: middle;
          &.checked {
            background: url('/imgs/icon-gou.png') $colorA no-repeat center;
            background-size: 16px 12px;
            border: 0;
          }
        }
        .product-name {
          text-align: left;
          span {
            margin-left: 110px;
          }
        }
      }
      .bottom-cont {
        li {
          height: 125px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          border-bottom: 1px solid #e5e5e5;
          font-size: $fontH;
          color: $colorB;
          .check-box {
            flex: 1;
            .choose {
              display: inline-block;
              width: 22px;
              height: 22px;
              border: 1px solid $colorD;
              margin-right: 10px;
              vertical-align: middle;
              &.checked {
                background: url('/imgs/icon-gou.png') $colorA no-repeat center;
                background-size: 16px 12px;
                border: 0;
              }
            }
          }
          .name-box {
            flex: 3;
            display: flex;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
              vertical-align: middle;
              margin-right: 30px;
            }
          }
          .price {
            flex: 1;
          }
          .num-box {
            flex: 2;
            .cont-box {
              width: 150px;
              height: 40px;
              line-height: 40px;
              border: 1px solid #e5e5e5;
              box-sizing: border-box;
              padding: 0 22px;
              display: flex;
              justify-content: space-between;
              margin: 0 auto;
              cursor: pointer;
            }
          }
          .all-price {
            flex: 1;
          }
          .icon-delete {
            cursor: pointer;
            flex: 1;
          }
        }
      }
    }
    .cart-bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .left {
        font-size: $fontJ;
        color: $colorC;
        span:first-child {
          margin-right: 37px;
        }
        i {
          font-style: normal;
          color: $colorA;
        }
      }
      .right {
        span:first-child {
          color: $colorA;
          margin-right: 31px;
        }
      }
    }
  }
}
</style>