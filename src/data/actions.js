import lang from '@/config/lang'

export default {
  exit () {
    if (confirm(lang.current.exit_application)) {
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
