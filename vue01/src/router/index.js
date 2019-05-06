import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import A from '../components/A';
import B from
export default new Router({
  routes: [
    {path:'/A',component:A},
    {path:'/B',component:B,children:[
        {path:'C',component:}
      ]},
  ]
})
