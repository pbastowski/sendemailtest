import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './router'
import App from './app/App.vue'

console.clear()

Vue.config.devtools = false
Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
