import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// import 'bootstrap/dist/js/bootstrap.js'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router'
import api from './api'


const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
// app.use(api)
app.mount('#app')

