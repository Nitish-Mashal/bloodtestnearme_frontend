<template>
    <div>
        <div>
            <div class="container">
                <div class="px-5 py-4 row">
                    <div class="col-12 col-md-6 col-sm-12 mb-2">

                        <!-- Header -->
                        <div class="flex justify-between items-center mb-4">
                            <h5 class="text-[#001D55] font-semibold">Cart Items</h5>
                            <button class="flex items-center text-red-700 font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                Add more tests
                            </button>
                        </div>

                        <!-- Divider -->
                        <hr class="border-gray-300 mb-3">

                        <!-- Cart Items -->
                        <div class="space-y-3">
                            <!-- Single Cart Item -->
                            <div class="flex justify-between items-center rounded-lg">
                                <div>
                                    <h6 class="font-semibold text-[#001D55]">Basic Health Checkup (94 Tests)</h6>
                                    <div class="text-gray-500">
                                        <span class="line-through">₹ 1949</span> <span
                                            class="font-semibold text-[#001D55]">₹ 1299</span>
                                    </div>
                                </div>
                                <button
                                    class="bg-[#0040BB] text-white px-4 py-2 rounded-full hover:bg-[#0040BB]">Remove</button>
                            </div>

                            <!-- Another Cart Item -->
                            <div class="flex justify-between items-center rounded-lg">
                                <div>
                                    <h6 class="font-semibold text-[#001D55]">Basic Health Checkup (94 Tests)</h6>
                                    <div class="text-gray-500">
                                        <span class="line-through">₹ 1949</span> <span
                                            class="font-semibold text-[#001D55]">₹ 1299</span>
                                    </div>
                                </div>
                                <button
                                    class="bg-[#0040BB] text-white px-4 py-2 rounded-full hover:bg-[#0040BB]">Remove</button>
                            </div>
                        </div>
                    </div>


                    <!-- Form Card -->
                    <div class="col-12 col-md-6">
                        <div class=" p-3 border-0 shadow-sm rounded-xl bg-gray-50">
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

                                <!-- Prices -->
                                <div class="">
                                    <p><strong>Test/Package Price: ₹99/-</strong></p>
                                    <p><strong>Home Collection Charge: ₹200/-</strong></p>
                                    <p><strong>Total Amount: ₹299/-</strong></p>
                                </div>

                                <!-- Button -->
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
        </div>
        <MostBookedHealthCheckups />

        <div class="container">
            <h3 class="bold-test-color font-bold text-center pb-2 pt-4">Our USP</h3>
            <div class="px-5 py-4 row">
                <div class="col-md-4">
                    <div class="card border-0 shadow-md rounded-2xl">
                        <div class="card-body text-center">
                            <img src="/watch.png" alt="Home Sample Collection" class="mx-auto mb-3"
                                style="width: 60px; height: 60px;" />
                            <h6 class="card-title bold-test-color px-4">Available in all major cities and towns</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-md rounded-2xl">
                        <div class="card-body text-center">
                            <img src="/watch.png" alt="Home Sample Collection" class="mx-auto mb-3"
                                style="width: 60px; height: 60px;" />
                            <h6 class="card-title bold-test-color px-4">Available in all major cities and towns</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-md rounded-2xl">
                        <div class="card-body text-center">
                            <img src="/watch.png" alt="Home Sample Collection" class="mx-auto mb-3"
                                style="width: 60px; height: 60px;" />
                            <h6 class="card-title bold-test-color px-4">Available in all major cities and towns</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MostBookedHealthCheckups from '../Home/MostBookedHealthCheckups.vue';
export default {
    name: " SinglePackageBook", components: { MostBookedHealthCheckups, },
} </script>
