// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap và Font Awesome trước
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

// Import file CSS tùy chỉnh của bạn sau cùng để ghi đè (override) nếu cần
import './assets/styles.css' 

const app = createApp(App)
app.use(router)
app.mount('#app')