<template>
    <div v-if="loading" class="flex justify-center items-center h-60">
        <div class="flex flex-col items-center">
            <svg class="animate-spin h-8 w-8 text-[#001D55]" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            <p class="text-[#001D55] mt-3 font-semibold">Loading cart details...</p>
        </div>
    </div>

    <div v-else>
        <div class="container">
            <div class="px-5 py-4 row">
                <!-- Left Section -->
                <div class="col-12 col-md-6 mb-2">
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

                    <div v-if="cartStore.cartItems && cartStore.cartItems.length">
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

                <!-- Right Section -->
                <div class="col-12 col-md-6">
                    <div class="p-4 border-0 shadow-sm rounded-xl bg-gray-50">
                        <form class="space-y-4 bold-test-color" @submit.prevent="singleOrderSubmit">
                            <!-- Row 1 -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-start">
                                <div class="relative w-full min-h-[30px]">
                                    <input v-model="form.pincode" @input="onPincodeInput" type="text"
                                        placeholder="Pincode *"
                                        class="border rounded-md px-3 py-[1px] text-sm w-full" />

                                    <p v-if="errors.pincode" class="absolute text-[11px] text-red-500 mt-[2px]"> {{
                                        errors.pincode }} </p>
                                    <p v-if="pincodeMessage"
                                        :class="['absolute text-[11px] mt-[2px]', pincodeStatus === 'success' ? 'text-green-600' : 'text-red-500']">
                                        {{ pincodeMessage }}
                                    </p>
                                </div>

                                <button type="button" @click="checkPincodeAvailability" :disabled="isChecking"
                                    class="bg-gray-200 text-gray-700 text-sm px-3 py-[1px] rounded-md hover:bg-gray-300 transition h-[28px] sm:h-[30px] self-start disabled:opacity-60 disabled:cursor-not-allowed">
                                    {{ isChecking ? "Checking..." : "Check Availability" }}
                                </button>
                            </div>

                            <!-- Persons -->
                            <div>
                                <select v-model="numPersons" class="border rounded-md px-3 py-1 text-sm w-full">
                                    <option disabled value="">Select Number of Person *</option>
                                    <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                                </select>

                                <div class="text-xs text-red-500 mb-2 mt-2">
                                    Note: Same set of tests will be added for all persons.
                                </div>

                                <!-- Dynamic Persons -->
                                <div v-for="(person, index) in persons" :key="index"
                                    class="border p-1 rounded-md bg-gray-50 mb-2">
                                    <h6 v-if="numPersons && numPersons > 1" class="text-sm font-semibold mb-2 mt-2">
                                        Person {{ index + 1 }}
                                    </h6>

                                    <input v-model="person.name" @input="clearError(`name_${index}`)" type="text"
                                        placeholder="Beneficiary Name *"
                                        class="border rounded-md px-3 py-[1px] text-sm w-full mb-2" />
                                    <p v-if="errors[`name_${index}`]" class="text-xs text-red-500 mt-1">
                                        {{ errors[`name_${index}`] }}
                                    </p>

                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <div>
                                            <input v-model="person.age" @input="clearError(`age_${index}`)"
                                                type="number" placeholder="Age *"
                                                class="border rounded-md px-3 py-[1px] text-sm w-full" />
                                            <p v-if="errors[`age_${index}`]" class="text-xs text-red-500 mt-1">
                                                {{ errors[`age_${index}`] }}
                                            </p>
                                        </div>

                                        <div>
                                            <select v-model="person.gender" @change="clearError(`gender_${index}`)"
                                                class="border rounded-md px-3 py-1 text-sm w-full">
                                                <option disabled value="">Select Gender *</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Others</option>
                                            </select>
                                            <p v-if="errors[`gender_${index}`]" class="text-xs text-red-500 mt-1">
                                                {{ errors[`gender_${index}`] }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Email & Mobile -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <input v-model="form.email" @input="clearError('email')" type="email"
                                        placeholder="Email *" class="border rounded-md px-3 py-[1px] text-sm w-full" />
                                    <p v-if="errors.email" class="text-xs text-red-500 mt-1">{{ errors.email }}</p>
                                </div>
                                <div>
                                    <input v-model="form.mobile" @input="onMobileInput" type="tel"
                                        placeholder="Mobile (Indian Number Only) *"
                                        class="border rounded-md px-3 py-[1px] text-sm w-full" />
                                    <p v-if="errors.mobile" class="text-xs text-red-500 mt-1">{{ errors.mobile }}</p>
                                </div>
                            </div>

                            <!-- Address -->
                            <div>
                                <textarea v-model="form.address" @input="onAddressInput" rows="2"
                                    class="border rounded-md px-3 py-[1px] text-sm w-full"
                                    placeholder="Complete Address *"></textarea>
                                <p v-if="errors.address" class="text-xs text-red-500 mt-1">{{ errors.address }}</p>
                            </div>

                            <!-- Collection Type -->
                            <div class="flex items-center justify-center gap-2">
                                <span class="font-semibold text-sm">Collection Type:</span>
                                <label class="flex items-center gap-2 text-sm cursor-pointer">
                                    <input type="checkbox" v-model="form.homeCollection"
                                        class="w-4 h-4 appearance-none border border-gray-400 rounded-full checked:bg-[#001D55] checked:border-[#001D55] transition duration-200" />
                                    Home Collection
                                </label>
                            </div>

                            <!-- Date & Time -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div>
                                    <input v-model="form.date" @change="clearError('date')" :min="minDate" type="date"
                                        class="border rounded-md px-3 py-[1px] text-sm w-full" />
                                    <p v-if="errors.date" class="text-xs text-red-500 mt-1">{{ errors.date }}</p>
                                </div>
                                <div>
                                    <select v-model="form.timeSlot" @change="clearError('timeSlot')"
                                        class="border rounded-md px-3 py-1 text-sm w-full"
                                        :disabled="!timeSlots.length">
                                        <option disabled value="">Select Preferred Time Slot *</option>
                                        <option v-for="(slot, i) in timeSlots" :key="i" :value="slot">{{ slot }}
                                        </option>
                                    </select>
                                    <p v-if="errors.timeSlot" class="text-xs text-red-500 mt-1">{{ errors.timeSlot }}
                                    </p>
                                </div>
                            </div>

                            <!-- Printed Reports -->
                            <div class="flex items-center text-sm text-gray-700">
                                <input type="checkbox" v-model="form.printedReports" class="mr-2" />
                                <span class="text-red-500">Additional Rs. 75 for Printed Reports</span>
                            </div>

                            <!-- Price Summary -->
                            <div>
                                <p><strong>Test/Package Price: </strong> ₹{{ totalBasePrice }}</p>
                                <p v-if="totalBasePrice < 300">
                                    <strong>Home Collection Charge:</strong> ₹{{ homeCollectionCharge }}
                                </p>
                                <p v-if="form.printedReports">
                                    <strong>Printed Report Charge:</strong> ₹{{ printedReportCharge }}
                                </p>
                                <p class="mt-2 text-lg font-semibold text-[#001D55]">
                                    <strong>Total Amount:</strong> ₹{{ finalAmount }}
                                </p>
                            </div>

                            <!-- Book Now -->
                            <div class="flex justify-center">
                                <button type="submit" :disabled="cartStore.cartItems.length === 0 || submitting" :class="[
                                    'px-20 py-2 rounded-full transition w-full sm:w-auto',
                                    cartStore.cartItems.length === 0 || submitting
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'global-bg-color text-white'
                                ]">
                                    {{ submitting ? "Booking..." : "Book Now" }}
                                </button>
                            </div>

                            <!-- Backend Message -->
                            <div v-if="backendMessage.text" class="mt-3 text-center">
                                <p :class="backendMessage.type === 'success' ? 'text-green-600' : 'text-red-600'">
                                    {{ backendMessage.text }}
                                </p>
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
import { ref, watch, onMounted, computed } from "vue";
import axios from "axios";
import MostBookedHealthCheckups from "../Home/MostBookedHealthCheckups.vue";
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();
const loading = ref(true);
const submitting = ref(false);

