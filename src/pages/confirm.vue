<template>
  <div class="confirm">
    <order-header title="订单确认">
      <template v-slot:tip>
        <span>请确认您购买的商品</span>
      </template>
    </order-header>
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
              :class="{ checked: index === checkedIndex }"
              @click="checkedIndex = index"
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
                <a href="javascript:;" class="fr" @click="editModal(item)">
                  <svg class="icon icon-edit">
                    <use xlink:href="#icon-edit"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div class="add-address add-address-default" @click="openEditModal">
              <div class="icon"></div>
              <span>新增地址</span>
            </div>
          </div>
        </div>
        <div class="googs-item">
          <h2>商品</h2>
          <ul>
            <li v-for="(item, index) in cartList" :key="index">
              <div class="left">
                <img :src="item.productMainImage" alt="" />
                <span class="name">{{ item.productName }}</span>
              </div>
              <div class="middle">
                {{ item.productPrice }}元 x {{ item.quantity }}
              </div>
              <div class="right">{{ item.productTotalPrice }}元</div>
            </li>
          </ul>
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
            <span class="goods-last">{{ goodsNum }}件</span>
          </div>
          <div class="goods-item">
            <span class="price-name">商品总价:</span>
            <span class="goods-last">{{ totalPrice }}元</span>
          </div>
          <div class="goods-item">
            <span class="discount">优惠活动:</span>
            <span class="goods-last">0元</span>
          </div>
          <div class="goods-item">
            <span class="distribution-name">运费:</span>
            <span class="goods-last">0元</span>
          </div>
          <div class="goods-item goods-total">
            <span class="distribution-name">应付总额:</span>
            <span class="goods-last">{{ totalPrice }}元</span>
          </div>
        </div>
        <div class="btn-box">
          <a href="/#/cart" class="go-cart btn btn-default">返回购物车</a>
          <a href="javascript:;" class="go-order btn" @click="orderSubmit"
            >去结算</a
          >
        </div>
      </div>
    </div>
    <modal
      title="新增地址"
      sureBtnType="1"
      :showModal="isShowEditModal"
      @cancle="isShowEditModal = false"
      @submit="submitAddr"
    >
      <template v-slot:body>
        <div class="edit-wrapper">
          <div class="wrapper">
            <input
              type="text"
              class="input"
              placeholder="请输入姓名"
              v-model="addrInfo.receiverName"
            />
            <input
              type="text"
              class="input"
              placeholder="请输入电话"
              v-model="addrInfo.receiverMobile"
            />
          </div>
          <div class="wrapper">
            <select name="province" v-model="addrInfo.receiverProvince">
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="上海">上海</option>
            </select>
            <select name="city" v-model="addrInfo.receiverCity">
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="上海">上海</option>
            </select>
            <select name="district" v-model="addrInfo.receiverDistrict">
              <option value="房山区">房山区</option>
              <option value="海淀区">海淀区</option>
              <option value="丰台区">丰台区</option>
            </select>
          </div>
          <div class="wrapper">
            <textarea
              name="address"
              placeholder="请输入地址"
              v-model="addrInfo.receiverAddress"
            ></textarea>
          </div>
          <div class="wrapper">
            <input
              type="text"
              class="input"
              placeholder="请输入邮编"
              v-model="addrInfo.receiverZip"
            />
          </div>
        </div>
      </template>
    </modal>
    <modal
      title="确认删除"
      sureBtnType="1"
      :showModal="isShowModal"
      @cancle="isShowModal = false"
      @submit="submitAddr"
    >
      <template v-slot:body>确定删除么？</template>
    </modal>
  </div>
</template>

