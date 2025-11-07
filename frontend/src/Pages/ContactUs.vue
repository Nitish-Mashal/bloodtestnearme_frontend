<template>
  <div class="">
    <!-- Banner -->
    <div class="relative">
      <img
        src="/contact-us.jpg"
        alt="Contact Us"
        class="w-full h-64 object-cover"
      />
    </div>

    <!-- Main Section -->
    <div class="container  px-4 py-6">
      <div>
  <div class="flex justify-center items-center "> 
    <!-- Outer Card -->
    <div
      class="w-full max-w-7xl bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-[70%_30%]"
    >
      <!-- Compact Get in Touch Form -->
<div class="px-5 p-4 w-full max-w-md ">
  <h2 class="text-2xl font-bold bold-test-color mb-1">Get in Touch</h2>
  <p class="text-gray-600 text-sm mb-3">
    Have questions? We’d love to hear from you.
  </p>

  <el-form
    ref="contactForm"
    :model="form"
    label-position="top"
    @submit.prevent="handleSubmit"
  >
    <el-form-item
      label="Name"
      :rules="[{ required: true, message: 'Please enter your name' }]"
    >
      <el-input v-model="form.name" placeholder="Enter your name" />
    </el-form-item>

    <el-form-item
      label="Email"
      :rules="[{ required: true, message: 'Please enter your email' }]"
    >
      <el-input v-model="form.email" placeholder="Enter your email" />
    </el-form-item>

    <el-form-item
      label="Phone"
      :rules="[{ required: true, message: 'Please enter your phone number' }]"
    >
      <el-input v-model="form.phone" placeholder="Enter your phone number" />
    </el-form-item>

    <el-form-item
      label="How did you find us?"
      :rules="[{ required: true, message: 'Please select an option' }]"
    >
      <el-select v-model="form.source" placeholder="Select option">
        <el-option label="Google" value="google" />
        <el-option label="Facebook" value="facebook" />
        <el-option label="Friend" value="friend" />
        <el-option label="Other" value="other" />
      </el-select>
    </el-form-item>

    <el-button
      type="primary"
      class="w-full py-2 mt-1 font-semibold rounded-md global-bg-color text-white hover:bg-[#003d80] transition-all"
      @click="handleSubmit"
    >
      SEND
    </el-button>

    <p v-if="successMsg" class="text-green-600 mt-3 text-center text-sm">
      {{ successMsg }}
    </p>
  </el-form>
</div>


      <!-- Right Blue Section with Rounded Image -->
      <div class="relative global-bg-color  flex items-center justify-center">
        <div
          class="absolute -left-56 hidden md:flex items-center justify-center bg-transparent"
        >
          <img
            src="/contact-view.jpg"
            alt="Contact Representative"
            class="w-96 h-96 object-cover rounded-full  shadow-lg"
          />
        </div>
      </div>
    </div>
    </div>        
    </div>

      <!-- Contact Info Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
  <div
    v-for="(loc, i) in locations"
    :key="i"
    class="bg-white rounded-2xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition-all"
  >
    <!-- Address -->
     <div class="bold-test-color text-lg font-semibold leading-relaxed mb-2">
      {{ loc.name }}
    </div>
    <p class="text-gray-700 text-sm leading-relaxed mb-2">
      {{ loc.address }}
    </p>

    <!-- Email -->
    <div class="flex items-center gap-3 mb-3">
      <!-- Heroicon: Envelope -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#001D55"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.036 1.888l-7.5 4.687a2.25 2.25 0 01-2.428 0l-7.5-4.687A2.25 2.25 0 013 6.993V6.75"
        />
      </svg>
      <span class="text-[#001D55] text-sm font-medium">{{ loc.email }}</span>
    </div>

    <!-- Buttons (2 Columns) -->
    <div class="grid grid-cols-2 gap-2">
      <!-- Phone Button -->
      <a
        :href="'tel:' + loc.phone"
        class="flex items-center justify-center gap-2 global-bg-color text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-[#003d80] transition-all"
      >
        <!-- Heroicon: Phone -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3.75l2.69-.67a1.125 1.125 0 011.11.29l2.1 2.1a1.125 1.125 0 01.24 1.21l-1.26 2.52a12.042 12.042 0 005.64 5.64l2.52-1.26a1.125 1.125 0 011.21.24l2.1 2.1a1.125 1.125 0 01.29 1.11l-.67 2.69a1.125 1.125 0 01-1.09.84c-9.11 0-16.5-7.39-16.5-16.5 0-.51.33-.96.84-1.09z"
          />
        </svg>
        {{ loc.phone }}
      </a>

      <!-- Google Map Button -->
      <a
        :href="loc.map"
        target="_blank"
        class="flex items-center justify-center gap-2 border border-gray-300 text-gray-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-all"
      >
        <!-- Heroicon: Map Pin -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#001D55"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        Google Map
      </a>
    </div>
  </div>
</div>

      <!-- Office Timings -->
      <div
        class="bg-white text-center rounded-2xl shadow-md mt-10 py-6 max-w-md mx-auto"
      >
        <h3 class="text-xl font-bold text-[#001D55] mb-2">Office Timings</h3>
        <p class="text-gray-700">Mon – Fri: 9:30 AM – 6:00 PM</p>
        <p class="text-gray-700">Sat: 9:30 AM – 4:00 PM</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const successMsg = ref("");
const handleSubmit = () => {
  if (
    form.value.name &&
    form.value.email &&
    form.value.phone &&
    form.value.message
  ) {
    successMsg.value = "✅ Your message has been sent successfully!";
    form.value = { name: "", email: "", phone: "", message: "" };
  } else {
    successMsg.value = "";
  }
};

const locations = ref([
  {
    name: "Thiruvikan Nagar",
    address: "No.12, Main Street, Chennai - 600011",
    phone: "9876543210",
    map: "https://maps.google.com",
    email: "info@thiruvikanlab.com",
  },
  {
    name: "Thiruvottriyur",
    address: "Plot 21, Beach Road, Chennai - 600019",
    phone: "9123456780",
    map: "https://maps.google.com",
    email: "support@thiruvottriyurlab.com",
  },
  {
    name: "Perambur",
    address: "No.7, Railway Colony, Chennai - 600011",
    phone: "9765432109",
    map: "https://maps.google.com",
    email: "hello@peramburlab.com",
  },
]);
</script>

<style scoped>
.el-form-item {
    margin-bottom: 10px !important ;
}
</style>
