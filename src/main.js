import { createApp } from 'vue'
import App from './App.vue'
// import "github-markdown-css";
import './styles/gitbook-teal.css'
import { createHead } from '@vueuse/head'
const head = createHead()

import router from "./routes/index.js";

const app = createApp(App);
app.use(router);
app.use(head)
app.mount('#app')
