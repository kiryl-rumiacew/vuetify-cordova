import Vue from 'vue'
import Router from 'vue-router'

import app from '../data/app'
import routes from '../data/routes'
import menuItems from '../data/menuItems'
import menuButtons from '../data/menuButtons'
import actions from '../data/actions'

Vue.use(Router)

var appRouter = new Router({
  routes: routes
})

var menuConfig = {
  items: menuItems,
  buttons: menuButtons,
  miniVariant: false,
  toolbar: true,
  darkMode: false,
  opened: false
}

var controller = function (item, isButton) {
  if (item.route) {
    appRouter.push({
      name: item.route,
      params: item.params
    })
    return
  }
  if (actions[item.id]) {
    actions[item.id]()
    return
  }
  console.log('Clicked ' + item.title)
}

export default {
  app: app,
  router: appRouter,
  menu: menuConfig,
  controller: controller
}
