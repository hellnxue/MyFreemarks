import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello1 from '@/components/Hello1'
import parent from '@/components/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/h1',
      name: 'Hello1',
      component: Hello1
    },
    {
      path: '/papp',
      name: 'parent',
      component: parent
    }
  ]
})
