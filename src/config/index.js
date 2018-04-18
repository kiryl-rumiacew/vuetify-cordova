import Vue from 'vue'
import Router from 'vue-router'

import app from './app'
import routes from '../data/routes'
import menuItems from '../data/menuItems'
import menuButtons from '../data/menuButtons'
import actions from '../data/actions'

Vue.use(Router)

var router = new Router({
  routes: routes
})

var menu = {
  items: menuItems,
  buttons: menuButtons,
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
  toolbar: true,
  darkMode: false
}

export default {
  app: app,
  router: router,
  menu: menu
}
