<template>
  <div class="ali-pay">
    <div class="qrcode" v-html="content"></div>
    <loading></loading>
  </div>
</template>

<script>
import Loading from './../components/loading'
export default {
  name: 'ali-pay',
  data () {
    return {
      orderId: this.$route.query.orderId,
      content: {}
    }
  },
  mounted () {
    this.getQrcode()
  },
  methods: {
    getQrcode () {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: '我要支付的订单',
        amount: 0.01,
        payType: 1
      }).then(res => {
        this.content = res.content
        setTimeout(function () {
          document.forms[0].submit()
        }, 100)
      })
    }
  },
  components: {
    Loading
  }
}
</script>
<style lang="scss">
</style>