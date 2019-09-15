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

new Vue({
  router,
  render: h => h(App),
  created() {
    document.title = this.$s.title
  }
}).$mount("#app")
