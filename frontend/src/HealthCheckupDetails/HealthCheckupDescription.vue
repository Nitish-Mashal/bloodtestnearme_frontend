<template>
    <div>
        <div class="bold-test-color" v-if="packageData">
            <!-- heading -->
            <div class="pt-4">
                <h3>{{ packageData.name1 }} ({{ packageData.number_of_test }} Tests)</h3>
            </div>

            <!-- description -->
            <div class="pt-2" v-html="packageData.description"></div>

            <!-- Sample Type -->
            <div class="pt-2">
                <strong>Sample Type: </strong>
                <span class="text-red-600">{{ packageData.sample_type }}</span>
            </div>

            <!-- Precautionary Measures -->
            <div class="pt-4">
                <h5 class="font-semibold pb-4">Precautionary Measures:</h5>
                <div class="row">
                    <div v-for="(measure, index) in precautionaryMeasures" :key="index"
                        class="col-md-4 col-lg-3 col-sm-12 pb-3">
                        <div
                            class="card shadow border-0 rounded-4 bold-test-color p-4 text-[90%] font-regular justify-center items-center text-center">
                            <img :src="measure.image" :alt="measure.alt" class="w-16 pb-2" />
                            <div>{{ measure.text }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ✅ Booking Procedure -->
            <div class="pt-4" v-if="parsedBookingProcedure.length">
                <h5 class="font-semibold pb-4">Booking Procedure:</h5>
                <ol class="list-decimal pl-6 space-y-1">
                    <li v-for="(step, index) in parsedBookingProcedure" :key="index">
                        {{ step }}
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    packageData: { type: Object, required: true },
});

const precautionaryMeasures = [
    { image: "/watch.png", alt: "time", text: "10-12 hours fasting is required. Water is allowed." },
    { image: "/glass.png", alt: "water", text: "Keep yourself well-hydrated. Water is important." },
    { image: "/bed.png", alt: "rest", text: "Get enough rest for mind and body." },
    { image: "/gym.png", alt: "exercise", text: "Avoid heavy exercise a day before the blood test." },
];

// ✅ booking procedure parser
const parsedBookingProcedure = computed(() => {
    const raw = props.packageData?.booking_procedure;
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed.map((s) => s.trim());
    } catch {
        return raw
            .replace(/^\[|\]$/g, "")
            .split(/"\s*,\s*"/g)
            .map((s) => s.replace(/(^"|"$)/g, "").replace(/^\d+\.\s*/, "").trim())
            .filter((s) => s.length > 0);
    }
    return [];
});
</script>
