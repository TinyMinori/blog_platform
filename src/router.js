import Vue from "vue"
import Router from "vue-router"

import Gallery from "@/pages/Gallery.vue"
import Login from "@/pages/Login.vue"
import NotFound from "@/pages/404NotFound.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Gallery",
      component: Gallery,
      meta: {
        layout: "default"
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "*",
      name: "404NotFound",
      component: NotFound
    }
  ]
})
