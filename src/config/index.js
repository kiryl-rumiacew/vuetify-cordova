import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Contact from '@/views/Contact'
import CssComp from '@/views/Properties'
import Form from '@/views/Form'

import app from './app'

Vue.use(Router)

var actions = {
  exit () {
    if (confirm('Exit application?')) {
      navigator.app.exitApp()
    }
  },
  ghPage () {
    window.open('https://fraigo.github.io/vuetify-cordova/www/', '_blank')
  },
  ghProject () {
    window.open('https://github.com/fraigo/vuetify-cordova', '_blank')
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
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/props',
      name: 'Props',
      component: CssComp
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: {
        fields: [
          {
            label: 'Name',
            name: 'name',
            value: null,
            placeholder: 'Enter name',
            validation: 'required',
            required: true,
            type: 'text'
          },
          {
            label: 'Email',
            name: 'email',
            value: null,
            placeholder: 'Enter email',
            validation: 'required|email',
            required: true,
            width: 50,
            type: 'text'
          },
          {
            label: 'Age',
            name: 'age',
            value: null,
            placeholder: 'Your age',
            validation: 'required',
            required: true,
            mask: '###',
            width: 50,
            type: 'number'
          },
          {
            label: 'Address',
            name: 'address',
            value: null,
            placeholder: 'Enter address',
            validation: 'required',
            required: true,
            multiLine: true,
            type: 'text'
          }
        ]
      }
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
      title: 'Form Example',
      route: 'Form',
      id: 'form'
    },
    {
      icon: 'fab fa-css3-alt',
      title: 'Browser Properties',
      route: 'Props',
      id: 'props'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub Project',
      id: 'ghProject'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub Demo Page',
      id: 'ghPage'
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
  toolbar: true,
  darkMode: false
}

export default {
  app: app,
  router: router,
  menu: menu
}