// ========================== FORM & STATE ==========================
const numPersons = ref("");
const persons = ref([{ name: "", age: "", gender: "" }]);
const errors = ref({});
const backendMessage = ref({ text: "", type: "" });

const pincodeMessage = ref("");
const pincodeStatus = ref("");
const isChecking = ref(false);

const form = ref({
    pincode: "",
    email: "",
    mobile: "",
    address: "",
    date: "",
    timeSlot: "",
    homeCollection: false,
    printedReports: false,
});

const homeCollectionCharge = ref(200);
const printedReportCharge = ref(75);

// Date & time slots
const timeSlots = ref([]);
const todayISO = new Date().toISOString().split("T")[0];
const minDate = ref(todayISO);

// ========================== DYNAMIC PERSONS ==========================
watch(numPersons, (newVal) => {
    const count = Number(newVal);
    if (!count) {
        persons.value = [{ name: "", age: "", gender: "" }];
        return;
    }
    persons.value = Array.from({ length: count }, () => ({
        name: "",
        age: "",
        gender: "",
    }));
});

// keep person inputs clean (letters/spaces only) and clear errors as user types
watch(
    persons,
    (newPersons) => {
        newPersons.forEach((person, i) => {
            if (person.name && /[^a-zA-Z\s]/.test(person.name)) {
                person.name = person.name.replace(/[^a-zA-Z\s]/g, "");
            }
            if (person.name) delete errors.value[`name_${i}`];
            if (person.age) delete errors.value[`age_${i}`];
            if (person.gender) delete errors.value[`gender_${i}`];
        });
    },
    { deep: true }
);

