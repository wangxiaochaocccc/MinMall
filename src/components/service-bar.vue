<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="iconfont">&#xe62e;</span>预约维修服务</li>
        <li><span class="iconfont">&#xe611;</span>7天无理由退货</li>
        <li><span class="iconfont">&#xe606;</span>15天免费换货</li>
        <li><span class="iconfont">&#xe600;</span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped lang="scss">
@import './../assets/scss/base.scss';

.service {
  padding: 25px 0;
  color: #666666;
  font-size: 16px;
  ul {
    li {
      display: inline-block;
      width: 24.8%;
      border-right: 1px solid #e5e5e5;
      text-align: center;
      span {
        display: inline-block;
        height: 20px;
        font-size: 18px;
        line-height: 20px;
        margin-right: 2px;
      }
    }
    li:last-child {
      border-right: 0;
    }
  }
}
</style>