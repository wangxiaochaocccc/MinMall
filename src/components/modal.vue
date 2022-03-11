<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <span>{{ title }}</span>
        <span class="close-btn">x</span>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-fotter">
        <div class="btn-group">
          <a class="btn" href="javascript:;">确定</a>
          <a class="btn btn-default" href="javascript:;">取消</a>
        </div>
      </div>
    </div>
    <div class="modal-mask"></div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    // modal类型，1-大 2-中 3-小 4-form表单
    modalType: {
      type: String,
      default: '1'
    },
    // 标题
    title: String,
    // 按钮类型 1显示确定 2显示取消 3确定取消都有
    sureBtnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancletext: {
      type: String,
      default: '取消'
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/modal.scss';
</style>