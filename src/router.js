import Vue from 'vue'
import Router from 'vue-router'
//import Router from './hash-router.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Artwork from './views/Artwork.vue'
import Links from './views/Links.vue'

import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
//  mode: 'history',
//  base: process.env.PUBLIC_URL,
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
      path: '/contact',
      name: 'contact',
      component: Contact
    },

    {
      path: '/artwork',
      name: 'artwork',
      component: Artwork
    },

         
    {
      path: '/links',
      name: 'links',
      component: Links
    },
 
    {
      path: '/*',
      component: NotFound
    },
  ]
})
