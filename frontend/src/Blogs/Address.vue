<template>
  <div class="bg-gray-100 flex justify-center items-center p-3">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
      <div
        v-for="(address, index) in addresses"
        :key="index"
        class="global-bg-color text-white rounded-2xl shadow-md p-3 flex flex-col justify-between transition-transform transform hover:scale-105"
      >
        <!-- Title -->
        <h3 class="text-lg font-semibold mb-2">
          📍 Address {{ index + 1 }}: {{ address.title }}
        </h3>

        <!-- Description -->
        <p class="text-sm text-gray-200 mb-4 leading-relaxed">
          {{ address.details }}
        </p>

        <!-- Buttons -->
        <div class="flex gap-3 mt-auto">
          <a
            :href="'tel:' + address.phone"
            class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-md flex items-center gap-2 transition"
          >
             {{ address.phone }}
          </a>
          <a
            :href="address.mapLink"
            target="_blank"
            class="bg-sky-700 hover:bg-sky-800 text-white text-sm px-3 py-2 rounded-md transition"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const addresses = [
  {
    title: "Thyrocare Begur",
    details:
      "Thyrocare Blood Test Center, Triguna Healthcare Sy No. 373/3, Site No 5, Shop No 6, 10th Cross, Classic Paradise Layout, Begur Hulimavu Road, Begur, Bangalore (Bengaluru), Karnataka 560068.",
    phone: "+919611011266",
    mapLink: "https://goo.gl/maps/example1",
  },
  {
    title: "Thyrocare Bannerghatta Road",
    details:
      "Thyrocare Blood Test Center, 12, Shop No-2, Ground Floor, Arekere Main Road, Opp to Vels Global School, IIM Post, Bannerghatta Main Road, Bangalore (Bengaluru), Karnataka 560076.",
    phone: "+919606621146",
    mapLink: "https://goo.gl/maps/example2",
  },
  {
    title: "Thyrocare HSR Layout",
    details:
      "Thyrocare Blood Test Center, 27th Main Rd, HSR Layout Sector 2, Bangalore (Bengaluru), Karnataka 560102.",
    phone: "+919600001111",
    mapLink: "https://goo.gl/maps/example3",
  },
  {
    title: "Thyrocare JP Nagar",
    details:
      "Thyrocare Blood Test Center, 3rd Phase, JP Nagar, Bangalore (Bengaluru), Karnataka 560078.",
    phone: "+919600002222",
    mapLink: "https://goo.gl/maps/example4",
  },
  {
    title: "Thyrocare Electronic City",
    details:
      "Thyrocare Blood Test Center, Near Infosys Gate 2, Electronic City, Bangalore (Bengaluru), Karnataka 560100.",
    phone: "+919600003333",
    mapLink: "https://goo.gl/maps/example5",
  },
  {
    title: "Thyrocare Whitefield",
    details:
      "Thyrocare Blood Test Center, Forum Value Mall, Whitefield, Bangalore (Bengaluru), Karnataka 560066.",
    phone: "+919600004444",
    mapLink: "https://goo.gl/maps/example6",
  },
];
</script>

<style scoped>
/* Optional: make text smoother */
p {
  text-align: justify;
}
</style>
