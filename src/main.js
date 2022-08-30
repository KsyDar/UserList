import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import UserList from './views/UserList.vue'
import Profile from './views/Profile.vue'


import './assets/main.css'

const routes = [
  {
    name: 'UserList',
    path: '/',
    component: UserList
  },
  {
    name: 'Profile',
    path: '/about/:id',
    component: Profile,
    props: true,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount('#app')

