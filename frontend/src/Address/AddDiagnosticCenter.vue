<template>
  <div>
    <!-- Main Section -->
    <div class="container mx-auto px-6 py-8">
      <h2 class="text-3xl font-semibold mb-6 text-gray-800">
        Diagnostic Center Contact Information
      </h2>

      <!-- ✅ Element Plus Form -->
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-position="top"
        @submit.prevent="handleSubmit"
        class="grid grid-cols-2 gap-x-4 gap-y-3 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
      >
        <!-- Lab Name -->
        <el-form-item label="Lab Name" prop="labName">
          <input
            v-model="form.labName"
            type="text"
            placeholder="Enter Lab Name"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-600"
          />
        </el-form-item>

        <!-- Address -->
        <el-form-item label="Address" prop="address">
          <textarea
            v-model="form.address"
            placeholder="Enter Address"
            rows="1"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-600"
          ></textarea>
        </el-form-item>

        <!-- Phone -->
        <el-form-item label="Phone Number" prop="phone">
          <input
            v-model="form.phone"
            type="text"
            placeholder="Enter Phone Number"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-600"
          />
        </el-form-item>

        <!-- City -->
        <el-form-item label="City" prop="city">
          <input
            v-model="form.city"
            type="text"
            placeholder="Enter City"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-600"
          />
        </el-form-item>

        <!-- State -->
        <el-form-item label="State" prop="state">
          <input
            v-model="form.state"
            type="text"
            placeholder="Enter State"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-600"
          />
        </el-form-item>

        <!-- Pincode -->
        <el-form-item label="Pincode" prop="pincode">
          <input
            v-model="form.pincode"
            type="text"
            placeholder="Enter Pincode"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-600"
          />
        </el-form-item>

        <!-- Location Link -->
        <el-form-item label="Location Link" prop="locationLink" class="col-span-2">
          <input
            v-model="form.locationLink"
            type="text"
            placeholder="Paste map or location link here"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-600"
          />
        </el-form-item>

        <!-- Buttons -->
        <div class="col-span-2 flex justify-end mt-4 space-x-3">
          <el-button type="default" @click="resetForm">Cancel</el-button>
          <el-button type="primary" @click="handleSubmit">Submit</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";

const formRef = ref();

const form = reactive({
  labName: "",
  address: "",
  phone: "",
  city: "",
  state: "",
  pincode: "",
  locationLink: "",
});

// ✅ Validation Rules
const rules = {
  labName: [{ required: true, message: "Please enter Lab Name", trigger: "blur" }],
  address: [{ required: true, message: "Please enter Address", trigger: "blur" }],
  phone: [
    { required: true, message: "Please enter Phone Number", trigger: "blur" },
    { pattern: /^[0-9]{10}$/, message: "Phone must be 10 digits", trigger: "blur" },
  ],
  city: [{ required: true, message: "Please enter City", trigger: "blur" }],
  state: [{ required: true, message: "Please enter State", trigger: "blur" }],
  pincode: [
    { required: true, message: "Please enter Pincode", trigger: "blur" },
    { pattern: /^[0-9]{6}$/, message: "Pincode must be 6 digits", trigger: "blur" },
  ],
  locationLink: [
    { required: true, message: "Please paste location link", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        try {
          new URL(value);
          callback();
        } catch {
          callback(new Error("Enter a valid URL"));
        }
      },
      trigger: "blur",
    },
  ],
};

// ✅ Reset Form
const resetForm = () => {
  formRef.value.resetFields();
};

// ✅ Submit Handler (Relative URL)
const handleSubmit = () => {
  formRef.value.validate(async (valid) => {
    if (!valid) {
      ElMessage.error("Please fill all required fields correctly.");
      return;
    }

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

      // ✅ Relative path (no localhost:8000)
      const response = await fetch(
        "/api/method/bloodtestnearme.api.diagnostic_center.create_diagnostic_center",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (
        data.message?.status === "success" ||
        data.message?.message?.includes("Diagnostic Center created successfully")
      ) {
        ElMessage.success("Diagnostic Center data submitted successfully!");
        resetForm();
      } else {
        ElMessage.error("Failed to submit data. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      ElMessage.error("Something went wrong. Please try again.");
    }
  });
};
</script>

<style scoped>
.el-form-item__label {
  font-weight: 500;
  color: #374151;
}

.el-form-item {
  margin-bottom: 12px !important;
}
</style>