<script>
import Modal from './../components/modal'
import orderHeader from './../components/order-header'
export default {
  name: 'confirm',
  data () {
    return {
      addrList: [], //收货地址
      totalPrice: '', //总价
      goodsNum: 0, //数量
      cartList: [], //商品列表
      actionType: '', //操作类型 0 添加 1编辑 2删除
      addrInfo: {}, //操作地址的相关数据
      isShowModal: false,
      isShowEditModal: false, //编辑 新增弹框是否显示
      checkedIndex: 0, //选中地址的索引
    }
  },
  mounted () {
    this.getAddr()
    this.getCartList()
  },
  methods: {
    getAddr () {
      this.axios.get('/shippings').then(res => {
        this.addrList = res.list
      })
    },
    getCartList () {
      this.axios.get('/carts').then(res => {
        this.totalPrice = res.cartTotalPrice
        this.cartList = res.cartProductVoList.filter(item => item.productSelected)
        this.cartList.map(item => {
          this.goodsNum += item.quantity
        })
      })
    },
    delAddress (item) {
      this.addrInfo = item
      this.isShowModal = true
      this.actionType = 2
    },
    submitAddr () {
      let { addrInfo, actionType } = this;
      let method, url, params;
      if (actionType == 0) {
        method = 'post', url = '/shippings'
      } else if (actionType == 1) {
        method = 'put', url = `/shippings/${addrInfo.id}`
      } else {
        method = 'delete', url = `/shippings/${addrInfo.id}`
      }

      // params参数
      if (actionType == 0 || actionType == 1) {
        let { receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip } = addrInfo
        // 参数校验
        let errMsg = ''
        if (!receiverName) {
          errMsg = '请输入收货人姓名'
        } else if (!receiverMobile || !/\d{11}/.test(receiverMobile)) {
          errMsg = '请输入正确的手机号'
        } else if (!receiverProvince) {
          errMsg = '请输入省份'
        } else if (!receiverCity) {
          errMsg = '请输入所在市'
        } else if (!receiverDistrict || !receiverAddress) {
          errMsg = '请输入收获地址'
        } else if (!receiverMobile || !/\d{6}/.test(receiverZip)) {
          errMsg = '请输入正确的邮编'
        }
        if (errMsg) {
          this.$message.error(errMsg)
          return
        }
        params = {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip
        }
      }
      this.axios[method](url, params).then(() => {
        this.closeModal()
        this.getAddr()
        this.$message.success('操作成功')
      })
    },
    closeModal () {
      this.actionType = ''
      this.addrInfo = {}
      this.isShowModal = false
      this.isShowEditModal = false
    },
    // 打开新增地址modal
    openEditModal () {
      this.isShowEditModal = true
      this.actionType = 0
      this.addrInfo = {}
    },
    // 编辑
    editModal (item) {
      this.isShowEditModal = true
      this.actionType = 1
      this.addrInfo = item
    },
    orderSubmit () {
      let item = this.addrList[this.checkedIndex]
      if (!item) {
        this.$message.error('请选择收货地址')
        return
      }
      this.axios.post('/orders', {
        shippingId: item.id
      }).then(res => {
        this.$router.push({
          path: '/order/pay',
          query: {
            orderNo: res.orderNo
          }
        })
      })
    }
  },
  components: {
    Modal,
    orderHeader
  }
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';

.confirm {
  width: 1226px;
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
            &.checked {
              border-color: #ff6700;
            }
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
          .add-address-default {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            .icon {
              width: 30px;
              height: 30px;
              background: url(/imgs/icon-add.png);
              background-color: #666;
              border-radius: 50%;
              background-size: cover;
              margin-bottom: 10px;
            }
          }
        }
      }
      .googs-item {
        margin: 15px 0 0 0;
        h2 {
          margin-bottom: 15px;
        }
        li {
          height: 50px;
          display: flex;
          align-items: center;
          font-size: 16px;
          font-weight: 500;
          border-bottom: 1px solid #e5e5e5;
          img {
            width: 30px;
            height: 30px;
            vertical-align: middle;
          }
          .left {
            flex: 5px;
          }
          .middle {
            flex: 2;
            text-align: center;
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
  .edit-wrapper {
    font-size: 18px;
    .wrapper {
      margin-bottom: 15px;
      input {
        display: inline-block;
        width: 283px;
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
        border: 1px solid #e5e5e5;
        & + .input {
          margin-left: 10px;
        }
      }
      select {
        width: 80px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #e5e5e5;
        margin-right: 15px;
        color: #999;
      }
      textarea {
        width: 580px;
        height: 80px;
        padding: 15px 20px;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
      }
    }
  }
}
</style>