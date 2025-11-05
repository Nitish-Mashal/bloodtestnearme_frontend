<template>
    <div>
        <div class="container">
            <div v-if="!isLoading && packageData" class="px-5 py-4 row">
                <!-- Accordion Section -->
                <div class="col-12 col-md-8 mb-2">
                    <h5 class="font-bold bold-test-color pb-2">List Of Tests Included:</h5>

                    <div class="accordion" id="accordionExample">
                        <div v-for="(item, index) in listInclude" :key="item.heading || index"
                            class="accordion-item border border-gray-200 overflow-hidden">
                            <h2 class="accordion-header" :id="`heading${index}`">
                                <button class="accordion-button font-semibold bold-test-color text-sm" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`"
                                    :aria-expanded="index === 0" :aria-controls="`collapse${index}`"
                                    :class="{ collapsed: index !== 0 }">
                                    {{ item.heading }}
                                </button>
                            </h2>

                            <div :id="`collapse${index}`" class="accordion-collapse collapse"
                                :class="{ show: index === 0 }" :aria-labelledby="`heading${index}`"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-sm bold-test-color">
                                    <ul v-if="item.values?.length" class="list-disc pl-5">
                                        <li v-for="(test, i) in item.values" :key="`${index}-${i}`">
                                            {{ test }}
                                        </li>
                                    </ul>
                                    <p v-else class="text-gray-500 italic">
                                        No tests available for this section.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Price Card -->
                <div class="col-12 col-md-4">
                    <div class="card p-3">
                        <div class="card-title bold-test-color font-semibold text-2xl pb-3">
                            {{ packageData.name1 }} ({{ packageData.number_of_test }} Tests)
                        </div>

                        <div class="flex justify-between font-semibold pb-2 text-lg">
                            <span>Package Price:</span>
                            <span class="text-red-600 line-through">₹ {{ packageData.actual_price }}</span>
                        </div>

                        <div class="flex justify-between font-semibold pb-2 text-lg">
                            <span>Offer Price:</span>
                            <span>₹ {{ packageData.discounted_price }}</span>
                        </div>

                        <div class="flex justify-between font-bold pb-4 text-xl">
                            <span>Amount to be paid:</span>
                            <span class="text-green-600">₹ {{ packageData.discounted_price }}</span>
                        </div>

                        <!-- Buttons -->
                        <div class="flex flex-col sm:flex-row justify-center mb-4 gap-4">
                            <router-link v-if="packageData?.url"
                                :to="{ name: 'SinglePackageBook', params: { slug: packageData.url } }"
                                class="w-full sm:w-auto no-underline">
                                <button
                                    class="global-bg-color text-white text-sm px-3 py-2 rounded-full transition w-full sm:w-auto">
                                    Book Now
                                </button>
                            </router-link>

                            <button :disabled="isInCart(packageData)" @click="toggleCart(packageData)"
                                class="relative border border-[#001D55] text-sm bold-test-color px-3 py-2 rounded-full flex items-center justify-center gap-1 transition"
                                :class="{
                                    'bg-gray-200 cursor-not-allowed': isInCart(packageData),
                                    'hover:bg-gray-100': !isInCart(packageData),
                                }">
                                <span>{{ isInCart(packageData) ? "Added" : "Add to Cart" }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 
                    1.087.835l.383 1.437M7.5 
                    14.25a3 3 0 0 0-3 
                    3h15.75m-12.75-3h11.218
                    c1.121-2.3 2.1-4.684 
                    2.924-7.138a60.114 
                    60.114 0 0 0-16.536-1.84M7.5 
                    14.25 5.106 5.272M6 20.25a.75.75 
                    0 1 1-1.5 0 .75.75 0 0 1 
                    1.5 0Zm12.75 0a.75.75 0 1 
                    1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <HealthCheckupDescription :packageData="packageData" />
            </div>

            <!-- Loader -->
            <div v-else-if="isLoading" class="flex justify-center items-center h-60">
                <div class="flex flex-col items-center">
                    <svg class="animate-spin h-8 w-8 text-[#001D55]" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    <p class="text-[#001D55] mt-3 font-semibold">
                        Loading package details...
                    </p>
                </div>
            </div>
        </div>

        <MostBookedHealthCheckups />
    </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/cartStore";
import HealthCheckupDescription from "../HealthCheckupDetails/HealthCheckupDescription.vue";
import MostBookedHealthCheckups from "../Home/MostBookedHealthCheckups.vue";

const route = useRoute();
const cartStore = useCartStore();

const isLoading = ref(true);
const packageData = ref(null);
const listInclude = ref([]);
const totalAmount = ref(0);
const homeCollectionCharge = ref(0);

const isInCart = (pkg) => cartStore.cartItems.some((i) => i.name1 === pkg.name1);

const toggleCart = (pkg) => {
    if (isInCart(pkg)) cartStore.removeFromCart(pkg.name1);
    else cartStore.addToCart(pkg);
};

const fetchPackageDetails = async () => {
    isLoading.value = true;
    try {
        const packageUrl = route.params.url || route.params.slug || route.params.id;
        if (!packageUrl) {
            console.warn("❗ Missing package URL in route.");
            return;
        }

        const { data } = await axios.get(
            "/api/method/bloodtestnearme.api.packages.get_packages",
            { params: { url: decodeURIComponent(packageUrl) } }
        );

        const msg = data?.message;
        const pkg = Array.isArray(msg?.data) ? msg.data[0] : msg?.data || msg;

        if (pkg) {
            packageData.value = pkg;
            totalAmount.value =
                parseFloat(pkg.discounted_price || 0) + homeCollectionCharge.value;

            try {
                listInclude.value = pkg.list_include
                    ? JSON.parse(pkg.list_include)
                    : [];
            } catch {
                console.error("❌ Error parsing list_include.");
                listInclude.value = [];
            }

            await nextTick();
            updatePageSEO(pkg);
        } else {
            console.warn("⚠️ No data found for:", packageUrl);
        }
    } catch (error) {
        console.error("❌ Error fetching package details:", error);
    } finally {
        isLoading.value = false;
    }
};

const updatePageSEO = (data) => {
    // 🔹 Build title
    const title =
        data.meta_title ||
        data.title ||
        `${data.package_name || "Health Checkup"} | Blood Test Near Me`;

    // ✅ Update browser tab title
    document.title = title;

    // ✅ Basic Meta Tags
    updateMeta("description", data.meta_description || data.short_description);
    updateMeta("keywords", data.meta_keyword);

    // ✅ Open Graph (for social sharing)
    updateMeta("og:title", title, "property");
    updateMeta("og:description", data.meta_description || data.short_description, "property");
    updateMeta("og:type", "website", "property");

    // ✅ Twitter Cards (optional but good for SEO)
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", data.meta_description || data.short_description);

    // ✅ Dynamically Insert Header Tag (if provided)
    if (data.header_tag) {
        let existingHeader = document.querySelector("h1[data-dynamic-header]");
        if (existingHeader) {
            existingHeader.textContent = data.header_tag;
        } else {
            const header = document.createElement("h1");
            header.textContent = data.header_tag;
            header.setAttribute("data-dynamic-header", "true");
            header.style.display = "none"; // hidden from layout, used for SEO bots
            document.body.prepend(header);
        }
    }
};

/**
 * ✅ Helper to Create or Update <meta> Tags
 * @param {string} key - meta name or property
 * @param {string} content - meta content value
 * @param {string} attr - 'name' or 'property'
 */
const updateMeta = (key, content, attr = "name") => {
    if (!content) return;
    let meta = document.querySelector(`meta[${attr}='${key}']`);
    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
};


onMounted(fetchPackageDetails);
watch(() => route.params.url, fetchPackageDetails);
</script>