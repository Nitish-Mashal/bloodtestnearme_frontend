<template>
    <div class="container px-2 sm:px-16 mx-auto mt-6">
        <!-- Header -->
        <h2 class="text-center text-2xl sm:text-3xl md:text-4xl font-bold bold-test-color mb-4">
            Full Body Health Checkup at home
        </h2>

        <!-- Loading Screen -->
        <div v-if="isLoading" class="flex justify-center items-center h-60">
            <div class="flex flex-col items-center">
                <svg class="animate-spin h-8 w-8 text-[#001D55]" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <p class="text-[#001D55] mt-3 font-semibold">Loading packages...</p>
            </div>
        </div>

        <!-- Main Content -->
        <div v-else>
            <!-- Search Bar -->
            <div class="flex justify-center mb-8">
                <div class="relative w-full max-w-2xl shadow-md shadow-gray-300 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 
                            5.196a7.5 7.5 0 0 0 10.607 
                            10.607Z" />
                    </svg>
                    <input v-model="searchQuery" type="text" placeholder="Search Your Tests.."
                        class="w-full border border-gray-300 rounded-full py-2.5 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#001D55]" />
                </div>
            </div>

            <!-- Cards -->
            <div class="p-2 sm:p-3 rounded-xl">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    <div v-for="(pkg, index) in filteredPackages" :key="index"
                        class="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">

                        <!-- Image clickable -->
                        <router-link :to="`/HealthCheckupDetails/${encodeURIComponent(pkg.name1)}`"
                            class="no-underline text-inherit">
                            <img :src="pkg.image" alt="Health Package"
                                class="w-full h-40 object-cover rounded-xl px-2 mt-2" />
                        </router-link>

                        <div class="p-3 pt-2">
                            <div class="flex justify-between items-center mb-1">
                                <h6 class="text-sm font-semibold bold-test-color leading-tight truncate">
                                    {{ pkg.name1 }} ({{ pkg.number_of_test }} Tests)
                                </h6>

                                <!-- 🛒 Cart Icon -->
                                <button :disabled="isInCart(pkg)" @click="addToCart(pkg)"
                                    :title="isInCart(pkg) ? 'Item already in cart' : 'Add to cart'"
                                    class="relative group p-2 rounded-full transition" :class="[
                                        isInCart(pkg)
                                            ? 'bg-gray-200 cursor-not-allowed'
                                            : 'hover:bg-gray-100 text-indigo-900',
                                    ]">
                                    <!-- 🛒 Normal cart icon (when not in cart) -->
                                    <svg v-if="!isInCart(pkg)" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 
            1.087.835l.383 1.437M7.5 14.25a3 3 0 0 
            0-3 3h15.75m-12.75-3h11.218
            c1.121-2.3 2.1-4.684 
            2.924-7.138a60.114 
            60.114 0 0 0-16.536-1.84M7.5 
            14.25 5.106 5.272M6 20.25a.75.75 
            0 1 1-1.5 0 .75.75 0 0 1 
            1.5 0Zm12.75 0a.75.75 0 1 
            1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>

                                    <!-- 🛒 Disabled cart icon (grayed) -->
                                    <svg v-if="isInCart(pkg)" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
                                        class="w-5 h-5 text-gray-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 
            1.087.835l.383 1.437M7.5 14.25a3 3 0 0 
            0-3 3h15.75m-12.75-3h11.218
            c1.121-2.3 2.1-4.684 
            2.924-7.138a60.114 
            60.114 0 0 0-16.536-1.84M7.5 
            14.25 5.106 5.272M6 20.25a.75.75 
            0 1 1-1.5 0 .75.75 0 0 1 
            1.5 0Zm12.75 0a.75.75 0 1 
            1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>

                                    <!-- ❌ Red cross shown only on hover -->
                                    <span v-if="isInCart(pkg)"
                                        class="absolute inset-0 flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg font-bold">
                                        ×
                                    </span>
                                </button>

                            </div>

                            <div class="flex items-center gap-2 flex-wrap mb-1">
                                <p class="text-gray-400 line-through">₹ {{ pkg.actual_price }}</p>
                                <p class="bold-test-color">₹ {{ pkg.discounted_price }}</p>
                            </div>

                            <div
                                class="flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-2 sm:gap-0">
                                <router-link
                                    :to="{ name: 'SinglePackageBook', params: { slug: pkg.name1.replace(/\s+/g, '-') } }"
                                    class="w-full sm:w-auto no-underline">
                                    <button
                                        class="bg-[#2077BF] text-white text-sm px-3 py-1.5 rounded-full hover:bg-blue-700 transition w-full sm:w-auto">
                                        Book Now
                                    </button>
                                </router-link>

                                <router-link :to="`/${pkg.url}`" class="no-underline">
                                    <button
                                        class="border border-[#001D55] font-semibold text-sm bold-test-color px-3 py-1.5 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-1 whitespace-nowrap sm:w-auto w-full">
                                        <span>View Details</span>
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
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/cartStore";

const searchQuery = ref("");
const packages = ref([]);
const isLoading = ref(true);
const route = useRoute();
const cartStore = useCartStore();

const addToCart = (pkg) => {
    cartStore.addToCart(pkg);
};

const isInCart = (pkg) => {
    return cartStore.cartItems.some((item) => item.name1 === pkg.name1);
};

// ✅ Fetch packages dynamically based on category
const fetchPackages = async () => {
    try {
        isLoading.value = true; // Start loader before API call

        const category = route.query.category || "";
        let apiUrl = "/api/method/bloodtestnearme.api.packages.get_package_based_tests";

        // If category param exists → use category API
        if (category) {
            apiUrl = `/api/method/bloodtestnearme.api.packages.get_packages?category=${category}`;
        }

        const response = await axios.get(apiUrl);

        if (response.data?.message?.data) {
            packages.value = response.data.message.data;
        } else if (response.data?.data) {
            packages.value = response.data.data;
        } else {
            packages.value = [];
        }
    } catch (error) {
        console.error("Error fetching packages:", error);
        packages.value = [];
    } finally {
        // Loader stops only when API response (success or error) completes
        isLoading.value = false;
    }
};

// ✅ Watch for category changes
watch(
    () => route.query.category,
    () => {
        fetchPackages();
    }
);

// ✅ Filter search
const filteredPackages = computed(() => {
    if (!searchQuery.value.trim()) return packages.value;
    return packages.value.filter((pkg) =>
        pkg.name1?.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

onMounted(fetchPackages);
</script>
