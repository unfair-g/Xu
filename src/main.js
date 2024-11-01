import { createApp } from 'vue'
import VueAnimateOnScroll from 'vue3-animate-onscroll'
import animated from 'animate.css';
import router from './router/index.js'
import "./assets/fonts/fonts.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueAnimateOnScroll)
app.use(animated)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
