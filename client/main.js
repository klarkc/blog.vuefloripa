/* Required by BootstrapVue */
import 'babel-polyfill';

/* Global Components */
import Vue from 'vue';
import {sync} from 'vuex-router-sync';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
// import 'vue-awesome/icons';
import Icon from 'vue-awesome';
import VueWysiwyg from 'vue-wysiwyg';
import 'vue-wysiwyg/dist/vueWysiwyg.css';

/* Local Components and modules */
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);
Vue.component('icon', Icon);
Vue.use(VueWysiwyg);

// Add router state to store
sync(store, router);

// Instance Application
export default new Vue({
  el: '#app',
  render: r => r(App),
  router,
  store,
});
