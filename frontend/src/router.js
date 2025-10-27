import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/Home/HeroSection.vue'),
  },
  {
    path: '/HealthCheckupDetails',
    name: 'HealthCheckupDetails',
    component: () => import('@/HealthCheckupDetails/HealthCheckupDetails.vue'),
  },
  {
    path: '/HealthCheckupList',
    name: 'HealthCheckupList',
    component: () => import('@/HealthCheckupDetails/HealthCheckupList.vue'),
  },
  {
    path: '/BloodTestList',
    name: 'BloodTestList',
    component: () => import('@/BloodTest/BloodTestList.vue'),
  },
  {
    path: '/SinglePackageBook',
    name: 'SinglePackageBook',
    component: () => import('@/SinglePackageBook/SinglePackageBook.vue'),
  },
  {
    path: '/CartPage',
    name: 'CartPage',
    component: () => import('@/CartPage/CartPage.vue'),
  },
]

let router = createRouter({
  history: createWebHistory(''),
  routes,
})

export default router
