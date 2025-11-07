<template>
  <div class="max-w-md mx-auto mt-4 p-3 bg-white rounded-2xl shadow-lg">
    <h2 class=" text-2xl font-semibold text-center mb-2">Contact Information</h2>

   <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Lab Name -->
      <div>
        <label class="block text-gray-700 font-medium mb-1">Lab Name</label>
        <input
          v-model="form.labName"
          type="text"
          placeholder="Enter Lab Name"
          class="w-full border border-gray-300 rounded-lg p-1 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <!-- Address -->
      <div>
        <label class="block text-gray-700 font-medium mb-1">Address</label>
        <textarea
          v-model="form.address"
          placeholder="Enter address"
          class="w-full border border-gray-300 rounded-lg p-1 focus:ring focus:ring-blue-200"
          rows="3"
          required
        ></textarea>
      </div>

      <!-- Phone + City (2 columns) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        <div>
          <label class="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            v-model="form.phone"
            type="tel"
            placeholder="Enter phone number"
            class="w-full border border-gray-300 rounded-lg p-1 focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">City</label>
          <input
            v-model="form.city"
            type="text"
            placeholder="Enter city"
            class="w-full border border-gray-300 rounded-lg p-1 focus:ring focus:ring-blue-200"
            required
          />
        </div>
      </div>

      <!-- State + Pincode (2 columns) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        <div>
          <label class="block text-gray-700 font-medium mb-1">State</label>
          <input
            v-model="form.state"
            type="text"
            placeholder="Enter state"
            class="w-full border border-gray-300 rounded-lg p-1 focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Pincode</label>
          <input
            v-model="form.pincode"
            type="text"
            placeholder="Enter pincode"
            class="w-full border border-gray-300 rounded-lg p-1 focus:ring focus:ring-blue-200"
            required
          />
        </div>
      </div>

      <!-- Location Link -->
      <div>
        <label class="block text-gray-700 font-medium mb-1">Location Link</label>
        <input
          v-model="form.locationLink"
          type="url"
          placeholder="Paste map or location link here"
          class="w-full border border-gray-300 rounded-lg p-1 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <!-- Submit Button -->
      <div class="text-center pt-2">
        <button
          type="submit"
          class="global-bg-color text-white px-6 py-2 rounded-lg hover:global-bg-color transition"
        >
          Submit
        </button>
      </div>
    </form>
     <!-- ✅ Success Message -->
    <p
      v-if="successMessage"
      class="bg-green-100 text-green-700 text-center p-1 rounded-md mb-3"
    >
      {{ successMessage }}
    </p>

    <!-- ❌ Error Message -->
    <p
      v-if="errorMessage"
      class="bg-red-100 text-red-700 text-center p-1 rounded-md mb-3"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  labName: "",
  address: "",
  phone: "",
  city: "",
  state: "",
  pincode: "",
  locationLink: "",
});

const successMessage = ref("");
const errorMessage = ref("");

const handleSubmit = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  try {
    const payload = {
      diagnostic_center_name: form.labName,
      address: form.address,
      phone_number: form.phone,
      city: form.city,
      state: form.state,
      pincode: form.pincode,
      map_embed_link: form.locationLink,
      workflow_state: "Created",
    };

    const response = await fetch(
      "http://localhost:8000/api/method/bloodtestnearme.api.diagnostic_center.create_diagnostic_center",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    console.log("Response:", data);

    const isSuccess =
      data.message?.status === "success" ||
      data.message?.message?.includes("Diagnostic Center created successfully");

    if (isSuccess) {
      successMessage.value = "Diagnostic Center data submitted successfully!";
      Object.keys(form).forEach((key) => (form[key] = ""));
      setTimeout(() => (successMessage.value = ""), 4000); // Auto hide after 4s
    } else {
      errorMessage.value = "Failed to submit data. Please try again.";
      setTimeout(() => (errorMessage.value = ""), 4000);
    }
  } catch (error) {
    console.error("Error posting Diagnostic Center:", error);
    errorMessage.value = "Something went wrong. Please try again.";
    setTimeout(() => (errorMessage.value = ""), 4000);
  }
};
</script>