// ========================== TIME SLOTS ==========================
const generateTimeSlots = () => {
    const slots = [];
    const start = new Date();
    start.setHours(7, 0, 0, 0);
    const end = new Date();
    end.setHours(18, 0, 0, 0);
    while (start < end) {
        const endTime = new Date(start.getTime() + 30 * 60000);
        const formatTime = (date) =>
            date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
        slots.push(`${formatTime(start)} - ${formatTime(endTime)}`);
        start.setTime(endTime.getTime());
    }
    return slots;
};
const allSlots = generateTimeSlots();

watch(
    () => form.value.date,
    (newDate) => {
        if (!newDate) {
            timeSlots.value = [];
            form.value.timeSlot = "";
            return;
        }
        const selected = new Date(newDate);
        const today = new Date();
        if (
            selected.getFullYear() === today.getFullYear() &&
            selected.getMonth() === today.getMonth() &&
            selected.getDate() === today.getDate()
        ) {
            const now = new Date();
            timeSlots.value = allSlots.filter((slot) => {
                const slotStart = new Date();
                const [startStr] = slot.split(" - ");
                // startStr example: "07:00 AM"
                const parts = startStr.split(" ");
                let timePart = parts[0];
                let meridiem = parts[1] || "";
                let [hour, minute] = timePart.split(":").map(Number);
                if (meridiem === "PM" && hour !== 12) hour += 12;
                if (meridiem === "AM" && hour === 12) hour = 0;
                slotStart.setHours(hour, minute, 0, 0);
                return slotStart > now;
            });
        } else {
            timeSlots.value = [...allSlots];
        }
        form.value.timeSlot = "";
    }
);

// ========================== VALIDATIONS ==========================
const clearError = (field) => {
    delete errors.value[field];
};

const onPincodeInput = (e) => {
    // allow only digits and max 6
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 6) v = v.slice(0, 6);
    form.value.pincode = v;
    if (!v) errors.value.pincode = "Please enter pincode.";
    else if (v.length !== 6) errors.value.pincode = "Pincode must be 6 digits.";
    else delete errors.value.pincode;
};

watch(
    () => form.value.email,
    (val) => {
        if (!val) errors.value.email = "Please enter your email.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
            errors.value.email = "Please enter a valid email address (example@domain.com).";
        else delete errors.value.email;
    }
);

