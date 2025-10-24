import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// Frappe UI imports
import { Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

// Element Plus imports
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Create Vue app
let app = createApp(App)

// Frappe UI config
setConfig('resourceFetcher', frappeRequest)
app.use(resourcesPlugin)

// Vue Router
app.use(router)

// Element Plus
app.use(ElementPlus)

// Global components
app.component('Button', Button)

// Mount app
app.mount('#app')
