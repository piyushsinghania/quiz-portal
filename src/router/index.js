import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Auth from '../views/Auth.vue'
import Exams from '../views/Exams.vue'
import Subjects from '../views/Subjects.vue'
import Profile from '../views/Profile.vue'
import Report from '../views/Report.vue'

const requireAuth = (to, from, next) => {
  let isAuthenticated = false;
  if(localStorage.getItem('accessToken')) {
    isAuthenticated = true;
    next();
  } else {
    next("/auth/login");
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/auth/:id',
      name: 'auth',
      component: Auth
    },
    {
      path: '/subjects',
      name: 'subjects',
      component: Subjects,
      beforeEnter: requireAuth,
    },
    {
      path: '/subjects/:subjectId/questions',
      name: 'exams',
      component: Exams,
      beforeEnter: requireAuth,
      props: true
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: requireAuth,
    },
    {
      path: '/report/:id',
      name: 'report',
      component: Report,
      beforeEnter: requireAuth,
    }
  ]
})

export default router
