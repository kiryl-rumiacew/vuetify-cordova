import icons from '../data/icons'

export default [
  {
    icon: icons.home,
    title: 'Home',
    route: 'Home',
    id: 'home'
  },
  {
    icon: icons.form,
    title: 'Form Example',
    route: 'Form',
    id: 'form'
  },
  {
    icon: icons.html,
    title: 'Browser Properties',
    route: 'Props',
    id: 'props'
  },
  {
    icon: icons.github,
    title: 'GitHub Project',
    id: 'ghProject'
  },
  {
    icon: icons.github,
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
]
