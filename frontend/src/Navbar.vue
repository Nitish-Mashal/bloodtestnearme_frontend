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

      <!-- Logo + Hamburger -->
      <div class="flex items-center justify-between w-full md:w-auto">
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

      <!-- 🔍 Search + Cart (Mobile) -->
      <div class="flex items-center justify-between w-full md:hidden mt-2 px-2" ref="mobileSearchRef">
        <!-- Search -->
        <div class="relative flex-1 mr-2">
          <input v-model="searchQuery" @input="handleSearch" type="text" placeholder="Search"
            class="w-full rounded-[5px] px-4 py-[2px] text-gray-700 text-sm focus:outline-none border border-gray-300" />
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-2 h-4 w-4 text-[#2077BF]" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
          </svg>

          <!-- Autocomplete for mobile -->
          <div v-if="showResults"
            class="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1 z-50 max-h-60 overflow-y-auto">
            <div v-if="loading" class="text-gray-500 text-sm px-4 py-2">Searching...</div>
            <div v-else-if="searchResults.length === 0 && searchQuery.length > 0"
              class="text-gray-500 text-sm px-4 py-2">
              No results found
            </div>
            <ul v-else>
              <li v-for="(item, index) in searchResults" :key="index"
                class=" py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
                <router-link :to="`/${item.url}`" class="block w-full h-full no-underline" @click="clearSearch">
                  {{  item.name1 }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- Cart Icon -->
        <router-link to="/CartPage" class="relative">
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

          <span v-if="cartCount > 0"
            class="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {{ cartCount }}
          </span>
        </router-link>
      </div>

      <!-- Search (Desktop) -->
      <div class="hidden md:flex items-center relative w-[20%]" ref="desktopSearchRef">
        <input v-model="searchQuery" @input="handleSearch" type="text" placeholder="Search"
          class="w-full rounded-[5px] px-4 py-[1px] text-gray-700 text-sm focus:outline-none" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 h-3 w-3 text-[#2077BF]" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
        </svg>

        <!-- Autocomplete for desktop -->
        <div v-if="showResults"
          class="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1 z-50 max-h-60 overflow-y-auto">
          <div v-if="loading" class="text-gray-500 text-sm px-4 py-2">Searching...</div>
          <div v-else-if="searchResults.length === 0 && searchQuery.length > 0" class="text-gray-500 text-sm px-4 py-2">
            No results found
          </div>
          <ul v-else>
            <li v-for="(item, index) in searchResults" :key="index"
              class="py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
              <router-link :to="`/${item.url}`" class="block w-full h-full no-underline" @click="clearSearch">
                {{ item.name1 }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center space-x-8 font-normal">
        <router-link to="/blood-test-online-bangalore" class="nav-link"
          :class="{ 'active-link': route.path === '/blood-test-online-bangalore' }">
          Book a Test
        </router-link>

        <router-link to="/health-checkup-packages-bangalore" class="nav-link"
          :class="{ 'active-link': route.path === '/health-checkup-packages-bangalore' }">
          Health Checkups
        </router-link>

        <!-- Cart -->
        <router-link to="/CartPage" class="relative">
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

          <span v-if="cartCount > 0"
            class="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {{ cartCount }}
          </span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

// ✅ Cart store
const cartStore = useCartStore()
const { cartCount } = storeToRefs(cartStore)

// ✅ Reactive states
const searchQuery = ref('')
const searchResults = ref([])
const loading = ref(false)
const showResults = ref(false)
const desktopSearchRef = ref(null)
const mobileSearchRef = ref(null)

const route = useRoute()

// 🔍 Fetch results from API
const handleSearch = async () => {
  const query = searchQuery.value.trim()
  if (!query) {
    searchResults.value = []
    showResults.value = false
    return
  }

  loading.value = true
  showResults.value = true

  try {
    const res = await fetch(`/api/method/bloodtestnearme.api.search_api.global_quick_search?query=${encodeURIComponent(query)}`)
    const data = await res.json()
    searchResults.value = data?.message || []
  } catch (err) {
    console.error('Search error:', err)
  } finally {
    loading.value = false
  }
}

// ✅ Clear results when user clicks result or navigates
const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
  showResults.value = false
}

// ✅ Hide dropdown on outside click
const handleClickOutside = (e) => {
  const isOutside =
    (!desktopSearchRef.value || !desktopSearchRef.value.contains(e.target)) &&
    (!mobileSearchRef.value || !mobileSearchRef.value.contains(e.target))
  if (isOutside) showResults.value = false
}

document.addEventListener('click', handleClickOutside)
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))

// ✅ Close dropdown when route changes
watch(() => route.fullPath, clearSearch)
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: white;
}

.active-link {
  font-weight: bold;
  text-decoration: underline;
}
</style>
