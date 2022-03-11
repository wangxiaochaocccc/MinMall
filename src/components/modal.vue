<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <span class="close-btn" @click="$emit('cancle')">x</span>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-fotter">
          <a
            class="btn"
            href="javascript:;"
            @click="$emit('submit')"
            v-if="sureBtnType == 1"
            >{{ sureText }}</a
          >
          <a
            class="btn btn-default"
            href="javascript:;"
            @click="$emit('cancle')"
            v-if="sureBtnType == 2"
            >{{ cancletext }}</a
          >
          <div class="btn-group" v-if="sureBtnType == 3">
            <a class="btn" href="javascript:;" @click="$emit('submit')">{{
              sureText
            }}</a>
            <a
              class="btn btn-default"
              href="javascript:;"
              @click="$emit('cancle')"
              >{{ cancletext }}</a
            >
          </div>
        </div>
      </div>
      <div class="modal-mask"></div>
    </div>
  </transition>
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
    },
    showModal: Boolean
  }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/modal.scss';
</style>