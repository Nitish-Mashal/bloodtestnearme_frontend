<template>
  <div>
    <!-- Wrapper with responsive order -->
    <div>
      <!-- Wrapper with responsive order -->
      <div class="flex flex-col-reverse sm:flex-col">
        <!-- Hero Section -->
        <div
          class="relative bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row items-center justify-center sm:justify-end py-10 sm:py-22 md:py-[100px] px-4 sm:px-6 md:pr-10 order-2 sm:order-1"
          style="background-image: url('/Stickyimage.png')">
          <div class="absolute inset-0"></div>

          <div class="relative z-10 text-left max-w-3xl sm:mr-[150px]">
            <!-- Heading -->
            <h1 class="text-xl sm:text-2xl md:text-[30px] font-medium bold-test-color mb-4 ml-[4px] sm:ml-[2px]">
              Lab Tests at the Comfort of Your Home
            </h1>

            <!-- Buttons Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-4 justify-start">
              <button v-for="(pkg, index) in packages" :key="index"
                class="global-bg-color hover:bg-[#0056b3] text-white font-medium px-4 sm:px-6 py-2 rounded-full transition text-xs sm:text-sm">
                {{ pkg }}
              </button>
            </div>

            <!-- Subtext -->
            <p class="bold-test-color text-sm sm:text-base md:text-lg mb-4 ml-[4px] sm:ml-[2px]">
              We Bring Healthcare to Your Doorstep
            </p>

            <!-- Request Callback Button -->
            <div class="ml-[4px] sm:ml-[2px]">
              <button
                class="border-1 border-[#001D55] bold-test-color bg-white text-sm font-medium px-6 sm:px-8 py-2 rounded-full transition">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Promotions />

    <MostBookedHealthCheckups />

    <MostBookedBloodTests />

    <OurWorkFlow />

    <HealthPackageCategories />

    <Testimonial />

    <Certificates />

    <FAQ />

    <CitiesWeAreIn />
  </div>
</template>

<script>
import Promotions from "./Promotions.vue";
import MostBookedHealthCheckups from "./MostBookedHealthCheckups.vue";
import MostBookedBloodTests from "./MostBookedBloodTests.vue";
import OurWorkFlow from "./OurWorkFlow.vue";
import HealthPackageCategories from "./HealthPackageCategories.vue";
import Testimonial from "./Testimonial.vue";
import Certificates from "./Certificates.vue";
import FAQ from "./FAQ.vue";
import CitiesWeAreIn from "./CitiesWeAreIn.vue";

export default {
  name: "HeroSection",
  components: {
    Promotions,
    MostBookedHealthCheckups,
    MostBookedBloodTests,
    OurWorkFlow,
    HealthPackageCategories,
    Testimonial,
    Certificates,
    FAQ,
    CitiesWeAreIn
  },
  data() {
    return {
      packages: [
        "Popular Package",
        "Popular Package",
        "Popular Package",
        "Popular Package",
        "Popular Package",
        "Popular Package",
      ],
    };
  },
};
</script>

<style scoped>
.global-bg-color {
  background-color: #2077bf;
}
</style>
