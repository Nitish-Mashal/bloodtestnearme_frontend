<template>
    <div class="mt-4">
        <div class="container px-2 sm:px-8 mt-6">
            <div class="bg-gray-100 px-5 py-4 rounded-xl">
                <!-- Header -->
                <div
                    class="flex flex-col sm:flex-row items-center justify-between w-full px-2 sm:px-6 pt-2 sm:pt-6 gap-2 sm:gap-0">
                    <h2 class="text-lg sm:text-xl md:text-4xl font-bold bold-test-color text-center flex-1">
                        Most Booked Blood Tests
                    </h2>

                    <div class="text-sm font-medium sm:mt-0 whitespace-nowrap">
                        <router-link to="/BloodTestList"
                            class="flex items-center gap-1 no-underline bold-test-color hover:underline">
                            <span>View All</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-3 h-3 mt-[1px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </router-link>
                    </div>
                </div>

                <!-- ✅ Carousel Section -->
                <div class="sm:p-3 rounded-xl w-full">
                    <el-carousel :interval="4000" arrow="hover" trigger="click" indicator-position="none"
                        class="sm:h-[200px] h-[250px]">

                        <!-- Group cards in chunks (e.g. 4 per slide) -->
                        <el-carousel-item v-for="(group, index) in cardChunks" :key="index">
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                <div v-for="pkg in group" :key="pkg.id"
                                    class="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow relative bg-white">
                                    <!-- Blue Gradient Top -->
                                    <div class="px-3 py-3 text-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
                                        :style="{
                                            background: 'linear-gradient(180deg, #2077BF 0%, #0040BB 100%)',
                                            height: '80px',
                                        }">
                                        <h3 class="font-semibold text-[95%] leading-tight line-clamp-2">
                                            {{ pkg.name }}
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
                                                <p class="font-semibold bold-test-color">
                                                    ₹ {{ pkg.discounted_price }}
                                                </p>
                                            </div>

                                            <!-- 🛒 Cart Icon -->
                                            <!-- 🛒 Cart Icon -->
                                            <button :disabled="isInCart(pkg.name)" @click="addToCart(pkg)"
                                                :title="isInCart(pkg.name) ? 'Item already in cart' : 'Add to cart'"
                                                class="relative group p-1 rounded-full transition" :class="[
                                                    isInCart(pkg.name)
                                                        ? 'bg-gray-200 cursor-not-allowed'
                                                        : 'hover:bg-gray-100 text-indigo-900',
                                                ]">
                                                <!-- Base cart icon (gray when disabled) -->
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" :class="[
                                                        'w-5 h-5 transition-colors duration-200',
                                                        isInCart(pkg.name) ? 'text-gray-400' : 'text-indigo-900',
                                                    ]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 
            .955.343 1.087.835l.383 1.437M7.5 
            14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218
            c1.121-2.3 2.1-4.684 
            2.924-7.138a60.114 
            60.114 0 0 0-16.536-1.84M7.5 
            14.25 5.106 5.272M6 20.25a.75.75 
            0 1 1-1.5 0 .75.75 0 0 1 
            1.5 0Zm12.75 0a.75.75 0 1 
            1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>

                                                <!-- ❌ Red X appears on hover -->
                                                <span v-if="isInCart(pkg.name)"
                                                    class="absolute inset-0 flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg font-bold">
                                                    ×
                                                </span>
                                            </button>

                                        </div>

                                        <!-- Buttons -->
                                        <div
                                            class="flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-2 sm:gap-0 mt-2">
                                            <router-link :to="`/SinglePackageBook/${encodeURIComponent(pkg.name)}`"
                                                class="w-full sm:w-auto no-underline">
                                                <button
                                                    class="bg-[#2077BF] text-white text-sm px-3 py-1.5 rounded-full hover:bg-blue-700 transition w-full sm:w-auto">
                                                    Book Now
                                                </button>
                                            </router-link>

                                            <router-link
                                                :to="{ name: 'HealthCheckupDetails', params: { name1: pkg.name } }"
                                                class="no-underline">
                                                <button
                                                    class="border-1 border-[#001D55] font-semibold text-xs bold-test-color px-2 py-1 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-1 w-full sm:w-auto">
                                                    View Details
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                        class="w-3 h-3 mt-[1px]">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 
                              0H8.25m11.25 0v11.25" />
                                                    </svg>
                                                </button>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import axios from "axios";
import { useCartStore } from "@/stores/cartStore"; // ✅ Import cart store

const cartStore = useCartStore();
const packages = ref([]);
const screenWidth = ref(window.innerWidth);

// ✅ Add to cart
const addToCart = (pkg) => {
    if (!isInCart(pkg.name)) {
        const cartItem = {
            name1: pkg.name,
            actual_price: pkg.actual_price,
            discounted_price: pkg.discounted_price,
        };
        cartStore.addToCart(cartItem);
    }
};


// ✅ Check if item already in cart
const isInCart = (pkgName) => {
    return cartStore.cartItems.some((item) => item.name1 === pkgName);
};

// ✅ Fetch Most Booked Blood Tests
const fetchMostBookedTests = async () => {
    try {
        const response = await axios.get(
            "/api/method/bloodtestnearme.api.packages.get_most_booking_tests"
        );

        const data = response.data.message || response.data.data || response.data || [];
        packages.value = data.map((pkg) => ({
            id: pkg.id,
            name: pkg.name,
            package_name: pkg.package_name,
            actual_price: pkg.actual_price,
            discounted_price: pkg.discounted_price,
            image: pkg.image,
            url: pkg.url,
        }));
    } catch (error) {
        console.error("❌ Error fetching most booked tests:", error);
    }
};

// ✅ Responsive chunks
const updateWidth = () => (screenWidth.value = window.innerWidth);
const cardChunks = computed(() => {
    const size = screenWidth.value < 640 ? 1 : screenWidth.value < 1024 ? 2 : 4;
    const chunks = [];
    for (let i = 0; i < packages.value.length; i += size) {
        chunks.push(packages.value.slice(i, i + size));
    }
    return chunks;
});

onMounted(() => {
    fetchMostBookedTests();
    window.addEventListener("resize", updateWidth);
});
onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
});
</script>
