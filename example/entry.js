import Vue from 'vue';
import App from './app';
import routes from './route';
import Mint from 'zmbl-ui';
import 'zmbl-ui/lib/zmbl-ui.common.css'
import VueRouter from 'vue-router';
document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);
Vue.use(Mint);
Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  routes
});

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
});
