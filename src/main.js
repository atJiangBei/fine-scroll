import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import FineScroll from '@/component';
import '@/component/index.css';
import 'github-markdown-css';
Vue.config.productionTip = false;

Vue.use(FineScroll);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
