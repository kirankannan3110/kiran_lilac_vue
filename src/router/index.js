import { createWebHistory, createRouter } from "vue-router";
import Body from '../components/body';

/* Dashboards */
import Dashboard from '../pages/dashboard/dashboard';


//Auth
import login from '../auth/login';
import Register from '../auth/register';


const routes = [
      {
        path: '/',
        component: Body,
    
        children: [
          {
            path: '',
            name: 'defaultRoot',
            component: Dashboard,
            meta: {
              title: ' Dashboard',
            }
          },

        ]
      },
      {
        path: '/dashboard',
        component: Body,
        children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
          meta: {
            title: 'Vue User Dashboard',
          }
        },
        ]
      },

      
      {
        path: '/auth',
        children: [
        {
          path: 'login',
          name: 'Login',
          component: login,
          meta: {
            title: ' Login | VUE',
          }
        },
        {
          path: 'register',
          name: 'register 1',
          component: Register,
          meta: {
            title: ' Register | VUE',
          }
        }
        ]
      },
      
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  router.beforeEach((to, from, next) => {
    if(to.meta.title)
      document.title = to.meta.title;
    const  path = ['/auth/login','/auth/register'];
     if(path.includes(to.path) || localStorage.getItem('user_token')){
      return next();
     }
     next('/auth/login');
});
  export default router