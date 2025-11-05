<template>
    <section class="py-4 bg-white">
        <div class="container mx-auto px-5 md:px-8">
            <!-- Title -->
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001D55] text-center mb-6">
                FAQ
            </h2>

            <!-- Accordion Section -->
            <div class="accordion" id="faqAccordion">
                <div v-for="(faq, index) in faqs" :key="index"
                    class="accordion-item border border-gray-200 overflow-hidden">
                    <h2 class="accordion-header" :id="'heading' + index">
                        <button class="accordion-button font-semibold bold-test-color"
                            :class="{ collapsed: activeIndex !== index }" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#collapse' + index" aria-expanded="activeIndex === index"
                            :aria-controls="'collapse' + index" @click="toggleAccordion(index)">
                            {{ index + 1 }}. {{ faq.question }}
                        </button>
                    </h2>

                    <div :id="'collapse' + index" class="accordion-collapse collapse"
                        :class="{ show: activeIndex === index }" :aria-labelledby="'heading' + index"
                        data-bs-parent="#faqAccordion">
                        <div class="accordion-body text-sm text-[#001D55] leading-relaxed">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Know More Button -->
            <div class="mt-3">
                <button
                    class="border-1 border-[#001D55] font-semibold text-sm text-[#001D55] px-4 py-2 rounded-full hover:bg-[#001D55] hover:text-white transition-all duration-200 flex items-center gap-1">
                    Know More FAQ
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-4 h-4 mt-[1px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FAQ",
    data() {
        return {
            activeIndex: 0,
            faqs: [
                {
                    question:
                        "Why should you choose Orange Health Labs over other pathology labs?",
                    answer:
                        "Orange Health Labs stands out as the fastest diagnostic lab in town. From rapid at-home testing to expert eMedics, we blend cutting-edge diagnostics with comfort. With lab approval, we're your trusted path to accurate results.",
                },
                {
                    question: "How does home collection within 60 minutes work?",
                    answer:
                        "We guarantee home pathology services within just 60 minutes from order placement in major cities. Our skilled eMedics arrive at your door, collect samples safely, and ensure results are delivered fast and accurately.",
                },
                {
                    question: "How are reports delivered?",
                    answer:
                        "Reports are shared via WhatsApp within 6 hours for most tests. You can also view and download them anytime from our mobile app.",
                },
                {
                    question: "What are the modes of payment available for booking?",
                    answer:
                        "We offer flexible payment options — UPI, Mastercard, Visa, Debit, and Credit cards — for your convenience.",
                },
            ],
        };
    },
    methods: {
        toggleAccordion(index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        },
    },
};
</script>
