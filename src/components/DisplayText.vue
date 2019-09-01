<template>
  <div class="columns is-vcentered">
    <div class="column is-12 has-text-centered">
      <h1 class="title">{{ value.title }}</h1>
      <h3 class="subtitle">{{ value.content }}</h3>
      <span class="is-italic has-text-weight-light is-size-7">{{
        moment(value.date)
          .startOf("hour")
          .fromNow()
      }}</span>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  props: {
    value: Object
  },
  data() {
    return {}
  },
  methods: {
    moment() {
      return moment(...arguments)
    }
  },
  created() {
    moment.locale("fr")
  }
}
</script>
