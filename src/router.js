import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Login from './pages/login'
import Cart from './pages/cart'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component:Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component:Index,
                }, {
                    path: '/product/:id',
                    name: 'product',
                    component:Product,
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component:Detail,
                }
            ]
        },{
            path: '/login',
            name: 'login',
            component:Login,
        },{
            path: '/Cart',
            name: 'cart',
            component:Cart,
        }
    ]
})