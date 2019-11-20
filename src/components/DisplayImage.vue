<template>
  <div class="card">
    <div class="card-image">
      <div ref="images"></div>
    </div>
    <div class="card-header-title">
      <div class="columns">
        <div class="column">
          <p ref="title"></p>
          <div class="columns">
            <div class="column" id="date">
              <span
                ref="date"
                class="is-italic has-text-weight-light is-size-7 has-text-link"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h5 class="card-content" ref="content"></h5>
  </div>
</template>

<script>
import moment from "moment"
//import bulmaCarousel from "bulma-carousel"
import { tns } from "tiny-slider/src/tiny-slider"

export default {
  props: {
    value: Object
  },
  data() {
    return {
      carousel: []
    }
  },
  methods: {
    moment() {
      return moment(...arguments)
    }
  },
  mounted() {
    this.$refs.title.textContent = this.value.title
    this.$refs.content.textContent = this.value.content
    this.$refs.date.textContent = this.moment(this.value.date)
      .startOf("second")
      .fromNow()

    let imagesDisplay = this.$refs.images
    if (this.value.images.length > 1) {
      let slider = document.createElement("div")
      slider.classList.add("carousel")

      for (let i = 0; i < this.value.images.length; i++) {
        let container = document.createElement("div")
        let image = document.createElement("img")
        image.src = this.value.images[i].location

        container.appendChild(image)
        slider.appendChild(container)
      }
      imagesDisplay.append(slider)

      this.carousels = tns({
        container: slider,
        autoWidth: true,
        autoHeight: true,
        loop: true,
        controls: false,
        navPosition: "bottom",
        items: this.value.images.length,
        slideBy: 1,
        mode: "carousel"
      })
    } else if (this.value.images.length === 1) {
      let image = document.createElement("img")
      image.src = this.value.images[0].location
      imagesDisplay.appendChild(image)
    }
  }
}
</script>

<style lang="scss">
@import "../style.scss";

.card {
  border-radius: 10px;
  & .card-image {
    & img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
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
