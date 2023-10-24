import '../css/app.css';
import '../scss/app.scss';

import axios from 'axios';
import {createApp} from 'vue/dist/vue.esm-bundler.js';
import App from './App.vue';


window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// import VueRouter from 'vue-router'
// Vue.use(VueRouter);

const app = createApp({});

app.component('app', App);
app.mount("#app");