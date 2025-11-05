import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/Home/HeroSection.vue"),
    meta: {
      title: "Blood Tests | Full Body Health Checkups | Thyrocare",
      description:
        "Book blood tests and full body health checkup packages online at Thyrocare Bangalore. Get accurate lab tests at home with free sample collection.",
    },
  },
  {
    path: "/health-checkup-packages-bangalore",
    name: "HealthCheckupList",
    component: () => import("@/HealthCheckupDetails/HealthCheckupList.vue"),
    meta: {
      title: "Thyrocare Full Body Health Checkup Packages in Bangalore",
      description:
        "Explore the best full body health checkup packages offered by Thyrocare in Bangalore. Affordable and reliable tests at home.",
    },
  },
  {
    path: "/blood-test-online-bangalore",
    name: "BloodTestList",
    component: () => import("@/BloodTest/BloodTestList.vue"),
    meta: {
      title: "Book Blood Tests in Bangalore | Thyrocare Lab",
      description:
        "Book blood tests online in Bangalore with Thyrocare. Get free home sample collection and quick digital reports.",
    },
  },
  {
    path: "/:url",
    name: "HealthCheckupDetails",
    component: () => import("@/HealthCheckupDetails/HealthCheckupDetails.vue"),
    props: true,
  },
  {
    path: "/book/:slug",
    name: "SinglePackageBook",
    component: () => import("@/SinglePackageBook/SinglePackageBook.vue"),
    props: true,
  },
  {
    path: "/CartPage",
    name: "CartPage",
    component: () => import("@/CartPage/CartPage.vue"),
    meta: {
      title: "Online Blood Test At Home | Full Body Checkup | Cart",
      description:
        "Review your selected health checkup packages and proceed to checkout easily. Safe and secure online booking.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// ✅ Global hook to set title and meta description
router.beforeEach((to, from, next) => {
  // Set document title
  document.title = to.meta.title || "Blood Test Near Me";

  // Update or create <meta name="description">
  const metaDescription = document.querySelector("meta[name='description']");
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      to.meta.description ||
      "Book affordable blood tests and health checkups at home."
    );
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      to.meta.description ||
      "Book affordable blood tests and health checkups at home."
    );
    document.head.appendChild(meta);
  }

  next();
});

export default router;
