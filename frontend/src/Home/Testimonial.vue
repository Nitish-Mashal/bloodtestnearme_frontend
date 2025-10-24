<template>
    <div>
        <div class="container mx-auto py-1">
            <!-- Header -->
            <div
                class="flex flex-col sm:flex-row items-center justify-between w-full px-2 sm:px-6 pt-4 sm:pt-6 gap-2 sm:gap-0">
                <h2 class="text-lg sm:text-xl md:text-4xl font-bold bold-test-color text-center flex-1">
                    Testimonials
                </h2>

                <a href="#"
                    class="text-sm bold-test-color font-medium flex items-center gap-1 hover:underline mt-2 sm:mt-0 whitespace-nowrap">
                    <span>View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-3 h-3 mt-[1px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
            </div>

            <!-- Testimonial Section -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-3">
                <!-- Element Plus Carousel -->
                <div class="lg:col-span-2">
                    <el-carousel :interval="4000" arrow="always" indicator-position="none" height="280px">
                        <el-carousel-item v-for="(pair, index) in chunkedTestimonials" :key="index">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                                <div v-for="(testimonial, i) in pair" :key="i"
                                    class="bg-gray-100 px-6 py-2 rounded-xl shadow-sm flex flex-col justify-between h-full">
                                    <div class="flex items-center gap-4">
                                        <img :src="testimonial.image" alt="User"
                                            class="w-14 h-14 rounded-full object-cover" />

                                        <span class="ml-auto text-4xl text-blue-900">&rdquo;</span>
                                    </div>

                                    <div class="mt-2 flex-1">
                                        <div class="pb-3">
                                            <p class="font-semibold text-blue-900">
                                                {{ testimonial.name }}
                                            </p>
                                            <p class="text-sm text-blue-500">{{ testimonial.role }}</p>
                                        </div>

                                        <p class="font-semibold text-blue-900">
                                            {{ testimonial.highlight }}
                                        </p>
                                        <p class="text-gray-600 text-sm mt-2">
                                            {{ testimonial.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <!-- Fixed Rating Card -->
                <div class="bg-gray-100 p-6 rounded-xl shadow-sm flex flex-col items-center justify-center">
                    <div class="text-left w-full max-w-sm">
                        <p class="text-[45px] font-bold text-blue-900">
                            4.9
                            <span class="text-yellow-400 text-2xl align-middle ml-1">★★★★★</span>
                        </p>
                        <p class=" text-blue-900 font-semibold">
                            Top-Rated Online Pathology Service
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div class="w-full bg-gray-100 flex justify-center items-center mt-4">
            <div class="global-bg-color text-white p-6 rounded-3xl text-left flex justify-between items-center gap-10">
                <div class="">
                    <div class="text-[30px]">
                        Can't find what you're looking for?
                    </div>
                    <p class="bold-test-color text-2xl">We are here to help. Say 'Hi' on WhatsApp</p>
                </div>
                <div>
                    <img src="/whatsapp.png" alt="whatsappLogo" class="h-20" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestimonialsSection",
    data() {
        return {
            testimonials: [
                {
                    name: "Amber Morales",
                    role: "Product Designer",
                    image: "/TestimonialImg.png",
                    highlight:
                        "Duis aute irure dolor in reprehe velit esse cillum dolo culpa officia.",
                    description:
                        "Duis aute irure dolor in reprehenderit in velit esse cillum dolore fugiat culpa officia deserunt mollit est laborum.",
                },
                {
                    name: "John Doe",
                    role: "UI Engineer",
                    image: "/TestimonialImg.png",
                    highlight:
                        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",
                    description:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
                },
                {
                    name: "Sarah Lee",
                    role: "Frontend Developer",
                    image: "/TestimonialImg.png",
                    highlight:
                        "Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
                    description:
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                },
                {
                    name: "David Smith",
                    role: "Project Manager",
                    image: "/TestimonialImg.png",
                    highlight:
                        "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
                    description:
                        "Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam.",
                },
                {
                    name: "Jane Cooper",
                    role: "QA Engineer",
                    image: "/TestimonialImg.png",
                    highlight:
                        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
                    description:
                        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.",
                },
                {
                    name: "Michael Brown",
                    role: "Marketing Lead",
                    image: "/TestimonialImg.png",
                    highlight:
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
                    description:
                        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.",
                },
            ],
        };
    },
    computed: {
        // Groups testimonials in pairs of 2
        chunkedTestimonials() {
            const chunks = [];
            for (let i = 0; i < this.testimonials.length; i += 2) {
                chunks.push(this.testimonials.slice(i, i + 2));
            }
            return chunks;
        },
    },
};
</script>

<style scoped>
.el-carousel__arrow {
    background-color: #1e3a8a !important;
    /* blue-900 */
    color: white !important;
    border-radius: 50%;
}

.el-carousel__arrow:hover {
    background-color: #1d4ed8 !important;
    /* blue-700 */
}

.bg-gray-100 {
    min-height: 260px;
    /* ✅ ensures same height for all testimonial cards */
}
</style>
