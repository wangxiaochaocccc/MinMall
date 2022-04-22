<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>这是您的所有订单呦</span>
      </template>
    </order-header>
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
<style scoped>
</style>