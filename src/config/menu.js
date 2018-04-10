var actions = {
  exit () {
    navigator.app.exitApp()
  }
}

export default {
  items: [
    {
      icon: 'fas fa-home',
      title: 'Home',
      id: 'home'
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
    if (actions[item.id]) {
      actions[item.id]()
    }
    alert('Clicked ' + item.title)
  },
  miniVariant: false
}
