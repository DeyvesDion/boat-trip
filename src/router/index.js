import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Search from '../views/search/Search.vue'
import RegisterBoat from '../views/registerBoat/RegisterBoat.vue'
import Connection from '../views/connection/Connection.vue'
import Registration from '../views/registration/Registration.vue'
import Help from '../views/help/Help.vue'
import Contact from '../views/contact/Contact.vue'
import BoatRental from '../views/boatRental/BoatRental.vue'
import FavoriteDestination from '../views/destinations/favoriteDestination/FavoriteDestination.vue'
import FeaturedDestination from '../views/destinations/featuredDestination/FeaturedDestination.vue'
import Estimate from '../views/estimate/Estimate.vue'

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
  {
    // sD: search destination
    path: '/louer-un-bateau/recherche/ville/:sD',
    name: 'Search',
    component: Search
  },
  {
    // bT:boat type
    path: '/louer-un-bateau/:bT',
    name: 'BoatRental',
    component: BoatRental
  },
  {
    path: '/destination-a-la-une/corse',
    name: 'FeaturedDestination',
    component: FeaturedDestination
  },
  {
    //  dN: featured destination name
    path: '/destination-coup-de-coeur/:dN',
    name: 'FavoriteDestination',
    component: FavoriteDestination
  },
  {
    path: '/faire-mon-estimation',
    name: 'Estimate',
    component: Estimate
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
