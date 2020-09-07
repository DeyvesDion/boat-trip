import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterBoat from '../views/RegisterBoat.vue'
import Connection from '../views/Connection.vue'
import Registration from '../views/Registration.vue'
import Help from '../views/Help.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/enregister-un-bateau',
    name: 'RegisterBoat',
    component: RegisterBoat
  },
  {
    path: '/connexion',
    name: 'Connection',
    component: Connection
  },
  {
    path: '/inscription',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/aide',
    name: 'Help',
    component: Help
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
