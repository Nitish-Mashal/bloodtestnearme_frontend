import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// 🧩 Import Pinia
import { createPinia } from 'pinia'

// Frappe UI imports
import { Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

// Element Plus imports
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// ✅ Create app once
const app = createApp(App)

// ✅ Create and use Pinia
const pinia = createPinia()
app.use(pinia)

// ✅ Frappe UI setup
setConfig('resourceFetcher', frappeRequest)
app.use(resourcesPlugin)

// ✅ Vue Router
app.use(router)

// ✅ Element Plus
app.use(ElementPlus)

// ✅ Global Components
app.component('Button', Button)

// ✅ Mount app
app.mount('#app')
