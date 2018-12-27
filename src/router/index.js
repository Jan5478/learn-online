import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import detail from '../components/detail/detail.vue';
import showIndex from '../components/showIndex.vue';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'showIndex',
      component: showIndex
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
