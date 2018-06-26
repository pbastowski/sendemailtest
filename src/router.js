import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/information',
        component: require('./Information.vue').default,
        props: true
    },

    {
        path: '*',
        redirect: '/information'
    }
]

export default new VueRouter({
    routes
})
