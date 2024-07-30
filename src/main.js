import { createApp } from 'vue'

import App from './App.vue'
import router from './router';
import '@/assets/scss/app.scss'
import VueFeather from 'vue-feather';
import store from './store'
import Breadcrumbs from './components/bread_crumbs';
import "bootstrap"
import 'bootstrap/dist/js/bootstrap.bundle'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueAnimateOnScroll from 'vue3-animate-onscroll';
import Lightbox from 'vue-easy-lightbox'
import vue3StarRatings from "vue3-star-ratings";
import Datepicker from 'vue3-datepicker'
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';
import { createI18n } from 'vue-i18n'
import English from "./locales/en.json"
import VueApexCharts from "vue3-apexcharts";

import { defaultLocale, localeOptions } from './constants/config';

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
import { ref, onMounted } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'


 const locale = (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) ? localStorage.getItem('currentLanguage') : defaultLocale;
 const i18n = createI18n({
 
  locale: locale,
  messages: {
   English: English,
    

    }
 });

const app = createApp(App).use(VueAxios, axios).use(i18n).use(SimpleTypeahead).component("vue3-star-ratings", vue3StarRatings).use(Lightbox).use(store).use(VueSweetalert2, {
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      toast: true,
})
.use(VueGoogleMaps, {
      load: {
      key: '',
      libraries: "places",
      // version: "3.53"
      v: "weekly"
   },
})
.use(VueAnimateOnScroll).use(router).use(PerfectScrollbar).component(VueFeather.name, VueFeather).component("apexchart", VueApexCharts).component('Breadcrumbs', Breadcrumbs).use(require('vue-chartist')).component('Datepicker', Datepicker)

app.config.globalProperties.$axios = axios.create({
     baseURL: 'http://127.0.0.1:8000/'
   });
app.config.globalProperties.$image_url = 'http://127.0.0.1:8000/storage/';

app.config.globalProperties.$filters = {
   formatDateTime(datetime) {
      return moment.utc(datetime).format('DD MMM YYYY, hh:mm a');
   }
}

app.mount('#app')
   


