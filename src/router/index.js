import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/market-place',
    name: 'Market Place',
    component: () => import(/* webpackChunkName: "market" */ '../views/Market.vue'),
  },
  {
    path: '/checkout/:product_type',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue'),
  },
  {
    path: '/checkout/order-received/:order_id',
    name: 'Checkout Thanks',
    component: () => import(/* webpackChunkName: "checkout-thanks" */ '../views/Thanks.vue'),
  },
  {
    path: '/panel',
    name: 'Panel',
    component: () => import(/* webpackChunkName: "panel" */ '../views/Panel.vue'),
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "error404" */'../views/404.vue'),
    name: '404',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;
