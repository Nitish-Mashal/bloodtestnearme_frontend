<template>
    <div>
        <div class="mt-4">
            <h2 class="text-lg sm:text-xl md:text-4xl font-bold bold-test-color text-center">
                Certificates
            </h2>

            <div class="text-center my-8">
                <div class="flex flex-wrap justify-center gap-12">
                    <!-- Loop through certifications -->
                    <div v-for="(item, index) in certifications" :key="index"
                        class="flex flex-col items-center text-center max-w-[150px]">
                        <img :src="item.image" :alt="item.title"
                            class="w-[80%] h-30 rounded-full object-cover shadow-md" />
                        <p class="mt-3 font-semibold bold-test-color">
                            {{ item.title }}
                        </p>
                    </div>

                    <!-- Show a message if no data -->
                    <p v-if="!loading && certifications.length === 0" class="text-gray-500">
                        No certifications found.
                    </p>

                    <!-- Loader -->
                    <div v-if="loading" class="text-gray-600">Loading certifications...</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "OurWorkFlow",
    data() {
        return {
            certifications: [],
            loading: false,
        };
    },
    mounted() {
        this.fetchCertifications();
    },
    methods: {
        async fetchCertifications() {
            this.loading = true;
            try {
                const response = await axios.get(
                    "/api/method/bloodtestnearme.api.certifications.get_certifications"
                );

                if (response.data.message?.status === "success") {
                    this.certifications = response.data.message.data.map((item) => ({
                        title: item.title,
                        image: item.image.startsWith("/files")
                            ? item.image
                            : `/files/${item.image}`,
                    }));
                } else {
                    console.error("API Error:", response.data);
                }
            } catch (error) {
                console.error("Error fetching certifications:", error);
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped></style>
