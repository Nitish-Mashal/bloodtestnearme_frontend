<template>
    <div v-if="isLoading" class="flex justify-center items-center h-60">
        <div class="flex flex-col items-center">
            <svg class="animate-spin h-8 w-8 text-[#001D55]" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            <p class="text-[#001D55] mt-3 font-semibold">Loading package details...</p>
        </div>
    </div>

    <div v-else>
        <div class="container">
            <div class="px-5 py-4 row">
                <div class="col-12 col-md-6 mb-2">
                    <h3 class="bold-test-color pb-2">{{ packageData.name1 }} ({{ packageData.number_of_test }} Tests)
                    </h3>

                    <div class="bold-test-color">
                        <div class="pt-2" v-html="packageData.description"></div>
                        <div class="pt-4">
                            <strong>Sample Type:</strong>
                            <span class="text-red-600">{{ packageData.sample_type }}</span>
                        </div>
                    </div>
                </div>

                <!-- Form -->
                <div class="col-12 col-md-6">
                    <div class="p-3 border-0 shadow-sm rounded-xl bg-gray-50">
                        <form class="space-y-4 bold-test-color">
                            <!-- Row 1 -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input type="text" placeholder="Pincode *"
                                    class="border rounded-md px-3 py-[1px] text-sm w-full" />
                                <button type="button"
                                    class="bg-gray-200 text-gray-700 text-sm px-3 py-[1px] rounded-md hover:bg-gray-300 transition">
                                    Check Availability
                                </button>
                            </div>

                            <!-- Row 2 -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <select class="border rounded-md px-3 py-[1px] text-sm w-full">
                                    <option>Select Number of Person *</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                                <input type="text" placeholder="Beneficiary Name *"
                                    class="border rounded-md px-3 py-[1px] text-sm w-full" />
                            </div>

                            <!-- Row 3 -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input type="number" placeholder="Age *"
                                    class="border rounded-md px-3 py-[1px] text-sm w-full" />
                                <select class="border rounded-md px-3 py-[1px] text-sm w-full">
                                    <option>Select Gender *</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>

                            <!-- Row 4 -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input type="email" placeholder="Email *"
                                    class="border rounded-md px-3 py-[1px] text-sm w-full" />
                                <input type="tel" placeholder="Mobile (Indian Number Only) *"
                                    class="border rounded-md px-3 py-[1px] text-sm w-full" />
                            </div>

                            <!-- Address -->
                            <textarea placeholder="Complete Address *" rows="2"
                                class="border rounded-md px-3 py-[1px] text-sm w-full"></textarea>

                            <!-- Collection Type -->
                            <div class="flex items-center justify-center gap-2">
                                <span class="font-semibold text-sm">Collection Type:</span>
                                <label class="flex items-center gap-2 text-sm cursor-pointer">
                                    <input type="checkbox" name="collection"
                                        class="w-4 h-4 appearance-none border border-gray-400 rounded-full checked:bg-[#001D55] checked:border-[#001D55] transition duration-200" />
                                    Home Collection
                                </label>
                            </div>


                            <!-- Date and Time -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input type="date" class="border rounded-md px-3 py-[1px] text-sm w-full" />
                                <select class="border rounded-md px-3 py-[1px] text-sm w-full">
                                    <option>Select Preferred Time Slot *</option>
                                </select>
                            </div>

                            <!-- Printed Reports -->
                            <div class="flex items-center text-sm text-gray-700">
                                <input type="checkbox" class="mr-2" />
                                <span class="text-red-500">Additional Rs. 75 for Printed Reports</span>
                            </div>

                            <div>
                                <p><strong>Test/Package Price:</strong> ₹{{ packageData.discounted_price }}</p>
                                <p><strong>Home Collection Charge:</strong> ₹200</p>
                                <p><strong>Total Amount:</strong> ₹{{ totalAmount }}</p>
                            </div>

                            <div class="flex justify-center">
                                <button type="submit"
                                    class="global-bg-color text-white px-20 py-2 rounded-full hover:bg-blue-700 transition w-full sm:w-auto">
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <MostBookedHealthCheckups />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import MostBookedHealthCheckups from "../Home/MostBookedHealthCheckups.vue";

const route = useRoute();
const packageName = route.params.name1; // ✅ correct param name
const packageData = ref({});
const isLoading = ref(true);
const totalAmount = ref(0);

const fetchPackageDetails = async () => {
    try {
        const endpoints = [
            "/api/method/bloodtestnearme.api.packages.get_package_based_tests",
            "/api/method/bloodtestnearme.api.packages.get_individual_packages",
        ];

        let result = null;

        for (const endpoint of endpoints) {
            const response = await axios.get(endpoint); // ✅ removed params
            const data = response.data?.message?.data || [];
            const found = data.find(
                (pkg) => pkg.name1?.toLowerCase() === packageName.toLowerCase()
            );
            if (found) {
                result = found;
                break;
            }
        }

        if (result) {
            packageData.value = result;
            totalAmount.value = parseFloat(result.discounted_price || 0) + 200; // ✅ Add home collection charge
        } else {
            console.warn("Package not found:", packageName);
        }
    } catch (error) {
        console.error("Error fetching package details:", error);
    } finally {
        isLoading.value = false;
    }
};

onMounted(fetchPackageDetails);
</script>