const onMobileInput = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) value = value.slice(0, 10);
    form.value.mobile = value;

    if (!value) errors.value.mobile = "Please enter your mobile number.";
    else if (!/^[6-9]/.test(value)) errors.value.mobile = "Please enter a valid Indian mobile number.";
    else if (value.length < 10) errors.value.mobile = "Mobile number must be exactly 10 digits.";
    else delete errors.value.mobile;
};

const onAddressInput = (e) => {
    // keep trimmed value but allow newlines while typing
    const value = e.target.value;
    form.value.address = value;
    if (!value || !value.trim()) errors.value.address = "Please enter your address.";
    else if (value.trim().length < 25) errors.value.address = "Address must be at least 25 characters long.";
    else delete errors.value.address;
};

// ========================== AMOUNT COMPUTATIONS ==========================
const totalBasePrice = computed(() => {
    return cartStore.cartItems.reduce(
        (sum, item) => sum + parseFloat(item.discounted_price || 0),
        0
    );
});

const finalAmount = computed(() => {
    let total = totalBasePrice.value;

    // ✅ Always add home collection charge if total < 300
    if (total < 300) total += homeCollectionCharge.value;

    // Printed reports charge (only if selected)
    if (form.value.printedReports) total += printedReportCharge.value;

    return Math.round(total);
});


// Keep a reactive totalAmount (useful for payload)
const totalAmount = ref(0);
watch(finalAmount, (v) => (totalAmount.value = v), { immediate: true });

// ========================== PINCODE CHECK ==========================
const checkPincodeAvailability = async () => {
    const pincode = form.value.pincode?.trim();
    pincodeMessage.value = "";
    pincodeStatus.value = "";
    if (!/^\d{6}$/.test(pincode)) {
        pincodeMessage.value = "Enter valid 6 digit pincode first.";
        pincodeStatus.value = "error";
        return;
    }
    isChecking.value = true;
    try {
        const response = await axios.get("/api/method/bloodtestnearme.api.pincodes_api.getby_pincodes", {
            params: { pincode }
        });
        const res = response.data?.message;
        if (res) {
            pincodeMessage.value = res.message || "Response received";
            pincodeStatus.value = res.status || "success";
        } else {
            pincodeMessage.value = "Unexpected API response format.";
            pincodeStatus.value = "error";
        }
    } catch (err) {
        console.error("Error checking pincode:", err);
        pincodeMessage.value = err.response?.data?.message || "Unable to check availability at the moment.";
        pincodeStatus.value = "error";
    } finally {
        isChecking.value = false;
    }
};

// ========================== EMAIL VALIDATION WATCH ==========================
watch(
    () => form.value.email,
    (val) => {
        if (!val) {
            errors.value.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            errors.value.email = "Please enter a valid email address (example@domain.com).";
        } else {
            delete errors.value.email;
        }
    }
);

// ========================== VALIDATIONS ==========================
const validateBeforeSubmit = () => {
    errors.value = {};

    // Pincode
    if (!form.value.pincode) errors.value.pincode = "Please enter pincode.";
    else if (!/^\d{6}$/.test(form.value.pincode)) errors.value.pincode = "Pincode must be 6 digits.";

    // Persons
    persons.value.forEach((p, i) => {
        if (!p.name) errors.value[`name_${i}`] = "Name is required.";
        else if (!/^[A-Za-z\s]+$/.test(p.name)) errors.value[`name_${i}`] = "Name must contain only letters.";
        if (!p.age) errors.value[`age_${i}`] = "Age is required.";
        if (!p.gender) errors.value[`gender_${i}`] = "Gender is required.";
    });

    // Email
    if (!form.value.email) {
        errors.value.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errors.value.email = "Please enter a valid email address (example@domain.com).";
    }

    // Mobile
    const mobile = (form.value.mobile || "").trim();
    if (!mobile) errors.value.mobile = "Please enter your mobile number.";
    else if (!/^[6-9]\d{9}$/.test(mobile)) errors.value.mobile = "Invalid Indian mobile number.";

    // Address
    const address = (form.value.address || "").trim();
    if (!address) errors.value.address = "Please enter your address.";
    else if (address.length < 25) errors.value.address = "Address must be at least 25 characters.";

    // Date & Time
    if (!form.value.date) errors.value.date = "Please select your date.";
    if (!form.value.timeSlot) errors.value.timeSlot = "Please select your time slot.";

    // Cart
    if (!cartStore.cartItems || cartStore.cartItems.length === 0)
        backendMessage.value = { text: "No items in cart to book.", type: "error" };

    return Object.keys(errors.value).length === 0 &&
        (!backendMessage.value.text || backendMessage.value.type !== "error");
};

