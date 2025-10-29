<template>
    <div>
        <div class="mt-4">
            <h2 class="text-lg sm:text-xl md:text-4xl font-bold bold-test-color text-center">
                Our Work Flow
            </h2>
            <div class="text-center my-8">
                <!-- smaller gap on mobile, larger gap on bigger screens -->
                <div class="flex flex-wrap justify-center gap-6 sm:gap-20">
                    <!-- Step 1 -->
                    <div class="flex flex-col items-center text-center max-w-[150px]">
                        <img src="/BookYourLabTestOnline.png" alt="Book Your Lab Tests Online"
                            class="w-24 h-24 rounded-full object-cover shadow-md" />
                        <p class="mt-3 font-semibold bold-test-color">
                            Book Your Lab<br />Tests Online
                        </p>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex flex-col items-center text-center max-w-[150px]">
                        <img src="/GetHomeSampleCollection.png" alt="Get Home Sample Collection"
                            class="w-24 h-24 rounded-full object-cover shadow-md" />
                        <p class="mt-3 font-semibold bold-test-color">
                            Get Home Sample<br />Collection
                        </p>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex flex-col items-center text-center max-w-[150px]">
                        <img src="/SampleProcess.png" alt="Samples Process in Lab"
                            class="w-24 h-24 rounded-full object-cover shadow-md" />
                        <p class="mt-3 font-semibold bold-test-color">
                            Samples Process in<br />Thyrocare Pathology Lab
                        </p>
                    </div>

                    <!-- Step 4 -->
                    <div class="flex flex-col items-center text-center max-w-[150px]">
                        <img src="/GetyourReportsOnline.png" alt="Get your Reports Online"
                            class="w-24 h-24 rounded-full object-cover shadow-md" />
                        <p class="mt-3 font-semibold bold-test-color">
                            Get your Reports<br />Online
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OurWorkFlow",
};
</script>
