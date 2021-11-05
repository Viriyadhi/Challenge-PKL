
<template>
  <div id="app">
    <Navbar v-on:click="console.log('Hi')" ref="navbar" :currentRouteName="currentRouteName" />
    <router-view @changeRoute="changeRoute"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  components: { Navbar },
  data () {
    return {
      currentRouteName: '',
    }
  },
  mounted() {
    this.currentRouteName = this.$route.name;
  },
  methods: {
    changeRoute(name) {
      console.log('print '+name);
      this.currentRouteName = name;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:wght@400;700&display=swap");
* {
  margin: 0;
  font-family: "Roboto", sans-serif;
  color: #6084b6;
}

nav {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);
}
</style>
