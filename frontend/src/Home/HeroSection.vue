<template>
  <div>

    <!-- Promotions for MOBILE ONLY -->
    <div class="block sm:hidden">
      <Suspense>
        <PromoMobile />
      </Suspense>
    </div>

    <!-- Hero Section -->
    <section
      class="relative bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row items-center justify-center sm:justify-end py-10 sm:py-22 md:py-[100px] px-4 sm:px-6 md:pr-10"
      style="background-image: url('/files/Stickyimage.jpg')">
      <div class="absolute inset-0 bg-black/10"></div>

      <div class="relative z-10 text-left max-w-3xl sm:mr-[150px]">
        <h1 class="text-xl sm:text-2xl md:text-[30px] font-medium bold-test-color mb-4 ml-[4px] sm:ml-[2px]">
          Lab Tests at the Comfort of Your Home
        </h1>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-4 justify-start">
          <button v-for="pkg in packages" :key="pkg"
            class="global-bg-color text-white font-medium px-4 sm:px-6 py-2 rounded-full transition text-xs sm:text-sm">
            {{ pkg }}
          </button>
        </div>

        <p class="bold-test-color text-sm sm:text-base md:text-lg mb-4 ml-[4px] sm:ml-[2px] font-bold">
          We Bring Healthcare to Your Doorstep
        </p>

        <router-link to="/contact-us">
          <button
            class="border-1 border-[#001D55] bold-test-color bg-white text-sm font-medium px-6 sm:px-8 py-2 rounded-full transition ml-[4px] sm:ml-[2px]">
            Request Callback
          </button>
        </router-link>
      </div>
    </section>

    <!-- Lazy Load Remaining Sections -->
    <Suspense>
      <LazySections />
    </Suspense>
  </div>
</template>

<script>
import LazySections from "./LazySections.vue";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    LazySections,
    PromoMobile: defineAsyncComponent(() => import("./Promotions.vue")),
  },
  data() {
    return {
      packages: [
        "Full Body Checkup",
        "Thyroid Test",
        "Diabetes Test",
        "Vitamin Test",
        "Liver Test",
        "Kidney Test",
      ],
    };
  }
};
</script>
