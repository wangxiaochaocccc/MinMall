<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from "./storage";

export default {
  name: "App",
  mounted () {
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartNum()
    }
  },
  methods: {
    getUser () {
      this.axios.get('/user').then((res) => {
        this.$store.dispatch('setUserName', res?.username)
      })
    },
    getCartNum () {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('setCartNum', res)
      })
    }
  }
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
