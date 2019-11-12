import Cookies from "cookies-js"

exports.connect = (username, password) => {
  return new Promise((resolve, reject) => {
    this.$http
      .post(process.env.API_URL + "/login", {
        username: username,
        password: password
      })
      .then(ctx => {
        if (Cookies.enabled) {
          Cookies.set("token", ctx.body.token)
          resolve()
        } else
          reject(
            "Your browser doesn't allow cookies. Enable them to connect properly."
          )
      })
      .catch(error => {
        reject(error.body.message)
      })
  })
}

exports.isConnected = () => {
  if (Cookies.enabled && Cookies.get("token") !== undefined) return true
  return false
}

exports.isPublisher = () => {
  if (Cookies.enabled && Cookies.get("role") === "publisher") return true
  return false
}
