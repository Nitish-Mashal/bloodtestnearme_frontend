<template>
    <div>
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
import { defineAsyncComponent } from "vue";

export default {
    components: {
        Promotions: defineAsyncComponent(() => import("./Promotions.vue")),
        MostBookedHealthCheckups: defineAsyncComponent(() =>
            import("./MostBookedHealthCheckups.vue")
        ),
        MostBookedBloodTests: defineAsyncComponent(() =>
            import("./MostBookedBloodTests.vue")
        ),
        OurWorkFlow: defineAsyncComponent(() => import("./OurWorkFlow.vue")),
        HealthPackageCategories: defineAsyncComponent(() =>
            import("./HealthPackageCategories.vue")
        ),
        Testimonial: defineAsyncComponent(() => import("./Testimonial.vue")),
        Certificates: defineAsyncComponent(() => import("./Certificates.vue")),
        FAQ: defineAsyncComponent(() => import("./FAQ.vue")),
        CitiesWeAreIn: defineAsyncComponent(() =>
            import("./CitiesWeAreIn.vue")
        ),
    },
};
</script>
