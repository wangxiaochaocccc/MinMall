<template>
  <div class="product">
    <product-bar>
      <template v-slot:buy>
        <button class="btn btn-small">立即购买</button>
      </template>
    </product-bar>
  </div>
</template>

<script>
import productBar from './../components/product-bar'

export default {
  components: {
    productBar
  }
}
</script>
<style lang="scss">
.product {
  .btn {
    margin-left: 18px;
  }
}
</style>