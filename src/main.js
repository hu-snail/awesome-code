import { createApp } from 'vue'
import App from './App.vue'
// import "github-markdown-css";
import './styles/gitbook-teal.scss'
import './styles/index.css'

import { createHead } from '@vueuse/head'
const head = createHead()

import '@icon-park/vue-next/styles/index.css'
import IconPark from '../plugins/iconPark'

import router from "./routes/index.js";

const app = createApp(App);
app.use(router);
app.use(head)
app.use(IconPark)
app.mount('#app')
