import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import A from '../components/A';
import B from '../components/B';
import C from '../components/C';
import D from '../components/D';
export default new Router({
  routes: [
    {path:'/A',component:A,children:[
        {path:'D',component:D}
      ]},
    {path:'/B',component:B,children:[
        {path:'C',component:C}
      ]},
  ]
})

