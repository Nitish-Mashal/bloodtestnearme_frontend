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
                <!-- Carousel -->
                <div class="lg:col-span-2">
                    <el-carousel :interval="4000" arrow="always" indicator-position="none" height="300px">
                        <!-- Mobile: show 1 testimonial per slide -->
                        <template v-if="isMobile">
                            <el-carousel-item v-for="(testimonial, index) in testimonials" :key="'mobile-' + index"
                                class="h-full">
                                <div
                                    class="bg-gray-100 px-5 py-4 rounded-xl shadow-sm flex flex-col justify-between h-full overflow-hidden min-h-[260px]">
                                    <div class="flex items-center justify-between gap-3">
                                        <img :src="testimonial.image" alt="User"
                                            class="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                                        <span class="text-[50px] text-blue-900 leading-none">&rdquo;</span>
                                    </div>

                                    <div class="mt-3 flex-1 overflow-hidden">
                                        <div class="">
                                            <p class="font-semibold text-blue-900 truncate">
                                                {{ testimonial.name }}
                                            </p>
                                            <p class="text-sm text-blue-500">{{ testimonial.role }}</p>
                                        </div>

                                        <p class="font-semibold text-blue-900 text-sm sm:text-base leading-snug">
                                            {{ testimonial.highlight }}
                                        </p>
                                        <p
                                            class="text-gray-600 text-xs sm:text-sm overflow-hidden text-ellipsis line-clamp-3">
                                            {{ testimonial.description }}
                                        </p>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </template>

                        <!-- Desktop: show 2 testimonials per slide -->
                        <template v-else>
                            <el-carousel-item v-for="(pair, index) in chunkedTestimonials" :key="'desktop-' + index"
                                class="h-full">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                                    <div v-for="(testimonial, i) in pair" :key="i"
                                        class="bg-gray-100 px-5 py-4 rounded-xl shadow-sm flex flex-col justify-between h-full overflow-hidden min-h-[260px]">
                                        <div class="flex items-center justify-between gap-3">
                                            <img :src="testimonial.image" alt="User"
                                                class="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                                            <span class="text-4xl text-blue-900 leading-none">&rdquo;</span>
                                        </div>

                                        <div class="mt-3 flex-1 overflow-hidden">
                                            <div class="pb-2">
                                                <div class="font-semibold text-blue-900 truncate pb-1">
                                                    {{ testimonial.name }}
                                                </div>
                                                <div class="text-sm text-blue-500 pb-2">{{ testimonial.role }}</div>
                                            </div>

                                            <div class="font-semibold text-blue-900 text-sm sm:text-base leading-snug">
                                                {{ testimonial.highlight }}
                                            </div>
                                            <div
                                                class="text-gray-600 text-xs sm:text-sm mt-2 overflow-hidden text-ellipsis line-clamp-3">
                                                {{ testimonial.description }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </template>
                    </el-carousel>
                </div>

                <!-- Fixed Rating Card -->
                <div
                    class="bg-gray-100 p-6 rounded-xl shadow-sm flex flex-col items-center justify-center min-h-[300px]">
                    <div class="text-left w-full max-w-sm">
                        <div class="text-[45px] font-bold text-blue-900">
                            4.9
                            <span class="text-yellow-400 text-2xl align-middle ml-1">★★★★★</span>
                        </div>
                        <p class="text-blue-900 font-semibold">
                            Top-Rated Online Pathology Service
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- WhatsApp Section -->
        <div class="w-full flex justify-center items-center mt-4">
            <div class="global-bg-color text-white p-6 rounded-3xl text-left flex justify-between items-center gap-10">
                <div class="">
                    <div class="text-[30px]"> Can't find what you're looking for? </div>
                    <p class="bold-test-color text-2xl">We are here to help. Say 'Hi' on WhatsApp</p>
                </div>
                <div> <img src="/whatsapp.png" alt="whatsappLogo" class="h-20" /> </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TestimonialsSection",
    data() {
        return {
            isMobile: false,
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
        chunkedTestimonials() {
            const chunks = [];
            for (let i = 0; i < this.testimonials.length; i += 2) {
                chunks.push(this.testimonials.slice(i, i + 2));
            }
            return chunks;
        },
    },
    mounted() {
        this.checkScreen();
        window.addEventListener("resize", this.checkScreen);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.checkScreen);
    },
    methods: {
        checkScreen() {
            this.isMobile = window.innerWidth < 640; // Tailwind's sm breakpoint
        },
    },
};
</script>
