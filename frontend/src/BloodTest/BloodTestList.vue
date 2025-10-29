<template>
    <div class="container px-2 sm:px-16 mx-auto mt-6">
        <!-- Header -->
        <h2 class="text-center text-2xl sm:text-3xl md:text-4xl font-bold bold-test-color mb-4">
            Book your blood test online
        </h2>

        <!-- Search Bar -->
        <div class="flex justify-center mb-8">
            <div class="relative w-full max-w-2xl shadow-md shadow-gray-300 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 
                        5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input v-model="searchQuery" type="text" placeholder="Search Your Tests.."
                    class="w-full border border-gray-300 rounded-full py-2.5 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#001D55]" />
            </div>
        </div>

        <!-- Cards -->
        <div class="p-2 sm:p-3 rounded-xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                <div v-for="(pkg, index) in filteredPackages" :key="index"
                    class="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <!-- Blue Gradient Top -->
                    <div class="px-3 py-3 text-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.25)]" :style="{
                        background: 'linear-gradient(180deg, #2077BF 0%, #0040BB 100%)',
                        height: '80px',
                    }">
                        <h3 class="font-semibold text-[95%] leading-tight line-clamp-2">
                            {{ pkg.name1 }}
                        </h3>
                    </div>

                    <!-- White Bottom -->
                    <div class="p-3 bg-white rounded-b-xl">
                        <!-- Price + Cart -->
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-2">
                                <p class="text-gray-400 line-through">
                                    ₹ {{ pkg.actual_price }}
                                </p>
                                <p class=" font-semibold bold-test-color">
                                    ₹ {{ pkg.discounted_price }}
                                </p>
                            </div>
                            <!-- Cart Icon -->
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                    stroke="currentColor" class="w-5 h-5 text-indigo-900">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 
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
                            <router-link :to="`/SinglePackageBook/${encodeURIComponent(pkg.name1)}`"
                                class="w-full sm:w-auto no-underline">
                                <button
                                    class="bg-[#2077BF] text-white text-sm px-3 py-1.5 rounded-full hover:bg-blue-700 transition w-full sm:w-auto">
                                    Book Now
                                </button>
                            </router-link>

                            <router-link :to="`/HealthCheckupDetails/${encodeURIComponent(pkg.name1)}`"
                                class="no-underline">
                                <button
                                    class="border-1 border-[#001D55] font-semibold text-xs bold-test-color px-3 py-1.5 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-1 w-full sm:w-auto">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="w-3 h-3 mt-[1px]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
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
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const searchQuery = ref("");
const packages = ref([]);
const loading = ref(true);

// ✅ Fetch data from your backend API
const fetchPackages = async () => {
    try {
        const response = await axios.get(
            "/api/method/bloodtestnearme.api.packages.get_individual_packages"
        );

        console.log("API Response:", response.data); // 👈 check structure in browser console

        // Handle possible structures from Frappe
        if (response.data.message) {
            if (Array.isArray(response.data.message)) {
                packages.value = response.data.message;
            } else if (Array.isArray(response.data.message.data)) {
                packages.value = response.data.message.data;
            } else {
                packages.value = [response.data.message];
            }
        } else {
            packages.value = [];
        }
    } catch (error) {
        console.error("Error fetching packages:", error);
    } finally {
        loading.value = false;
    }
};

// Fetch on mount
onMounted(fetchPackages);

// ✅ Filter by search text
const filteredPackages = computed(() => {
    if (!searchQuery.value.trim()) return packages.value;
    return packages.value.filter((pkg) =>
        pkg.name1?.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
</script>
