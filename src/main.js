import Vue from "vue"
import App from "@/App.vue"

import router from "@/router.js"
import strings from "@/strings.js"
import VueResource from "vue-resource"
import Cookies from "cookies-js"

import "@/layouts/index.js"
import "@/style.scss"

Vue.prototype.$s = strings
Vue.use(VueResource)

Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true

Vue.config.productionTip = false

Cookies.defaults = {
  path: "/"
}

var metas = [
  {
    name: "title",
    content: strings.title
  },
  {
    name: "description",
    content: strings.description
  },
  {
    property: "og:type",
    content: "website"
  },
  {
    property: "og:url",
    content: "https://letmetravel.fr"
  },
  {
    property: "og:title",
    content: strings.title
  },
  {
    property: "og:description",
    content: strings.description
  },
  {
    property: "og:image",
    content: "https://letmetravel.fr/images/meta_image.png"
  },
  {
    property: "twitter:card",
    content: "summary_large_image"
  }
]

new Vue({
  router,
  render: h => h(App),
  created() {
    document.title = this.$s.title
    let head = document.getElementsByTagName("head")[0]
    metas.forEach(item => {
      let meta = document.createElement("meta")
      Object.keys(item).forEach(key => {
        meta.setAttribute(key, item[key])
      })
      head.appendChild(meta)
    })
  }
}).$mount("#app")
