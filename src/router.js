import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Login from './pages/login'
import Cart from './pages/cart'
import Order from './pages/order'
import Confirm from './pages/confirm'
import orderList from './pages/order-list'
import orderPay from './pages/order-pay'
import aliPay from './pages/alipay'

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
        },{
            path: '/order',
            name: 'order',
            component:Order,
            children: [
                {
                    path: 'confirm',
                    name: 'confirm',
                    component: Confirm
                },{
                    path: 'list',
                    name: 'list',
                    component: orderList
                },{
                    path: 'pay',
                    name: 'pay',
                    component: orderPay
                },{
                    path: 'alipay',
                    name: 'alipay',
                    component: aliPay
                }
            ]
        }
    ]
})