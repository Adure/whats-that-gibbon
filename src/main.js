import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import VueRouter from 'vue-router';
import 'vuesax/dist/vuesax.css';

Vue.config.productionTip = false
Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: LandingPage
    },
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
