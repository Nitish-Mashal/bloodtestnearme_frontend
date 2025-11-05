<template>
  <section class="mt-6">
    <div class="container px-2 sm:px-8">
      <div class="bg-gray-100 py-4 px-4 rounded-xl shadow-sm relative">
        <!-- ✅ Carousel -->
        <el-carousel :loop="true" :autoplay="true" :interval="3000" height="200px" indicator-position="none"
          trigger="click" arrow="always">
          <el-carousel-item v-for="(group, index) in groupedOffers" :key="index">
            <div class="flex justify-center gap-4 flex-wrap">
              <div v-for="offer in group" :key="offer.id"
                class="w-full sm:w-[48%] cursor-pointer transition-transform hover:scale-[1.02]"
                @click="openLink(offer.link)">
                <img :src="offer.image" :alt="offer.alt || 'Offer Image'" loading="lazy"
                  class="w-full h-[180px] object-cover rounded-xl shadow-md hover:opacity-90 transition" />
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";

const offers = ref([]);
const windowWidth = ref(window.innerWidth);

// ✅ Responsive grouping
const isSmallScreen = computed(() => windowWidth.value < 640);
const updateWidth = () => (windowWidth.value = window.innerWidth);
onMounted(() => window.addEventListener("resize", updateWidth));
onBeforeUnmount(() => window.removeEventListener("resize", updateWidth));

// ✅ Fetch offers
const fetchOffers = async () => {
  try {
    const res = await axios.get("/api/method/bloodtestnearme.api.offers.get_offers");
    const data = res.data?.message || res.data?.data || [];
    offers.value = Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("❌ Error fetching offers:", err);
  }
};

// ✅ Group offers
const groupedOffers = computed(() => {
  const groups = [];
  const groupSize = isSmallScreen.value ? 1 : 2;
  for (let i = 0; i < offers.value.length; i += groupSize) {
    groups.push(offers.value.slice(i, i + groupSize));
  }
  return groups;
});

// ✅ Open link
const openLink = (url) => {
  if (url) window.open(url, "_blank", "noopener,noreferrer");
};

onMounted(fetchOffers);
</script>

<style scoped>
/* ✅ Customize left/right arrows */
.el-carousel__arrow {
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
}

.el-carousel__arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.el-carousel__arrow i {
  color: white;
  font-size: 20px;
}

/* Optional: increase clickable area on small screens */
@media (max-width: 640px) {
  .el-carousel__arrow {
    width: 32px;
    height: 32px;
  }
}
</style>
