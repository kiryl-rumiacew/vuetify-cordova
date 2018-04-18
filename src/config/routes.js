import Home from '@/views/Home'
import Contact from '@/views/Contact'
import CssComp from '@/views/Properties'
import Form from '@/views/Form'

import fieldsExample from '@/data/fieldsExample.js'

export default [
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
      fields: fieldsExample
    }
  }
]
