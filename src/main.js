import { createApp } from 'vue'

import 'bootstrap/dist/js/bootstrap.bundle.js'
// import 'bootstrap/js/dist/collapse'
// import 'bootstrap/js/dist/dropdown'
// import 'bootstrap/js/dist/carousel'
// import 'bootstrap/js/dist/offcanvas'

import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.mount('#app')
