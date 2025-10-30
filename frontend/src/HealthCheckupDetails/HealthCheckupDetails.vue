<template>
    <div>
        <div class="container">
            <div class="px-5 py-4 row" v-if="packageData">
                <!-- Accordion Section -->
                <div class="col-12 col-md-8 col-sm-12 mb-2">
                    <h5 class="font-bold bold-test-color pb-2">List Of Tests Included:</h5>

                    <div class="accordion" id="accordionExample">
                        <div v-for="(item, index) in listInclude" :key="index"
                            class="accordion-item border border-gray-200 rounded-lg mb-2 overflow-hidden">
                            <h2 class="accordion-header" :id="`heading${index}`">
                                <button class="accordion-button font-semibold bold-test-color text-sm" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`"
                                    :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="`collapse${index}`"
                                    :class="{ collapsed: index !== 0 }">
                                    {{ item.heading }}
                                </button>
                            </h2>

                            <div :id="`collapse${index}`" class="accordion-collapse collapse"
                                :class="{ show: index === 0 }" :aria-labelledby="`heading${index}`"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-sm bold-test-color">
                                    <ul v-if="item.values && item.values.length" class="list-disc pl-5">
                                        <li v-for="(test, i) in item.values" :key="i">{{ test }}</li>
                                    </ul>
                                    <p v-else class="text-gray-500 italic">
                                        No tests available for this section.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Price Card -->
                <div class="col-12 col-md-4">
                    <div class="card p-3">
                        <div class="card-title bold-test-color font-semibold text-2xl pb-3">
                            {{ packageData.name1 }} ({{ packageData.number_of_test }} Tests)
                        </div>

                        <div class="flex justify-between font-semibold pb-2 text-lg">
                            <div>Package Price:</div>
                            <div class="text-red-600 line-through">
                                ₹ {{ packageData.actual_price }}
                            </div>
                        </div>

                        <div class="flex justify-between font-semibold pb-2 text-lg">
                            <div>Offer Price:</div>
                            <div>₹ {{ packageData.discounted_price }}</div>
                        </div>

                        <div class="flex justify-between font-bold pb-4 text-xl">
                            <div>Amount to be paid:</div>
                            <div class="text-green-600">₹ {{ packageData.discounted_price }}</div>
                        </div>

                        <div class="flex flex-col sm:flex-row justify-center mb-4 gap-4">
                            <button class="global-bg-color text-white text-sm px-3 py-2 rounded-full hover:bg-blue-700">
                                Book Now
                            </button>

                            <button
                                class="border border-[#001D55] text-sm bold-test-color px-3 py-2 rounded-full hover:bg-gray-100 flex items-center justify-center gap-1">
                                <span>Add to Cart</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 
                    1.087.835l.383 1.437M7.5 
                    14.25a3 3 0 0 0-3 
                    3h15.75m-12.75-3h11.218
                    c1.121-2.3 2.1-4.684 
                    2.924-7.138a60.114 
                    60.114 0 0 0-16.536-1.84M7.5 
                    14.25 5.106 5.272M6 20.25a.75.75 
                    0 1 1-1.5 0 .75.75 0 0 1 
                    1.5 0Zm12.75 0a.75.75 0 1 
                    1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <HealthCheckupDescription :packageData="packageData" />
            </div>
        </div>

        <MostBookedHealthCheckups />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import HealthCheckupDescription from "../HealthCheckupDetails/HealthCheckupDescription.vue";
import MostBookedHealthCheckups from "../Home/MostBookedHealthCheckups.vue";

const route = useRoute();
const listInclude = ref([]);
const packageData = ref(null);

const fetchPackageData = async () => {
    const pkgName = decodeURIComponent(route.params.name1);

    try {
        const [packageBasedResp, individualResp] = await Promise.all([
            axios.get("/api/method/bloodtestnearme.api.packages.get_package_based_tests"),
            axios.get("/api/method/bloodtestnearme.api.packages.get_individual_packages"),
        ]);

        const packageBasedList = packageBasedResp.data?.message?.data || [];
        const individualList = individualResp.data?.message?.data || individualResp.data?.message || [];

        const basePkg = packageBasedList.find((p) => p.name1 === pkgName);
        const individualPkg = individualList.find((p) => p.name1 === pkgName);

        if (!basePkg && !individualPkg) {
            console.warn("Package not found:", pkgName);
            return;
        }

        packageData.value = { ...basePkg, ...individualPkg };

        const listStr = packageData.value.list_include;
        if (listStr) {
            try {
                listInclude.value = JSON.parse(listStr);
            } catch {
                listInclude.value = [];
            }
        }
    } catch (error) {
        console.error("Error fetching package data:", error);
    }
};

onMounted(fetchPackageData);
</script>
