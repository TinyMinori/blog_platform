<template> </template>
<script>
import Cookies from "cookies-js"

export default {
  mounted() {
    if (Cookies.enabled) Cookies.expire("token")
    this.$router.push({ path: "/" })
  }
}
</script>
