import './assets/css/main.css'
import './assets/css/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupIcons } from './icons'
import dataV from '@jiaminghi/data-view'



const app = createApp(App)

app.use(router)
setupIcons(app)
app.use(dataV)

app.mount('#app')
