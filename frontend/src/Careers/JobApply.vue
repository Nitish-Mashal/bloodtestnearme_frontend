<template>
    <div>
        <div class="container pt-4 bold-test-color">

            <!-- We're Hiring -->
            <div
                class="border-1 border-[#001D55] px-5 py-1 rounded-full inline-flex items-center justify-center whitespace-nowrap">
                We're Hiring!
            </div>

            <!-- Intro -->
            <div class="text-[220%] font-semibold pt-3 pb-4">
                Be a part of our Team
                <div class="text-xl font-normal pt-2">
                    We're looking for passionate people to join us on our mission. We value flat hierarchies, <br>
                    clear communication, and full ownership and responsibility.
                </div>
            </div>

            <!-- Job Listing -->
            <div>
                <div class="flex justify-between items-center">
                    <h3 class="font-semibold text-2xl">{{ jobName }}</h3>

                    <!-- Job Type -->
                    <div
                        class="border-1 border-[#001D55] text-sm px-3 py-1 rounded-full inline-flex items-center justify-center whitespace-nowrap mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {{ jobType }}
                    </div>
                </div>

                <div class="pt-2 text-justify">
                    {{ jobDescription }}
                </div>
            </div>

            <!-- SUCCESS MESSAGE -->
            <p v-if="successMsg" class="text-green-500 text-lg mt-3">
                {{ successMsg }}
            </p>

            <!-- Form -->
            <div class="row">

                <!-- Row 1 -->
                <div class="col-md-4">
                    <label class="form-label mt-4">First Name <span class="text-red-600">*</span></label>
                    <input type="text" class="form-control py-1 placeholder:text-sm" v-model="form.firstName"
                        @input="errors.firstName = false" placeholder="Enter your First Name *" />
                    <p v-if="errors.firstName" class="text-red-600 text-sm mt-1">First Name is required.</p>
                </div>

                <div class="col-md-4">
                    <label class="form-label mt-4">Middle Name <span
                            class="text-gray-500 text-sm">(Optional)</span></label>
                    <input type="text" class="form-control py-1 placeholder:text-sm" v-model="form.middleName"
                        placeholder="Enter your Middle Name (Optional)" />
                </div>

                <div class="col-md-4">
                    <label class="form-label mt-4">Last Name <span class="text-red-600">*</span></label>
                    <input type="text" class="form-control py-1 placeholder:text-sm" v-model="form.lastName"
                        @input="errors.lastName = false" placeholder="Enter your Last Name *" />
                    <p v-if="errors.lastName" class="text-red-600 text-sm mt-1">Last Name is required.</p>
                </div>

                <!-- Row 2 -->
                <div class="col-md-4">
                    <label class="form-label mt-4">Experience <span class="text-red-600">*</span></label>
                    <input type="text" class="form-control py-1 placeholder:text-sm" v-model="form.experience"
                        @input="errors.experience = false" placeholder="Enter your Experience *" />
                    <p v-if="errors.experience" class="text-red-600 text-sm mt-1">Experience is required.</p>
                </div>

                <div class="col-md-4">
                    <label class="form-label mt-4">Email Address <span class="text-red-600">*</span></label>
                    <input type="email" class="form-control py-1 placeholder:text-sm" v-model="form.email"
                        @input="errors.email = false" placeholder="Enter your Email Address *" />
                    <p v-if="errors.email" class="text-red-600 text-sm mt-1">Valid Email is required.</p>
                </div>

                <div class="col-md-4">
                    <label class="form-label mt-4">Contact Number <span class="text-red-600">*</span></label>
                    <input type="text" class="form-control py-1 placeholder:text-sm" v-model="form.contact"
                        @input="errors.contact = false" placeholder="Enter your Contact Number *" />
                    <p v-if="errors.contact" class="text-red-600 text-sm mt-1">Contact Number is required.</p>
                </div>
            </div>

            <!-- Upload + Submit -->
            <div class="flex justify-between items-start pt-4">

                <!-- Upload Resume + Error Msg (Left Side) -->
                <div class="flex flex-col">
                    <label class="cursor-pointer border-1 border-[#001D55] px-5 py-1 rounded-full 
                   hover:bg-gray-100 transition inline-flex items-center whitespace-nowrap">
                        <input type="file" class="hidden" @change="handleResumeUpload" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-4 w-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        {{ resumeName || "Upload Resume" }}
                    </label>

                    <!-- Correctly Positioned Error -->
                    <p v-if="errors.resume" class="text-red-600 text-sm mt-1">
                        Resume is required.
                    </p>
                </div>

                <!-- Submit Button (Right Side) -->
                <button class="cursor-pointer bg-[#001D55] text-white px-5 py-1 rounded-full 
               hover:bg-gray-100 hover:text-[#001D55] transition inline-flex items-center whitespace-nowrap"
                    @click="submitForm">
                    Submit
                </button>
            </div>


            <!-- Contact -->
            <div class="text-xl font-normal pt-4">
                Interested candidates can contact ph: +91 9611011266 or share resumes to
                <span class="font-semibold">shankar.a2381@thyrocare.com</span>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// DYNAMIC JOB VALUES
const jobName = "Lab Supervisor";
const jobType = "Full Time";
const jobDescription =
    "A lab supervisor oversees daily laboratory operations, manages safety, staff, testing quality, and ensures the smooth functioning of equipment and reporting.";

// FORM DATA
const form = ref({
    firstName: "",
    middleName: "",
    lastName: "",
    experience: "",
    email: "",
    contact: "",
});

// ERROR FLAGS
const errors = ref({
    firstName: false,
    lastName: false,
    experience: false,
    email: false,
    contact: false,
    resume: false,
});

// SUCCESS MESSAGE
const successMsg = ref("");

// RESUME UPLOAD
const resumeFile = ref(null);
const resumeName = ref("");

const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
        resumeFile.value = file;
        resumeName.value = file.name;
        errors.value.resume = false;
    }
};

// FORM SUBMISSION
const submitForm = () => {
    let isValid = true;
    successMsg.value = "";

    // VALIDATIONS
    errors.value.firstName = !form.value.firstName;
    errors.value.lastName = !form.value.lastName;
    errors.value.experience = !form.value.experience;
    errors.value.email = !form.value.email;
    errors.value.contact = !form.value.contact;
    errors.value.resume = !resumeFile.value;

    Object.values(errors.value).forEach(v => { if (v) isValid = false; });

    if (!isValid) return;

    // SUCCESS MESSAGE
    successMsg.value = "Form submitted successfully!";

    // CLEAR FORM
    form.value = {
        firstName: "",
        middleName: "",
        lastName: "",
        experience: "",
        email: "",
        contact: "",
    };

    resumeFile.value = null;
    resumeName.value = "";

    // Hide success message after 5 seconds
    setTimeout(() => successMsg.value = "", 5000);
};
</script>
