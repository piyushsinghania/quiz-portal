import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Auth from '../views/Auth.vue'
import Exams from '../views/Exams.vue'
import Subjects from '../views/Subjects.vue'

const requireAuth = (to, from, next) => {
  // if (
  //   localStorage.getItem("isAuthenticated") === "false" ||
  //   localStorage.getItem("isAuthenticated") === null
  // ) {
  //   next("/auth/login");
  // } else {
  //   next();
  // }
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
      component: Subjects
    },
    {
      path: '/subjects/:subjectId/questions',
      name: 'exams',
      component: Exams,
      props: true
    }
  ]
})

export default router
