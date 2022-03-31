import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '@/router';
import { useVuelidate } from '@vuelidate/core'

createApp(App).use(router).use(useVuelidate).use(createPinia()).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
