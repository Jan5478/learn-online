// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations:{},
  getters: {},
});

import { Row, Col, Icon, Menu, MenuItem, Submenu, Carousel, CarouselItem, Tabs, TabPane, Input, Button, RadioButton, RadioGroup } from 'element-ui';
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Input);
Vue.use(Button);
Vue.use(RadioButton);
Vue.use(RadioGroup);

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);


import './assets/icon/font_981340_9dk3pyi0mcf/iconfont.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
