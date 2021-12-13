<template>
  <div class="home">
    <h1>Bem vindo ao NFL Stats</h1>
    <h1>Bem vindo ao NFL Stats</h1>
    <Carousel
      :items-to-show="3"
      :wrap-around="true"
      style="width: 900px; margin-top: 170px"
    >
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <div class="row">
            <div class="container-fluid">
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Axios from "axios";

function getTeamsData() {
  Axios.get("http://localhost:3000/home")
    .then((response) => {
        console.log(response.data);
    });
}

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  methods: {
    getTeamsData,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 500px;
}
</style>
