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

                <div class="text-center my-8">
                    <div class="flex flex-wrap justify-center gap-3">
                        <!-- Step 1 -->
                        <div class="flex flex-col items-center text-center max-w-[150px]">
                            <img src="/Men.png" alt="Book Your Lab Tests Online" class=" object-cover shadow-md" />
                            <p class="mt-3  bold-test-color text-2xl">
                                Men
                            </p>
                        </div>

                        <!-- Step 2 -->
                        <div class="flex flex-col items-center text-center max-w-[150px]">
                            <img src="/Women.png" alt="Get Home Sample Collection" class=" object-cover shadow-md" />
                            <p class="mt-3 bold-test-color text-2xl ">
                                Women
                            </p>
                        </div>

                        <!-- Step 3 -->
                        <div class="flex flex-col items-center text-center max-w-[150px]">
                            <img src="/LiverandKidney.png" alt="Samples Process in Lab"
                                class=" object-cover shadow-md" />
                            <p class="mt-3  bold-test-color text-2xl ">
                                Liver & Kidney
                            </p>
                        </div>

                        <!-- Step 4 -->
                        <div class="flex flex-col items-center text-center max-w-[150px]">
                            <img src="/Thyroid.png" alt="Get your Reports Online" class=" object-cover shadow-md" />
                            <p class="mt-3  bold-test-color text-2xl ">
                                Thyroid
                            </p>
                        </div>

                        <!-- Step 5 -->
                        <div class="flex flex-col items-center text-center max-w-[150px]">
                            <img src="/Allergy.png" alt="Get your Reports Online" class=" object-cover shadow-md" />
                            <p class="mt-3  bold-test-color text-2xl ">
                                Allergy
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";

const packages = [
    { title: "Basic Health Checkup (94 Tests)", originalPrice: 1949, discountedPrice: 1299 },
    { title: "Advanced Health Checkup (94 Tests)", originalPrice: 2999, discountedPrice: 1899 },
    { title: "Comprehensive Health Checkup (94 Tests)", originalPrice: 3999, discountedPrice: 2499 },
    { title: "Senior Citizen Checkup (94 Tests)", originalPrice: 1899, discountedPrice: 1199 },
    { title: "Master Health Checkup (94 Tests)", originalPrice: 4999, discountedPrice: 2999 },
    { title: "Premium Health Checkup (94 Tests)", originalPrice: 5999, discountedPrice: 3999 },
];

// Split packages into chunks of 4 for carousel slides
const chunkedPackages = computed(() => {
    const chunks = [];
    for (let i = 0; i < packages.length; i += 4) {
        chunks.push(packages.slice(i, i + 4));
    }
    return chunks;
});
</script>
