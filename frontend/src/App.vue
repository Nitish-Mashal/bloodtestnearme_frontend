<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
* {
  font-family: 'Ubuntu', sans-serif;
}
</style>
