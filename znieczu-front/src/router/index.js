import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import PageNotFound from '@/components/OtherComponents/PageNotFound'
import Login from '@/components/Login'
import Contacts from '@/components/Contacts'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }

  ]
})
