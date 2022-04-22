<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
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
    serviceBar,
    navFooter
  }
}
</script>
<style lang="scss">
</style>