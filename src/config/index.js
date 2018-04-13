import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Contact from '@/views/Contact'

Vue.use(Router)

var actions = {
  exit () {
    navigator.app.exitApp()
  }
}

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'Form',
      component: Contact
    }
  ]
})

var menu = {
  items: [
    {
      icon: 'fas fa-home',
      title: 'Home',
      route: 'Home',
      id: 'home'
    },
    {
      icon: 'fab fa-wpforms',
      title: 'Form',
      route: 'Form',
      id: 'form'
    },
    {
      icon: 'fab fa-facebook-square',
      title: 'Facebook Page',
      id: 'fb'
    },
    {
      icon: 'fab fa-pinterest-square',
      title: 'Pinterest Page',
      id: 'pt'
    },
    {
      classes: ['menu-separator'],
      cordova: true
    },
    {
      icon: 'fas fa-sign-out-alt',
      title: 'Exit',
      id: 'exit',
      separator: true,
      cordova: true
    }
  ],
  buttons: [
    {
      icon: 'fas fa-sign-out-alt',
      title: 'Exit',
      id: 'exit',
      cordova: true
    }
  ],
  controller (item, isButton) {
    if (item.route) {
      router.push({
        name: item.route,
        params: item.params
      })
      return
    }
    if (actions[item.id]) {
      actions[item.id]()
      return
    }
    alert('Clicked ' + item.title)
  },
  miniVariant: false,
  darkMode: false
}

export default {
  router: router,
  menu: menu
}
