<template>
  <div>
    <Navbar />
    <router-view />
    <WhatsappFloat />
    <ScrollToTop />
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue';
import ScrollToTop from './ScrollToTop.vue';
import WhatsappFloat from './WhatsappFloat.vue';

export default {
  components: {
    Navbar,
    ScrollToTop,
    WhatsappFloat,
    Footer
  }
}
</script>

<style>
* {
  font-family: 'Ubuntu', sans-serif;
}
</style>
