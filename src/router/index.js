import Vue from 'vue'
import Router from 'vue-router'
import detail from '../components/detail/detail.vue';
import showIndex from '../components/showIndex.vue';

Vue.use(Router);

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
      component: detail,
    }
  ]
})
