import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/Home/HeroSection.vue'),
  },
  {
    path: '/HealthCheckupDetails/:name1',
    name: 'HealthCheckupDetails',
    component: () => import('@/HealthCheckupDetails/HealthCheckupDetails.vue'),
    props: true,
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
    path: '/SinglePackageBook/:name1',
    name: 'HealthCheckupDetails',
    component: () => import('@/SinglePackageBook/SinglePackageBook.vue'), // ✅ Use SinglePackageBook.vue here
    props: true,
  },
  {
    path: '/CartPage',
    name: 'CartPage',
    component: () => import('@/CartPage/CartPage.vue'),
  },
  {
    path:'/qrcodedata',
    name:'QRcodeData',
    component: () => import('@/QRscan/QRcodeData.vue'),
  },
  
  {
    path:'/blogspreview',
    name:'BlogsPreview',
    component: () => import('@/Blogs/BlogsPreview.vue'),
  },
  {
    path:'/blogdetails',
    name:'BlogDetails',
    component: () => import('@/Blogs/BlogDetails.vue'),
  },
  {
    path: '/add-diagnostic-center',
    name: 'AddDiagnosticCenter',
    component: () => import('@/Address/AddDiagnosticCenter.vue'), 
  },
  {
    path:'/labs-near-me',
    name:'LabsNearMe',
    component: () => import('@/Address/LabsNearMe.vue'),
  },
  {
     path:'/termsAndConditions',
      name:'TermsAndConditions',
      component: () => import('@/Pages/TermsAndConditions.vue'),
    },
    {
      path:'/contact-us',
      name:'ContactUs',
      component: () => import('@/Pages/ContactUs.vue'),
    },
    {
      path:'/about-us',
      name:'AboutUs',
      component: () => import('@/Pages/AboutUs.vue'),
    }

]

const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 }
  },
})

export default router
