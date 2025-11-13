<template>
    <div>
        <div class="global-bg-color px-4 py-4 mt-4">
            <div class="container">
                <!-- Social Media Logo -->
                <div class="d-flex justify-content-start gap-4 mb-4">
                    <!-- Facebook -->
                    <a href="https://www.facebook.com" target="_blank" class="text-decoration-none text-white fs-6">
                        <i class="bi bi-facebook"></i>
                    </a>

                    <!-- X (Twitter) -->
                    <a href="https://twitter.com" target="_blank" class="text-decoration-none text-white fs-6">
                        <i class="bi bi-twitter"></i>
                    </a>

                    <!-- Instagram -->
                    <a href="https://www.instagram.com" target="_blank" class="text-decoration-none text-white fs-6">
                        <i class="bi bi-instagram"></i>
                    </a>

                    <!-- LinkedIn -->
                    <a href="https://www.linkedin.com" target="_blank" class="text-decoration-none text-white fs-6">
                        <i class="bi bi-linkedin"></i>
                    </a>

                    <!-- YouTube -->
                    <a href="https://www.youtube.com" target="_blank" class="text-decoration-none text-white fs-6">
                        <i class="bi bi-youtube"></i>
                    </a>

                    <!-- Medium -->
                    <a href="https://medium.com" target="_blank" class="text-decoration-none text-white fs-6">
                        <i class="bi bi-medium"></i>
                    </a>
                </div>

                <!-- Most Popular Packages -->
                <div :class="[
                    'transition-all',
                    otherPackages.length > 0 ? 'mb-2' : 'mb-6',
                    isSmallScreen ? 'mb-2' : ''
                ]">
                    <h2 class="font-bold text-lg sm:text-xl mb-2 sm:mb-3 ml-8">
                        Most Popular Packages
                    </h2>
                    <ul class="space-y-2 text-sm">
                        <li v-for="(pkg, index) in popularPackages" :key="'p' + index">
                            <router-link :to="{ name: 'SinglePackageBook', params: { slug: pkg.url } }"
                                class="text-white no-underline hover:underline cursor-pointer">
                                {{ pkg.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Other Packages -->
                <div v-if="otherPackages.length > 0">
                    <h2 class="font-bold text-lg sm:text-xl mb-2 sm:mb-3 ml-4 sm:ml-8">
                        Other Packages
                    </h2>
                    <ul class="space-y-2 text-sm ml-4 sm:ml-8">
                        <li v-for="(pkg, index) in otherPackages" :key="'o' + index">
                            <router-link :to="{ name: 'SinglePackageBook', params: { slug: pkg.url } }"
                                class="text-white no-underline hover:underline cursor-pointer">
                                {{ pkg.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- ✅ Footer Bottom -->
            <div :class="[
                'flex flex-col md:flex-row items-start md:items-center text-sm gap-4 sm:gap-20 ml-4 sm:ml-8',
                isSmallScreen ? 'mt-3' : otherPackages.length > 0 ? 'mt-3' : 'mt-6'
            ]">
                <div class="text-white">
                    © 2026 Triguna Healthcare. All Rights Reserved.
                </div>
                <a href="https://quantumberg.com/" target="_blank" rel="noopener noreferrer"
                    class="text-white no-underline hover:underline">
                    <strong>Powered by</strong> Quantumberg Technologies Pvt. Ltd.
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

/* ✅ Static Social & Quick Links */
const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com", icon: "bi bi-facebook" },
    { name: "Twitter", url: "https://twitter.com", icon: "bi bi-twitter" },
    { name: "Instagram", url: "https://www.instagram.com", icon: "bi bi-instagram" },
    { name: "LinkedIn", url: "https://www.linkedin.com", icon: "bi bi-linkedin" },
    { name: "YouTube", url: "https://www.youtube.com", icon: "bi bi-youtube" },
    { name: "Medium", url: "https://medium.com", icon: "bi bi-medium" },
];

const quickLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Blogs", path: "/blogspreview" },
    { name: "Team", path: "/team" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-Conditions" },
    { name: "Careers", path: "/careers" },
    { name: "Upcoming Services", path: "/upcoming-services" },
    { name: "Add Diagnostic Center", path: "/add-diagnostic-center" },
    { name: "Labs Near Me", path: "/labs-near-me" },
];

/* ✅ Reactive Variables */
const popularPackages = ref([]);
const otherPackages = ref([]);
const isSmallScreen = ref(false);

/* ✅ Fetch Data from API */
const fetchPackages = async () => {
    try {
        const response = await axios.get(
            "/api/method/bloodtestnearme.api.packages.get_most_booking_packages"
        );
        const data = response.data?.message || [];

        // include both name and url for routing
        const packages = data.map((pkg) => ({
            name: pkg.name,
            url: pkg.url || pkg.name.toLowerCase().replace(/\s+/g, "-"),
        }));

        popularPackages.value = packages.slice(0, 10);
        otherPackages.value = packages.slice(10, 20);
    } catch (error) {
        console.error("❌ Error fetching packages:", error);
    }
};

/* ✅ Detect Screen Size */
onMounted(() => {
    const handleResize = () => {
        isSmallScreen.value = window.innerWidth < 640;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    fetchPackages();
});
</script>

<style scoped>
a:hover i {
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out;
}
</style>
