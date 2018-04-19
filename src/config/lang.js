import langEs from '../data/lang.es.js'
import langEn from '../data/lang.en.js'

var lang = {
  es: langEs,
  en: langEn,
  default: 'en',
  selected: 'en',
  current: null,
  expr (expr, param0, param1) {
    if (!expr) return expr
    if (typeof expr === 'object') {
      param0 = expr[1]
      expr = expr[0]
    }
    var result = this.current[expr.toLowerCase()]
    if (!result) return expr
    result = result.replace('%0%', this.current[param0])
    result = result.replace('%1%', this.current[param1])
    return result
  },
  change (lng) {
    if (!this[lng]) {
      lng = this.default
    }
    if (this[lng]) {
      this.current = this[lng]
      this.selected = lng
    }
  }
}

if (!lang.current) {
  var current = 'en'
  if (navigator.language) {
    current = navigator.language.toLowerCase().split('-')[0]
  }
  lang.change(current)
}

export default lang
