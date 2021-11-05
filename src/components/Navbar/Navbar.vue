<template>
  <nav :style="currentRouteName == 'InfoLomba' ? {'height': '0px'} : {'height': '96px'}">
    <img src="@/assets/ysc-1.png" />
    <ul class="navbar-link">
      <router-link :to="{ name: 'HomePage' }">
        <a class="">Beranda</a>
      </router-link>
            <router-link :to="{ name: 'InfoLomba' }">
        <a class="">Info Lomba</a>
      </router-link>
      <router-link :to="{ name: 'About' }">
        <a class="">Tentang</a>
      </router-link>
      <router-link :to="{ name: 'InfoLomba' }">
        <a class="">FAQ</a>
      </router-link>
      <router-link :to="{ name: 'InfoLomba' }">
        <a class="">Kontak</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: [
    'currentRouteName'
  ],
  methods: {
    changeActive(index) {
      document.querySelectorAll("nav li")[index].setAttribute("class", "active");
    },
  },
};
</script>

<style scoped>
nav {
  padding: 0 96px;
}

nav > img {
  float: left;
}

.navbar-link {
  float: right;
  list-style: none;
  margin: 33px 0px;
}

.navbar-link > a {
  text-decoration: none;
  display: inline;
  padding: 8px 15px;
  margin: 0 20px;
  color: #6084b6;
  font-size: 25px;
}

.navbar-link .active {
  border-color: #6084b6;
  border-style: solid;
  border-radius: 50px;
}
</style>
