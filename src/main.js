import { createApp } from 'vue'
import App from './App.vue'
import 'highlight.js/styles/atom-one-light.css'
import './styles/hu-md.css'
import './styles/gitbook-teal.scss'
import './styles/index.css'

import '@icon-park/vue-next/styles/index.css'
import IconPark from '../plugins/iconPark'

import router from "./routes/index.js";

const app = createApp(App);
app.use(router);
app.use(IconPark)
app.mount('#app')
