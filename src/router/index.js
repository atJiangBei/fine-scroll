import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/readme',
  },
  {
    path: '/readme',
    component: () => import('@/view/readme/index.vue'),
  },
  {
    path: '/demo',
    component: () => import('@/view/demo/index.vue'),
  },
  {
    path: '/source_code',
    component: () => import('@/view/source_code/index.vue'),
  },
];
const router = new VueRouter({
  routes,
});

export default router;
