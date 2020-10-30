import 'normalize.css'

import Button from './Button'

const components = [
  Button
]

const install = Vue => {
  if (install.installed) {
    return
  }
  components.map(component => Vue.component('Z' + component.name, component))
}

if (window && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button
}
