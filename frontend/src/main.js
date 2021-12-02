import Vue from 'vue'
import VueRouter from 'vue-router'
 
import App from './App.vue'
// import Create from './components/AddProduct.vue'
import Edit from './components/EditDowntime.vue'
import Index from './components/DowntimeList.vue'
 
Vue.use(VueRouter)
 
Vue.config.productionTip = false
 
const routes = [
  // {
  //   name: 'Create',
  //   path: '/create',
  //   component: Create
  // },
  {
    name: 'Edit',
    path: '/downtimes/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },
];
 
const router = new VueRouter({ mode: 'history', routes: routes })
 
new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')