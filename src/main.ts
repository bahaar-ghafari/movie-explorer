import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import Toast, { type PluginOptions, POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 5000,
  hideProgressBar: true,
}
const pinia = createPinia()
const app = createApp(App)

app.use(Toast, options)

app.use(pinia)
app.use(router)

app.mount('#app')
