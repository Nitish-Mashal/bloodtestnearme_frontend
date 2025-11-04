<template>
  <div class="mt-4">
    <div class="container px-2 sm:px-8 mt-6">
      <div class="bg-gray-100 py-4 px-4 rounded-xl">
        <el-carousel :loop="true" :autoplay="true" :interval="3000" height="200px" indicator-position="none">
          <el-carousel-item v-for="(group, index) in groupedOffers" :key="index">
            <div class="flex justify-center gap-4">
              <div v-for="offer in group" :key="offer.id" class="w-full md:w-1/2 cursor-pointer"
                @click="openLink(offer.link)">
                <img :src="offer.image"
                  class="w-full h-[180px] object-cover rounded-xl shadow-md hover:opacity-90 transition" />
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import axios from 'axios'

// Store fetched offers
const offers = ref([])

// Track window width for responsive grouping
const windowWidth = ref(window.innerWidth)
const isSmallScreen = computed(() => windowWidth.value < 640)

// Update window width on resize
const updateWidth = () => (windowWidth.value = window.innerWidth)
onMounted(() => window.addEventListener('resize', updateWidth))
onBeforeUnmount(() => window.removeEventListener('resize', updateWidth))

// Fetch offers from backend
const fetchOffers = async () => {
  try {
    const res = await axios.get('/api/method/bloodtestnearme.api.offers.get_offers')
    // API might return data in different structures — adjust accordingly
    offers.value = res.data.message || res.data || []
  } catch (err) {
    console.error('Error fetching offers:', err)
  }
}

// Group offers based on screen size
const groupedOffers = computed(() => {
  const groups = []
  const groupSize = isSmallScreen.value ? 1 : 2
  for (let i = 0; i < offers.value.length; i += groupSize) {
    groups.push(offers.value.slice(i, i + groupSize))
  }
  return groups
})

// Redirect to offer link
const openLink = (url) => {
  if (url) window.open(url, '_blank')
}

onMounted(fetchOffers)
</script>