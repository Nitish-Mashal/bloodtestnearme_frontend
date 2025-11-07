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

                <!-- Loading State -->
                <div v-if="isLoading" class="text-center py-10 text-gray-600">
                    Loading categories...
                </div>

                <!-- Carousel Section -->
                <div v-else-if="categories.length" class="my-3">
                    <el-carousel :interval="3000" :autoplay="true" arrow="always" height="200px"
                        indicator-position="none" trigger="click" :pause-on-hover="true">
                        <el-carousel-item v-for="(group, groupIndex) in groupedCategories" :key="groupIndex">
                            <div class="flex justify-center gap-4">
                                <div v-for="(category, index) in group" :key="index"
                                    class="flex flex-col items-center justify-center text-center cursor-pointer transition-transform hover:scale-105"
                                    :class="{
                                        'w-[120px]': !isMobile,
                                        'w-[200px]': isMobile,
                                    }" @click="goToCategory(category.url, category.name)">
                                    <img :src="getImage(category.image)" :alt="category.name"
                                        class="object-cover shadow-md rounded-lg w-full h-[120px]" />
                                    <p class="mt-3 bold-test-color text-base sm:text-lg font-semibold">
                                        {{ category.name }}
                                    </p>
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <!-- No Data -->
                <div v-else class="text-center text-gray-500 py-10">
                    No categories available.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import "element-plus/es/components/carousel/style/css";
import "element-plus/es/components/carousel-item/style/css";

const categories = ref([]);
const isLoading = ref(true);
const isMobile = ref(window.innerWidth < 640);
const router = useRouter();

const handleResize = () => {
    isMobile.value = window.innerWidth < 640; // sm breakpoint
};

window.addEventListener("resize", handleResize);

onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});

const fetchCategories = async () => {
    try {
        const cached = sessionStorage.getItem("packageCategories");
        if (cached) {
            categories.value = JSON.parse(cached);
            isLoading.value = false;
            return;
        }

        const response = await axios.get(
            "/api/method/bloodtestnearme.api.package_category.get_active_package_categories"
        );
        const data = response.data?.message?.data || response.data?.data || [];
        categories.value = data;
        sessionStorage.setItem("packageCategories", JSON.stringify(data));
    } catch (error) {
        console.error("Error fetching package categories:", error);
    } finally {
        isLoading.value = false;
    }
};

// ✅ Dynamically group cards based on screen size
const groupedCategories = computed(() => {
    const groups = [];
    const items = categories.value;
    const visibleCount = isMobile.value ? 1 : 5;

    // ✅ Slide forward one card at a time
    if (items.length > 0) {
        for (let i = 0; i <= items.length - visibleCount; i++) {
            groups.push(items.slice(i, i + visibleCount));
        }

        // ✅ Optional: Loop seamlessly by adding wrap-around slides
        for (let j = 0; j < visibleCount - 1; j++) {
            const wrapGroup = [
                ...items.slice(j * 1),
                ...items.slice(0, (visibleCount - 1) - j),
            ].slice(0, visibleCount);
            groups.push(wrapGroup);
        }
    }

    return groups;
});


const getImage = (imagePath) => {
    if (!imagePath) return "/default-image.png";
    return imagePath.startsWith("/files") ? imagePath : `/files/${imagePath}`;
};

const goToCategory = (url, name) => {
    if (name) {
        const slug = name.toLowerCase().replace(/\s+/g, "-");
        router.push({
            path: "/health-checkup-packages-bangalore",
            query: { category: slug },
        });
    }
};

onMounted(() => {
    fetchCategories();
});
</script>

<style scoped>
.bold-test-color {
    color: #001d55;
}

.el-carousel__container {
    overflow: hidden;
}
</style>
