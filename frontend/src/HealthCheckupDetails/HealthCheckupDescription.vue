<template>
    <div v-if="packageData" class="bold-test-color">
        <!-- Heading -->
        <div class="pt-4">
            <h3>
                {{ packageData.name1 }} ({{ packageData.number_of_test }} Tests)
            </h3>
        </div>

        <!-- Description -->
        <div class="pt-2" v-html="packageData.description"></div>

        <!-- Sample Type -->
        <div class="pt-2">
            <strong>Sample Type: </strong>
            <span class="text-red-600">{{ packageData.sample_type }}</span>
        </div>

        <!-- Precautionary Measures -->
        <section class="pt-4">
            <h5 class="font-semibold pb-4">Precautionary Measures:</h5>
            <div class="row">
                <div v-for="measure in precautionaryMeasures" :key="measure.alt"
                    class="col-md-4 col-lg-3 col-sm-12 pb-3">
                    <div
                        class="card shadow border-0 rounded-4 bold-test-color p-4 text-[90%] font-regular text-center flex flex-col items-center justify-center">
                        <img :src="measure.image" :alt="measure.alt" loading="lazy" decoding="async"
                            class="w-16 pb-2" />
                        <div>{{ measure.text }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Booking Procedure -->
        <section v-if="parsedBookingProcedure.length" class="pt-4">
            <h5 class="font-semibold pb-4">Booking Procedure:</h5>
            <ol class="list-decimal pl-6 space-y-1">
                <li v-for="(step, index) in parsedBookingProcedure" :key="index">
                    {{ step }}
                </li>
            </ol>
        </section>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    packageData: { type: Object, required: true },
});

// ✅ Static data moved outside component logic (no reallocation on re-render)
const precautionaryMeasures = Object.freeze([
    {
        image: "/files/watch.png",
        alt: "time",
        text: "10-12 hours fasting is required. Water is allowed.",
    },
    {
        image: "/files/glass.png",
        alt: "water",
        text: "Keep yourself well-hydrated. Water is important.",
    },
    {
        image: "/files/bed.png",
        alt: "rest",
        text: "Get enough rest for mind and body.",
    },
    {
        image: "/files/gym.png",
        alt: "exercise",
        text: "Avoid heavy exercise a day before the blood test.",
    },
]);

// ✅ Efficient booking_procedure parsing
const parsedBookingProcedure = computed(() => {
    const raw = props.packageData?.booking_procedure;
    if (!raw) return [];

    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed)
            ? parsed.map((s) => s.trim()).filter(Boolean)
            : [];
    } catch {
        return raw
            .replace(/[\[\]"]/g, "") // remove brackets & quotes
            .split(",")
            .map((s) => s.replace(/^\d+\.\s*/, "").trim())
            .filter(Boolean);
    }
});
</script>
