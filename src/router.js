import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auth from './views/Auth.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { 
        requiresAuth: true
      },
      component: () => import('./views/Home.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      meta: { 
        guest: true
      },
      component: () => import('./views/Auth.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
	console.log("to: ", to);
	console.log("from: ", from);
	if(to.matched.some(record => record.meta.requiresAuth)) {
		if (localStorage.getItem('isLoggedIn') == null) {
			next({
				path: '/auth',
				params: { nextUrl: to.fullPath }
			})
		} else {
			let user = JSON.parse(localStorage.getItem('isLoggedInUser'))
			console.log("Logged in User: ", user)
			next()
		}
	}
	else {
		next()
	}
})

export default router