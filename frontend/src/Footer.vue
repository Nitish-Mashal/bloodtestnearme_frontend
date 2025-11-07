<template>
    <div>
        <div class="global-bg-color px-5 py-4 mt-4">
            <div class="container px-5">
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


                <!-- Footer Links -->
                <div class="row">
                    <div class="col-md-4">
                        <div class="font-bold text-white text-3xl text-left">
                            Quick Links
                        </div>
                        <ul class="text-white mt-4 space-y-2 text-sm text-left pl-0 list-none pb-4">
                            <li><router-link to="/about" class="text-white no-underline hover:underline">About
                                    Us</router-link></li>
                            <li><router-link to="/blogspreview"
                                    class="text-white no-underline hover:underline">Blogs</router-link></li>
                            <li><router-link to="/team"
                                    class="text-white no-underline hover:underline">Team</router-link></li>
                            <li><router-link to="/privacy-policy"
                                    class="text-white no-underline hover:underline">Privacy Policy</router-link></li>
                            <li><router-link to="/terms-conditions"
                                    class="text-white no-underline hover:underline">Terms & Conditions</router-link>
                            </li>
                            <li><router-link to="/careers"
                                    class="text-white no-underline hover:underline">Careers</router-link></li>
                            <li><router-link to="/upcoming-services"
                                    class="text-white no-underline hover:underline">Upcoming Services</router-link></li>
                            <li><router-link to="/add-diagnostic-center"
                                    class="text-white no-underline hover:underline">Add Your Diagnostic
                                    Center</router-link></li>
                            <li><router-link to="/labs-near-me" class="text-white no-underline hover:underline">Labs
                                    Near Me</router-link></li>
                        </ul>
                        <div>
                            <p class="text-white no-underline hover:underline text-sm">© 2026
                                Copyright: Triguna Healthcare</p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="font-bold text-white text-3xl text-left">
                            Most Popular Packages
                        </div>
                        <ul class="text-white mt-4 space-y-2 text-sm text-left pl-0 list-none pb-4">
                            <li><router-link to="/about" class="text-white no-underline hover:underline">Women's Health
                                    Checkup (99 Tests)</router-link></li>
                            <li><router-link to="/blogs" class="text-white no-underline hover:underline">Male Advanced
                                    Health Checkup (105 Tests)</router-link></li>
                            <li><router-link to="/team" class="text-white no-underline hover:underline">Basic Health
                                    Checkup (94 Tests)</router-link></li>
                            <li><router-link to="/privacy-policy" class="text-white no-underline hover:underline">Master
                                    Health Checkup (98 Tests)</router-link></li>
                            <li><router-link to="/terms-conditions"
                                    class="text-white no-underline hover:underline">Diabetic Advanced Health Checkup
                                    (135 Tests)</router-link></li>
                            <li><router-link to="/careers" class="text-white no-underline hover:underline">Female
                                    Advanced Health Checkup (112 Tests)</router-link></li>
                            <li><router-link to="/upcoming-services"
                                    class="text-white no-underline hover:underline">Women's Health Checkup (99
                                    Tests)</router-link></li>
                            <li><router-link to="/add-diagnostic-center"
                                    class="text-white no-underline hover:underline">Male Advanced Health Checkup (105
                                    Tests)</router-link></li>
                            <li><router-link to="/labs-near-me" class="text-white no-underline hover:underline">Basic
                                    Health Checkup (94 Tests)</router-link></li>
                        </ul>
                        <div>
                            <a href="https://quantumberg.com/" target="_blank"
                                class="text-white no-underline hover:underline text-sm">
                                <p>Powered by: Quantumberg
                                    Technologies Pvt Ltd</p>
                            </a>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <ul class="text-white mt-4 space-y-2 text-sm text-left pl-0 list-none">
                            <li><router-link to="/about" class="text-white no-underline hover:underline">Master Health
                                    Checkup (98 Tests)</router-link></li>
                            <li><router-link to="/blogs" class="text-white no-underline hover:underline">Diabetic
                                    Advanced Health Checkup (135 Tests)</router-link></li>
                            <li><router-link to="/team" class="text-white no-underline hover:underline">Female Advanced
                                    Health Checkup (112 Tests)</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
/* Optional: Hover effect for social media icons */
a:hover i {
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out;
}
</style>
