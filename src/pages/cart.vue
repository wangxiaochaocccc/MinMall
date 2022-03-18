<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span></span>
      </template>
    </order-header>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import ServiceBar from '../components/service-bar'
import navFooter from './../components/nav-footer'
import orderHeader from './../components/order-header'
export default {
  components: {
    navFooter,
    ServiceBar,
    orderHeader
  },
}
</script>
<style scoped>
</style>