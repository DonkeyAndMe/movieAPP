import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/nav/home'
import About from '../components/nav/about'
import Me from '../components/nav/me'

Vue.use(Router)

export default new Router({
	mode: 'hash',
	routes: [
		{
			path: '/home',
			component: Home
		}, {
			path: '/about',
			component: About
		}, {
			path: '/me',
			component: Me
		}
	]
})

