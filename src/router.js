import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Login from './pages/login'
// import Cart from './pages/cart'
// import Order from './pages/order'
// import Confirm from './pages/confirm'
// import orderList from './pages/order-list'
// import orderPay from './pages/order-pay'
// import aliPay from './pages/alipay'

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
                    component:resolve => require(['./pages/product'],resolve),
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component:resolve => require(['./pages/detail'],resolve),
                }
            ]
        },{
            path: '/login',
            name: 'login',
            component:resolve => require(['./pages/login'],resolve),
        },{
            path: '/Cart',
            name: 'cart',
            component:()=> import('./pages/cart'),
        },{
            path: '/order',
            name: 'order',
            component:()=> import('./pages/order'),
            children: [
                {
                    path: 'confirm',
                    name: 'confirm',
                    component: ()=> import('./pages/confirm')
                },{
                    path: 'list',
                    name: 'list',
                    component: ()=> import('./pages/order-list')
                },{
                    path: 'pay',
                    name: 'pay',
                    component: ()=> import('./pages/order-pay')
                },{
                    path: 'alipay',
                    name: 'alipay',
                    component: ()=> import('./pages/alipay')
                }
            ]
        }
    ]
})