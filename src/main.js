import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
const moment = require('moment');
require('moment/locale/ru');

Vue.use(require('vue-moment'), {
  moment
});

new Vue({
  render: h => h(App),
}).$mount('#app');
