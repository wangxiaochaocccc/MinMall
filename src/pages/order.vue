<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip>
        <span>{{ tip }}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import orderHeader from './../components/order-header'
import navFooter from './../components/nav-footer'
import serviceBar from './../components/service-bar'
export default {
  name: 'order',
  data () {
    return {
      tip: '',
      title: ''
    }
  },
  components: {
    orderHeader,
    serviceBar,
    navFooter
  },
  mounted () {
    let path = this.$route.path
    if (path == '/order/confirm') {
      this.title = '确认订单'
      this.tip = '请确认您购买的商品'
    } else if (path == '/order/list') {
      this.title = '订单列表'
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多'
    } else if (path == '/order/pay') {
      this.title = '支付确认'
      this.tip = '请谨慎支付'
    }
  }
}
</script>
<style lang="scss">
</style>