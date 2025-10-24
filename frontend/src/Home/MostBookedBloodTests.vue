<template>
    <div class="mt-4">
        <div class="px-5 sm:px-16 mx-auto">
            <div class="bg-gray-100 px-5 rounded-xl shadow-sm">
                <!-- Header -->
                <div
                    class="flex flex-col sm:flex-row items-center justify-between w-full px-2 sm:px-6 pt-4 sm:pt-6 gap-2 sm:gap-0">
                    <h2 class="text-lg sm:text-xl md:text-4xl font-bold bold-test-color text-center flex-1">
                        Most Booked Blood Tests
                    </h2>

                    <a href="#"
                        class="text-sm bold-test-color font-medium flex items-center gap-1 hover:underline mt-2 sm:mt-0 whitespace-nowrap">
                        <span>View All</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-3 h-3 mt-[1px]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                </div>

                <!-- Carousel -->
                <el-carousel :interval="4000" arrow="never" :autoplay="true" indicator-position="none" trigger="click"
                    class="!h-auto no-bottom-space">
                    <el-carousel-item v-for="(chunk, index) in responsiveChunks" :key="index"
                        class="!h-auto flex justify-center items-start pb-0">
                        <div class="p-2 sm:p-3 rounded-xl w-full">
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                <div v-for="(pkg, i) in chunk" :key="i"
                                    class="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow relative bg-white">
                                    <!-- Blue Gradient Top -->
                                    <div class="px-3 py-3 text-white shadow-md rounded-t-xl" :style="{
                                        background:
                                            'linear-gradient(180deg, #2077BF 0%, #0040BB 100%)',
                                        height: '80px',
                                    }">
                                        <h3 class="font-semibold text-[95%] leading-tight line-clamp-2">
                                            {{ pkg.title }}
                                        </h3>
                                    </div>

                                    <!-- White Bottom -->
                                    <div class="p-3 bg-white rounded-b-xl">
                                        <!-- Price + Cart -->
                                        <div class="flex justify-between items-center mb-3">
                                            <div class="flex items-center gap-2">
                                                <p class="text-sm text-gray-400 line-through">
                                                    ₹ {{ pkg.originalPrice }}
                                                </p>
                                                <p class="text-sm font-semibold bold-test-color">
                                                    ₹ {{ pkg.discountedPrice }}
                                                </p>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1" stroke="currentColor"
                                                    class="w-5 h-5 text-indigo-900">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 
                            .955.343 1.087.835l.383 
                            1.437M7.5 14.25a3 3 0 0 
                            0-3 3h15.75m-12.75-3h11.218
                            c1.121-2.3 2.1-4.684 
                            2.924-7.138a60.114 
                            60.114 0 0 0-16.536-1.84M7.5 
                            14.25 5.106 5.272M6 20.25a.75.75 
                            0 1 1-1.5 0 .75.75 0 0 1 
                            1.5 0Zm12.75 0a.75.75 0 1 
                            1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <!-- Buttons -->
                                        <div
                                            class="flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-2 sm:gap-0">
                                            <button
                                                class="global-bg-color text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition w-full sm:w-auto">
                                                Book Now
                                            </button>
                                            <button
                                                class="border-1 border-[#001D55] font-semibold text-xs bold-test-color px-3 py-1 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-1 w-full sm:w-auto">
                                                View Details
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="2" stroke="currentColor" class="w-3 h-3 mt-[1px]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 
                            0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const packages = [
    { title: "Basic Health Checkup (94 Tests)", originalPrice: 1949, discountedPrice: 1299 },
    { title: "Advanced Health Checkup (94 Tests)", originalPrice: 2999, discountedPrice: 1899 },
    { title: "Comprehensive Health Checkup (94 Tests)", originalPrice: 3999, discountedPrice: 2499 },
    { title: "Senior Citizen Checkup (94 Tests)", originalPrice: 1899, discountedPrice: 1199 },
    { title: "Master Health Checkup (94 Tests)", originalPrice: 4999, discountedPrice: 2999 },
    { title: "Premium Health Checkup (94 Tests)", originalPrice: 5999, discountedPrice: 3999 },
];

// Track screen width
const screenWidth = ref(window.innerWidth);
const updateWidth = () => (screenWidth.value = window.innerWidth);

onMounted(() => window.addEventListener("resize", updateWidth));
onUnmounted(() => window.removeEventListener("resize", updateWidth));

// Dynamic chunks based on screen width
const responsiveChunks = computed(() => {
    let chunkSize;
    if (screenWidth.value < 640) {
        chunkSize = 1; // 1 card on mobile
    } else if (screenWidth.value < 1024) {
        chunkSize = 2; // 2 on tablets
    } else {
        chunkSize = 4; // 4 on desktops
    }

    const chunks = [];
    for (let i = 0; i < packages.length; i += chunkSize) {
        chunks.push(packages.slice(i, i + chunkSize));
    }
    return chunks;
});
</script>

<style scoped>
/* ✅ Remove extra bottom space from Element Plus carousel */
.el-carousel__container,
.el-carousel__item {
    height: auto !important;
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
}

.no-bottom-space {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
}

/* Optional: Remove overflow gap for smoother swipe transitions */
.el-carousel__container {
    overflow: hidden !important;
}
</style>
