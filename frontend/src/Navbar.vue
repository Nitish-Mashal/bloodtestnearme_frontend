<template>
  <header class="sticky top-0 z-50 w-full">
    <!-- Top Banner -->
    <div
      class="flex justify-center items-center py-[4px] text-[14px] bold-test-color font-semibold px-5 md:px-20 py-2 bg-white shadow-md">
      <span class="bold-test-color">Book Full Body Health Checkup @ ₹1,499/- with Vitamins</span>
      <button class="ml-3 global-bg-color text-white px-3 py-1 rounded-full text-sm hover:bg-[#005fa3] transition">
        Book Now
      </button>
    </div>

    <!-- Navbar -->
    <nav
      class="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-2 global-bg-color relative text-white sticky top-0 z-40 shadow-md">
      <div class="flex items-center justify-between w-full md:w-auto">
        <!-- Logo -->
        <div class="flex items-center space-x-2 bg-white rounded-full px-20 py-1">
          <router-link to="/">
            <img src="/bloodtestnearmelogo.png" alt="Blood Test Near Me Healthcare" class="h-6 w-70" />
          </router-link>
        </div>

        <!-- Mobile Hamburger -->
        <button @click.stop="toggleMenu" class="md:hidden focus:outline-none text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Search Bar (Mobile only) -->
      <div class="w-full md:hidden mt-2 px-2">
        <div class="relative">
          <input type="text" placeholder="Search Health Packages"
            class="w-full rounded-[5px] px-4 py-[6px] text-gray-700 text-sm focus:outline-none border border-gray-300" />
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 top-2.5 h-4 w-4 text-[#2077BF]" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
          </svg>
        </div>
      </div>

      <!-- Search Bar (Desktop) -->
      <div class="hidden md:flex items-center relative w-[20%]">
        <input type="text" placeholder="Search Health Packages"
          class="w-full rounded-[5px] px-4 py-[1px] text-gray-700 text-sm focus:outline-none" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 h-3 w-3 text-[#2077BF]" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
        </svg>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center space-x-8 font-normal">
        <router-link to="/BloodTestList" class="nav-link" :class="{ 'active-link': route.path === '/BloodTestList' }">
          Book a Test
        </router-link>

        <router-link to="/HealthCheckupList" class="nav-link"
          :class="{ 'active-link': route.path === '/HealthCheckupList' }">
          Health Checkups
        </router-link>

        <!-- Cart Icon -->
        <button class="transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343
              1.087.835l.383 1.437M7.5 14.25a3
              3 0 0 0-3 3h15.75m-12.75-3h11.218
              c1.121-2.3 2.1-4.684 2.924-7.138a60.114
              60.114 0 0 0-16.536-1.84M7.5 14.25
              5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0
              .75.75 0 0 1 1.5 0Zm12.75 0a.75.75
              0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition name="slide-fade">
        <div v-if="menuOpen" ref="dropdownRef" @click.stop
          class="w-full bg-[#0077c8] px-6 py-4 space-y-3 md:hidden z-50">
          <router-link to="/BloodTestList" class="nav-link block"
            :class="{ 'active-link': route.path === '/BloodTestList' }" @click="closeMenu">
            Book a Test
          </router-link>

          <router-link to="/HealthCheckupList" class="nav-link block"
            :class="{ 'active-link': route.path === '/HealthCheckupList' }" @click="closeMenu">
            Health Checkups
          </router-link>

          <button class="flex items-center space-x-2 py-1 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343
                1.087.835l.383 1.437M7.5 14.25a3
                3 0 0 0-3 3h15.75m-12.75-3h11.218
                c1.121-2.3 2.1-4.684 2.924-7.138a60.114
                60.114 0 0 0-16.536-1.84M7.5 14.25
                5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0
                .75.75 0 0 1 1.5 0Zm12.75 0a.75.75
                0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span>Cart</span>
          </button>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const dropdownRef = ref(null)
const route = useRoute()

const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    menuOpen.value = false
  }
}

watch(() => route.fullPath, () => closeMenu())

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
.nav-link {
  color: white !important;
  text-decoration: none !important;
  font-size: 14px;
  transition: all 0.2s ease;
  padding: 6px 10px;
  border-radius: 6px;
}

/* Hover effect */
.nav-link:hover {
  opacity: 0.9;
  text-decoration: underline;
}

/* ✅ Active link: bold + underline only */
.active-link {
  font-weight: 700 !important;
  text-decoration: underline !important;
  text-underline-offset: 4px;
}

/* Animation for mobile dropdown */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
