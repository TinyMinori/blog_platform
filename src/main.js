import Vue from "vue"
import App from "@/App.vue"
import router from "@/router.js"
import strings from "@/strings.js"
import "@/layouts/index.js"
import "@/style.scss"

Vue.prototype.$s = strings

Vue.config.productionTip = false

const favicon = {
  type: "image/x-icon",
  rel: "shortcut icon",
  href: "./static/root/favicon.ico"
}

new Vue({
  router,
  render: h => h(App),
  created() {
    if (process.env.NODE_ENV === "development") {
      var link = document.querySelector("link[rel='shortcut icon']")
      link.type = favicon.type
      link.rel = favicon.rel
      link.href = favicon.href
      document.head ||
        (document.head = document.getElementsByTagName("head")[0])
      document.head.appendChild(link)
    }
    document.title = this.$s.title
  }
}).$mount("#app")
