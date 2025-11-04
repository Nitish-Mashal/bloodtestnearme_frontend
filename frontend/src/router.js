import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/Home/HeroSection.vue"),
    meta: {
      title: "Blood Tests | Full Body Health Checkups | Thyrocare",
    },
  },
  {
    path: "/health-checkup-packages-bangalore",
    name: "HealthCheckupList",
    component: () => import("@/HealthCheckupDetails/HealthCheckupList.vue"),
    meta: {
      title: "Thyrocare Full Body Health Checkup Packages in Bangalore",
    },
  },
  {
    path: "/blood-test-online-bangalore",
    name: "BloodTestList",
    component: () => import("@/BloodTest/BloodTestList.vue"),
    meta: {
      title: "Book Blood Tests in Bangalore | Thyrocare Lab"
    },
  },
  {
    path: "/:url",
    name: "HealthCheckupDetails",
    component: () => import("@/HealthCheckupDetails/HealthCheckupDetails.vue"),
    props: true,
    meta: {
      title: "Health Checkup Package Details | Blood Test Near Me",
    },
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
      title: "Online Blood Test At Home | Full Body Checkup | Cart"
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

// ✅ Set meta title dynamically for each route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Blood Test Near Me"; // default title
  next();
});

export default router;
