import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auth from './views/Auth.vue'
import PageNotFound from './views/PageNotFound.vue'
import Logout from './views/Logout.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { 
        requiresAuth: true
      },
      component: Home
    },
    {
      path: '/auth',
      name: 'auth',
      meta: { 
        guest: true
      },
      component: Auth
    },
    {
      path: '/logout',
	  name: 'logout',
	  component: Logout
    },
    {
      path: '*',
      name: 'error404',
      meta: { 
        guest: true
      },
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
	if(to.path === "/logout") {
		if (localStorage.getItem('isLoggedIn') == null) {
			next({
				path: '/auth',
				params: { nextUrl: to.fullPath }
			})
		} else {
			localStorage.removeItem('isLoggedIn')
			localStorage.removeItem('isLoggedInUser')
		}
	}
	if(to.matched.some(record => record.meta.requiresAuth)) {
		if (localStorage.getItem('isLoggedIn') == null) {
			next({
				path: '/auth',
				params: { nextUrl: to.fullPath }
			})
		} else {
			let user = JSON.parse(localStorage.getItem('isLoggedInUser'))
			next()
		}
	}
	else {
		next()
	}
})

export default router