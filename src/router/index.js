import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import About from '../views/About.vue'
import InfoLomba from '../views/InfoLomba.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/Info',
        name: 'InfoLomba',
        component: InfoLomba

    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router