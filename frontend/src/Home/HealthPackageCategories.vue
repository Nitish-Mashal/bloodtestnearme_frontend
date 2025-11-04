<template>
    <div class="mt-4">
        <div class="px-5 sm:px-16 mx-auto">
            <div class="bg-gray-100 px-4 sm:px-5 py-3 sm:py-5 rounded-xl shadow-sm">
                <!-- Header -->
                <div
                    class="flex flex-col sm:flex-row items-center justify-between w-full px-2 sm:px-4 pt-3 sm:pt-5 gap-2 sm:gap-0">
                    <h2 class="text-lg sm:text-xl md:text-4xl font-bold bold-test-color text-center flex-1">
                        Health Package Categories
                    </h2>

                    <div class="text-sm font-medium sm:mt-0 whitespace-nowrap">
                        <router-link to="/health-checkup-packages-bangalore"
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

                <!-- Categories Section -->
                <div v-if="isLoading" class="text-center py-10 text-gray-600">
                    Loading categories...
                </div>

                <div v-else-if="categories.length" class="text-center my-8">
                    <div class="flex flex-wrap justify-center gap-3">
                        <div v-for="(category, index) in categories" :key="index"
                            class="flex flex-col items-center text-center max-w-[150px] cursor-pointer transition-transform hover:scale-105"
                            @click="goToCategory(category.url, category.name)">
                            <img :src="category.image" :alt="category.name"
                                class="object-cover shadow-md rounded-lg w-full h-auto" />
                            <p class="mt-3 bold-test-color text-2xl">
                                {{ category.name }}
                            </p>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center text-gray-500 py-10">
                    No categories available.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const categories = ref([]);
const isLoading = ref(true);
const router = useRouter();

const fetchCategories = async () => {
    try {
        const response = await axios.get(
            "/api/method/bloodtestnearme.api.package_category.get_active_package_categories"
        );

        if (response.data?.message?.data) {
            // Frappe returns data inside message.data by default
            categories.value = response.data.message.data;
        } else if (response.data?.data) {
            // If you returned {"status":"success", "data": [...]}
            categories.value = response.data.data;
        }
    } catch (error) {
        console.error("Error fetching package categories:", error);
    } finally {
        isLoading.value = false;
    }
};

// inside your <script setup>
const goToCategory = (url, name) => {
    if (name) {
        router.push({
            path: "/health-checkup-packages-bangalore", // 👈 your actual route path
            query: { category: name.toLowerCase().replace(/\s+/g, "-") },
        });
    }
};

onMounted(fetchCategories);
</script>
