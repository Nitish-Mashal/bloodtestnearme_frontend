<template>
    <div class="container px-2 sm:px-16 mx-auto mt-6">
        <!-- Header -->
        <h2 class="text-center text-2xl sm:text-3xl md:text-4xl font-bold bold-test-color mb-4">
            Full Body Health Checkup at home
        </h2>

        <!-- Search Bar -->
        <div class="flex justify-center mb-8">
            <div class="relative w-full max-w-2xl shadow-md shadow-gray-300 rounded-full">
                <!-- Search Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <!-- Input Field -->
                <input v-model="searchQuery" type="text" placeholder="Search Your Tests.."
                    class="w-full border border-gray-300 rounded-full py-2.5 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#001D55]" />
            </div>
        </div>

        <!-- Cards -->
        <div class="p-2 sm:p-3 rounded-xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                <div v-for="(pkg, index) in filteredPackages" :key="index"
                    class="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                    <img :src="pkg.image" alt="Health Package" class="w-full h-40 object-cover rounded-xl px-2 mt-2" />

                    <div class="p-3 pt-2">
                        <div class="flex justify-between items-center mb-1">
                            <h3 class="text-sm font-semibold text-gray-800 leading-tight truncate">
                                {{ pkg.title }}
                            </h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="w-5 h-5 text-indigo-900">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
                          14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218
                          c1.121-2.3 2.1-4.684 2.924-7.138a60.114 
                          60.114 0 0 0-16.536-1.84M7.5 
                          14.25 5.106 5.272M6 20.25a.75.75 
                          0 1 1-1.5 0 .75.75 0 0 1 
                          1.5 0Zm12.75 0a.75.75 0 1 
                          1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>

                        <div class="flex items-center gap-2 flex-wrap mb-1">
                            <p class="text-sm text-gray-400 line-through">
                                ₹ {{ pkg.originalPrice }}
                            </p>
                            <p class="text-base bold-test-color">
                                ₹ {{ pkg.discountedPrice }}
                            </p>
                        </div>

                        <div
                            class="flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-2 sm:gap-0">
                            <button
                                class="bg-[#2077BF] text-white text-sm px-3 py-1.5 rounded-full hover:bg-blue-700 transition w-full sm:w-auto">
                                Book Now
                            </button>
                            <router-link to="/HealthCheckupDetails" class="w-full sm:w-auto no-underline">
                                <button
                                    class="border-1 border-[#001D55] font-semibold text-sm bold-test-color px-3 py-1 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-1 w-full sm:w-auto">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="w-3 h-3 mt-[1px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 
          0v11.25" />
                                    </svg>
                                </button>
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");

const packages = ref([
    {
        image: "/healthpackageimg.png",
        title: "Basic Health Checkup",
        tests: 94,
        originalPrice: 1949,
        discountedPrice: 1299,
    },
    {
        image: "/healthpackageimg.png",
        title: "Advanced Health Checkup",
        tests: 94,
        originalPrice: 2999,
        discountedPrice: 1899,
    },
    {
        image: "/healthpackageimg.png",
        title: "Comprehensive Health Checkup",
        tests: 120,
        originalPrice: 3999,
        discountedPrice: 2499,
    },
    {
        image: "/healthpackageimg.png",
        title: "Master Health Checkup",
        tests: 150,
        originalPrice: 4999,
        discountedPrice: 2999,
    },
    {
        image: "/healthpackageimg.png",
        title: "Women's Wellness Checkup",
        tests: 110,
        originalPrice: 3499,
        discountedPrice: 2299,
    },
    {
        image: "/healthpackageimg.png",
        title: "Senior Citizen Full Body Checkup",
        tests: 130,
        originalPrice: 4599,
        discountedPrice: 2899,
    },
    {
        image: "/healthpackageimg.png",
        title: "Diabetes Screening Package",
        tests: 45,
        originalPrice: 1999,
        discountedPrice: 999,
    },
    {
        image: "/healthpackageimg.png",
        title: "Heart Health Checkup",
        tests: 70,
        originalPrice: 2999,
        discountedPrice: 1799,
    },
    {
        image: "/healthpackageimg.png",
        title: "Liver Function Test Package",
        tests: 25,
        originalPrice: 1299,
        discountedPrice: 799,
    },
    {
        image: "/healthpackageimg.png",
        title: "Kidney Function Test Package",
        tests: 22,
        originalPrice: 1399,
        discountedPrice: 899,
    },
    {
        image: "/healthpackageimg.png",
        title: "Thyroid Screening Package",
        tests: 18,
        originalPrice: 999,
        discountedPrice: 649,
    },
    {
        image: "/healthpackageimg.png",
        title: "Immunity Booster Package",
        tests: 80,
        originalPrice: 2499,
        discountedPrice: 1599,
    },
]);

// Filter by search text
const filteredPackages = computed(() => {
    if (!searchQuery.value.trim()) return packages.value;
    return packages.value.filter((pkg) =>
        pkg.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
</script>

<style scoped>
.bold-test-color {
    color: #001d55;
}

.global-bg-color {
    background-color: #001d55;
}
</style>
