import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueMermaidString from 'vue-mermaid-string'
const app = createApp(App)
app.component('VueMermaidString', VueMermaidString) // Global registration
// or app.use(VueMermaidString)
app.use(createPinia())
app.use(router)

app.mount('#app')
