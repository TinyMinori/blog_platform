import Vue from "vue"
import VueRouter from "vue-router"

import Gallery from "@/pages/Gallery.vue"
import Login from "@/pages/Login.vue"
import Logout from "@/pages/Logout.vue"
import Card from "@/pages/Card.vue"
import NotFound from "@/pages/404NotFound.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  base: "",
  routes: [
    {
      path: "/",
      component: Gallery,
      meta: {
        layout: "default"
      }
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/logout",
      component: Logout
    },
    {
      path: "/card/:id?",
      component: Card,
      meta: {
        layout: "default"
      }
    },
    {
      path: "*",
      component: NotFound
    }
  ]
})
