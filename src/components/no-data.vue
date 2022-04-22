<template>
  <div class="no-data">
    <img src="/imgs/icon-no-data.png" alt="" />
    <p>暂无提交的订单呦</p>
  </div>
</template>

<script>
export default {
  name: 'no-data'
}
</script>
<style lang="scss">
.no-data {
  text-align: center;
  padding: 30px 0 100px;
  box-sizing: border-box;
  img {
    width: 240px;
    height: 180px;
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
    color: #999;
  }
}
</style>