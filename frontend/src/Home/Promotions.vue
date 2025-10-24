<template>
  <div class="mt-4 flex justify-center">
    <div class="bg-gray-100 py-4 px-4 rounded-xl w-[95%] md:w-[90%]">
      <el-carousel :loop="true" :autoplay="true" :interval="3000" height="200px" indicator-position="none">
        <el-carousel-item v-for="(group, index) in groupedImages" :key="index">
          <div class="flex justify-center gap-4">
            <div v-for="img in group" :key="img" class="w-full md:w-1/2">
              <img :src="img" class="w-full h-[180px] object-cover rounded-xl shadow-md" />
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const images = [
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image4.png'
]

const windowWidth = ref(window.innerWidth)
const isSmallScreen = computed(() => windowWidth.value < 640) // Tailwind 'sm' breakpoint

// Update width on resize
const updateWidth = () => (windowWidth.value = window.innerWidth)
onMounted(() => window.addEventListener('resize', updateWidth))
onBeforeUnmount(() => window.removeEventListener('resize', updateWidth))

// Group images dynamically based on screen size
const groupedImages = computed(() => {
  const groups = []
  const groupSize = isSmallScreen.value ? 1 : 2
  for (let i = 0; i < images.length; i += groupSize) {
    groups.push(images.slice(i, i + groupSize))
  }
  return groups
})
</script>
