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

            <!-- Resume Upload -->
            <div class="card shadow py-4 rounded-4 bold-test-color">
                <div class="flex flex-col justify-center items-center">

                    <!-- Upload Button -->
                    <label for="resume-upload"
                        class="cursor-pointer border-1 border-[#001D55] px-5 py-1 rounded-full hover:bg-gray-100 transition inline-flex items-center whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-4 w-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        Upload Resume
                    </label>
                    <input id="resume-upload" type="file" class="hidden" @change="handleResumeUpload" />

                    <!-- Uploading Message -->
                    <div v-if="uploading" class="text-sm text-gray-600 mt-2">
                        Uploading file...
                    </div>

                    <!-- Uploaded File Name -->
                    <div v-if="uploadedFileName && !uploading" class="text-sm text-green-700 mt-2">
                        {{ uploadedFileName }}
                    </div>
                </div>

                <div class="text-xl font-normal text-center pt-4">
                    Interested candidates can contact ph: +91 9611011266 or share resumes to
                    <span class="font-semibold">shankar.a2381@thyrocare.com</span>
                </div>

            </div>

            <!-- Job Listings -->
            <div v-for="(job, index) in jobs" :key="index">
                <hr class="mt-4" />

                <div class="flex justify-between items-center">
                    <h3 class="font-semibold text-2xl">{{ job.title }}</h3>

                    <router-link to="/ApplyJob" class="no-underline text-inherit">
                        <button class="text-2xl flex items-center gap-1 hover:underline text-inherit">
                            Apply
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </button>
                    </router-link>

                </div>

                <!-- Job Description -->
                <div class="pt-2">
                    {{ job.description }}
                </div>

                <!-- Job Type -->
                <div
                    class="border-1 border-[#001D55] text-sm px-3 py-1 rounded-full inline-flex items-center justify-center whitespace-nowrap mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {{ job.type }}
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Job Data
const jobs = ref([
    {
        title: "Lab Supervisor",
        description: "We're looking for a mid-level Lab Supervisor to join our team.",
        type: "Full Time"
    },
    {
        title: "Phlebotomist",
        description: "We need skilled phlebotomists with experience in sample collection.",
        type: "Full Time"
    },
    {
        title: "Front Desk Executive",
        description: "Join our team as a customer-facing executive for managing daily operations.",
        type: "Full Time"
    }
]);

// Upload State
const uploading = ref(false);
const uploadedFileName = ref("");

// File Upload Handler
const handleResumeUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
        uploading.value = true;
        uploadedFileName.value = "";

        // Simulate uploading delay
        setTimeout(() => {
            uploading.value = false;
            uploadedFileName.value = `Uploaded: ${file.name}`;

            // Hide message after 5 seconds
            setTimeout(() => {
                uploadedFileName.value = "";
            }, 5000);

        }, 1500);
    }
};
</script>
