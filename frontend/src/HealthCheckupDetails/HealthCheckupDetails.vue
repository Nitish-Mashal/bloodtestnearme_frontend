<template>
    <div>
        <div class="container">
            <div class="px-5 py-4 row">
                <div class="col-12 col-md-8 col-sm-12 mb-2">
                    <h5 class=" font-bold bold-test-color pb-2">List Of Test Included:</h5>

                    <!-- Accordian -->
                    <div class="">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button font-semibold bold-test-color text-sm" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        Thyroid Profile (3)
                                    </button>
                                </h2>

                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body text-sm">
                                        <ul class="list-disc pl-5 bold-test-color">
                                            <li>Total Triiodothyronine (T3)</li>
                                            <li>Total Thyroxine (T4)</li>
                                            <li>Ultrasensitive TSH (UTSH)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed font-semibold bold-test-color"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        Lipid Profile (10)
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body bold-test-color text-sm">
                                    </div>
                                </div>
                            </div>
                            <!-- Accordion Item 1 -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed font-semibold bold-test-color"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree">
                                        Liver Function Test (12)
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body bold-test-color text-sm">
                                    </div>
                                </div>
                            </div>

                            <!-- Accordion Item 2 -->
                            <div class="accordion-item text-sm">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed font-semibold bold-test-color"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour">
                                        Kidney Function Test (8)
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body bold-test-color text-sm">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Price Card -->
                <div class="col-12 col-md-4">
                    <div class="card p-3">
                        <div class="card-title bold-test-color font-semibold text-3xl pb-3">
                            Basic Health Checkup (94 Tests)
                        </div>

                        <!-- Prices -->
                        <div class="flex bold-test-color justify-between font-semibold pb-2 text-xl">
                            <div>Package Price:</div>
                            <div
                                class="text-red-600 font-semibold flex items-center text-md line-through decoration-red-600">
                                <span class="mr-1">₹</span>1949
                            </div>
                        </div>

                        <div class="flex bold-test-color justify-between font-semibold pb-2 text-xl">
                            <div>Offer Price:</div>
                            <div class="font-semibold flex items-center text-md">
                                <span class="mr-1">₹</span>1299
                            </div>
                        </div>

                        <div class="flex bold-test-color justify-between font-bold pb-4 text-2xl">
                            <div>Amount to be paid:</div>
                            <div class="font-semibold text-green-600 text-md">
                                <span class="mr-1">₹</span>1299
                            </div>
                        </div>

                        <!-- Buttons -->
                        <div
                            class="flex flex-col sm:flex-row justify-center mb-4 space-y-2 gap-20 sm:space-y-0 sm:gap-6">
                            <button
                                class="global-bg-color text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition whitespace-nowrap sm:w-auto w-full">
                                Book Now
                            </button>

                            <button
                                class="border border-[#001D55] font-semibold text-sm bold-test-color px-3 py-1.5 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-1 whitespace-nowrap sm:w-auto w-full">
                                <span>Add to Cart</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <HealthCheckupDescription />


            </div>
        </div>
        <MostBookedHealthCheckups />
    </div>
</template>

<script>
import HealthCheckupDescription from "../HealthCheckupDetails/HealthCheckupDescription.vue";
import MostBookedHealthCheckups from "../Home/MostBookedHealthCheckups.vue";
export default {
    name: "HealthCheckupDetails",
    components: {
        HealthCheckupDescription,
        MostBookedHealthCheckups,
    },

}
</script>

<style scoped></style>