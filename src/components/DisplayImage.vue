<template>
  <div class="card">
    <div class="card-image">
      <div v-if="value.images.length !== 0">
        <img :src="value.images[0].location" />
      </div>
    </div>
    <div class="card-header-title">
      <div class="columns">
        <div class="column">
          <p>
            {{ value.title }}
          </p>
          <div class="columns">
            <div class="column" id="date">
              <span
                class="is-italic has-text-weight-light is-size-7 has-text-link"
                >{{
                  moment(value.date)
                    .startOf("second")
                    .fromNow()
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <h5 class="card-content">{{ value.content }}</h5>
  </div>
</template>

<script>
import moment from "moment"
//import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js"

export default {
  props: {
    value: Object
  },
  data() {
    return {
      //carousels: []
    }
  },
  methods: {
    moment() {
      return moment(...arguments)
    }
  },
  created() {
    moment.locale("fr")
  },
  mounted() {
    /*this.carousels = bulmaCarousel.attach(".carousel", {
      breakpoints: [{ changePoint: 0, slidesToShow: 1, slidesToScroll: 1 }],
      effect: "translate"
    })

    for (let i = 0; i < this.carousels.length; i++) {
      this.carousels[i].on("before:show", state => {
        let elem = document.getElementsByClassName("item-" + state.index)
        elem[0].classList.add("is-hidden-mobile")
      })
      this.carousels[i].on("show", state => {
        let elem = document.getElementsByClassName("item-" + state.index)
        elem[0].classList.remove("is-hidden-mobile")
      })
    }*/
  }
}
</script>

<style lang="scss">
.card {
  border-radius: 10px;
  & img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}

.card-header-title #date {
  padding-top: 0.3rem !important;
}

.card-content {
  padding: 0.75rem !important;
  padding-top: 0 !important;
}
</style>
