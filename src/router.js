import Vue from "vue"
import Router from "vue-router"

import Gallery from "@/pages/Gallery.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Gallery",
      component: Gallery
    }
  ]
})