const singleOrderSubmit = async () => {
    backendMessage.value = { text: "", type: "" };
    if (!validateBeforeSubmit()) {
        // If validation failed, show a message (fields will show inline errors)
        backendMessage.value = { text: "Please fix the errors above and try again.", type: "error" };
        return;
    }

    // Prepare payload
    const payload = {
        customer_name: persons.value[0]?.name || "",
        age: persons.value[0]?.age || "",
        gender: persons.value[0]?.gender || "",
        email: form.value.email,
        mobile_number: form.value.mobile,
        address: form.value.address,
        pincode: form.value.pincode,
        appointment_date: form.value.date,
        appointment_time: form.value.timeSlot,
        number_of_persons: Number(numPersons.value) || persons.value.length || 1,
        hard_copy_required: form.value.printedReports ? 1 : 0,
        total_price: totalAmount.value,
        total_item_price: totalBasePrice.value,
        ordered_items: cartStore.cartItems.map(item => ({ ...item })), // send all cart items
        customer_details: persons.value,
        home_collection: form.value.homeCollection ? 1 : 0
    };

    submitting.value = true;
    loading.value = true; // show loader during call
    try {
        const res = await axios.post("/api/method/bloodtestnearme.api.order_api.create_order", payload);

        // Accept different API shapes gracefully
        const ok = res.data?.status === "success" || res.data?.message?.status === "success";
        if (ok) {
            const orderId = res.data?.order_id || res.data?.message?.order_id || res.data?.message || res.data?.data || "";
            backendMessage.value = {
                text: `✅ Order created successfully! Order ID: ${orderId}`,
                type: "success",
            };

            // Reset form
            form.value = {
                pincode: "",
                email: "",
                mobile: "",
                address: "",
                date: "",
                timeSlot: "",
                homeCollection: false,
                printedReports: false,
            };
            numPersons.value = "";
            persons.value = [{ name: "", age: "", gender: "" }];
            errors.value = {};

            // Clear cart if method available
            if (typeof cartStore.clearCart === "function") {
                cartStore.clearCart();
            } else {
                // fallback: empty array (Pinia best practice is to call action, but fallback included)
                cartStore.cartItems = [];
            }
        } else {
            const message = res.data?.message || res.data?.error || "Failed to create order.";
            backendMessage.value = { text: message, type: "error" };
        }
    } catch (err) {
        console.error("Order creation error:", err);
        backendMessage.value = {
            text: err.response?.data?.message || "Server error occurred while creating order.",
            type: "error",
        };
    } finally {
        submitting.value = false;
        loading.value = false;
    }
};

// ========================== FETCH/INIT ==========================
const fetchData = async () => {
    // If you'd like to re-fetch product/package lists to keep cart items consistent, do it here.
    try {
        // If you need to re-sync with backend for available packages or latest prices,
        // add axios calls here and reconcile cartStore.cartItems accordingly.
        await Promise.all([
            axios.get("/api/method/bloodtestnearme.api.packages.get_individual_packages"),
            axios.get("/api/method/bloodtestnearme.api.packages.get_package_based_tests"),
        ]);
    } catch (err) {
        console.error("Error fetching packages:", err);
    } finally {
        loading.value = false;
    }
};

onMounted(fetchData);
</script>
