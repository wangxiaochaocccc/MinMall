<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from "../components/nav-header";

export default {
  name: "nav-home",
  components: {
    NavHeader,
  },
};
</script>