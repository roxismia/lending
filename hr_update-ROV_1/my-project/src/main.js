
import '../src/style.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import Header from './Header.vue'


const app = createApp(App)

app.use(router)

app.mount('#app')
app.component("Header",Header)