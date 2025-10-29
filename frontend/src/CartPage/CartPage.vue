<template>
    <div>
        <div class="container">
            <div class="px-5 py-4 row">
                <!-- Left Section -->
                <div class="col-12 col-md-6 mb-2">
                    <!-- Header -->
                    <div class="flex justify-between items-center mb-4">
                        <h5 class="text-[#001D55] font-semibold">Cart Items</h5>

                        <router-link to="/BloodTestList"
                            class="flex items-center text-red-700 font-medium no-underline hover:underline-offset-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add more tests
                        </router-link>
                    </div>

                    <hr class="border-gray-300 mb-3" />

                    <!-- Cart Items -->
                    <div v-if="cartStore.cartItems.length">
                        <div v-for="(item, index) in cartStore.cartItems" :key="index"
                            class="flex justify-between items-center mb-3 rounded-lg">
                            <div>
                                <h6 class="font-semibold text-[#001D55]">{{ item.name1 }}</h6>
                                <div class="text-gray-500">
                                    <span class="line-through">₹ {{ item.actual_price }}</span>
                                    <span class="font-semibold text-[#001D55] ml-1">₹ {{ item.discounted_price }}</span>
                                </div>
                            </div>

                            <button @click="cartStore.removeFromCart(item.name1)"
                                class="bg-[#0040BB] text-white px-4 py-2 rounded-full hover:bg-[#002F8E] transition">
                                Remove
                            </button>
                        </div>
                    </div>
                    <p v-else class="text-gray-500">No items in the cart.</p>
                </div>

                <!-- Right Section (Form + Summary) -->
                <div class="col-12 col-md-6">
                    <div class="p-4 border-0 shadow-sm rounded-xl bg-gray-50">
                        <form class="space-y-4 bold-test-color" @submit.prevent="handleBookNow">
                            <!-- Pincode Input -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input type="text" placeholder="Pincode *"
                                    class="border rounded-md px-3 py-[1px] text-sm w-full focus:ring-[#001D55] focus:outline-none" />
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

                            <!-- Price Summary -->
                            <div>
                                <p><strong>Test/Package Price: </strong>
                                    ₹{{ cartStore.totalPackagePrice }}/-
                                </p>
                                <p>
                                    <strong>
                                        Home Collection Charge:
                                    </strong>
                                    ₹{{ cartStore.homeCollectionCharge }}/-
                                </p>
                                <p>
                                    <strong>
                                        Total Amount:
                                    </strong>
                                    ₹{{ cartStore.totalAmount }}/-
                                </p>
                            </div>

                            <!-- Book Now Button -->
                            <div class="flex justify-center">
                                <button type="submit" :disabled="cartStore.cartItems.length === 0" :class="[
                                    'px-20 py-2 rounded-full transition w-full sm:w-auto',
                                    cartStore.cartItems.length === 0
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'global-bg-color text-white'
                                ]">
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Section -->
        <MostBookedHealthCheckups />
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useCartStore } from "@/stores/cartStore";
import MostBookedHealthCheckups from "../Home/MostBookedHealthCheckups.vue";

const cartStore = useCartStore();
const loading = ref(true);

const fetchData = async () => {
    try {
        await Promise.all([
            axios.get("/api/method/bloodtestnearme.api.packages.get_individual_packages"),
            axios.get("/api/method/bloodtestnearme.api.packages.get_package_based_tests"),
        ]);
    } catch (error) {
        console.error("Error fetching cart data:", error);
    } finally {
        loading.value = false;
    }
};

const handleBookNow = () => {
    if (!cartStore.cartItems.length) return;
    alert("Booking functionality can be implemented here 🚀");
};

onMounted(fetchData);
</script>
