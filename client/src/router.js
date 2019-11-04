import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App.vue';
import Projects from '@/views/Projects.vue';
import Home from '@/views/Home.vue';
import Slider from '@/views/Slider.vue';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/projects/:filter',
      name: 'projects',
      component: Projects
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: Slider
    }
  ]
})

export default router;
