<template>
    <div class="container">
        <div class="container">
            <h2 class="text-lg sm:text-xl md:text-4xl font-bold bold-test-color text-center">
                FAQ
            </h2>
            <div class="px-5">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button font-semibold bold-test-color" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne">
                                1. Why should you choose Orange Health Labs over other pathology labs?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body bold-test-color text-sm">
                                Orange Health Labs stands out as the fastest diagnostic lab in town. From rapid at-home
                                testing to expert eMedics, we blend cutting-edge diagnostics with comfort. With lab
                                approval, we're your trusted path to accurate results. Experience health on your terms!
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed font-semibold bold-test-color" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                2. How does home collection within 60 minutes work?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body bold-test-color text-sm">
                                We guarantee home pathology services within just 60 minutes from order placement in
                                Bangalore, Delhi, Gurugram, Noida, Hyderabad, Faridabad, and Mumbai. Our skilled,
                                vaccinated eMedics, following your chosen schedule, will arrive at your door. Your
                                sample will be carefully handled, maintained at the right temperature, and transported
                                to our lab with accreditation. And rest assured, the results will reach you with even
                                greater speed!
                            </div>
                        </div>
                    </div>
                    <!-- Accordion Item 1 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed font-semibold bold-test-color" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                                3. How are reports delivered?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body bold-test-color text-sm">
                                You will receive your reports via WhatsApp within 6 hours for most tests with our
                                diagnostic laboratory. Additionally, you can access and view the reports on our app at
                                any
                                time.
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 2 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed font-semibold bold-test-color" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                aria-controls="collapseFour">
                                4. What are the modes of payment available for booking?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body bold-test-color text-sm">
                                We offer a range of convenient payment options for our home pathology services. These
                                include UPI, Mastercard, Visa card, Debit cards, and Credit card options. The choice is
                                yours!
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Know more FAQ button -->
                <div
                    class="flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-2 sm:gap-0 mt-4">
                    <button
                        class="border-1 border-[#001D55] font-semibold text-sm bold-test-color px-3 py-1.5 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-1 w-full sm:w-auto">
                        Know More FAQ
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-3 h-3 mt-[1px]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "FAQ",

}
</script>

<style scoped></style>