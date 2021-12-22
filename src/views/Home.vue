<template>
  <div class="home">
    <h1 class="welcome-home">Bem vindo ao NFL Stats</h1>
    <Carousel :items-to-show="3" :wrap-around="true" class="carousel-style">
      <Slide v-for="team in teams" :key="team">
        <div class="carousel__item">
          <div class="row">
            <div class="container-fluid">
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">
                    <img
                      :src="team.WikipediaLogoUrl"
                      alt="logo"
                      class="logo-team"
                    />
                  </h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ team.FullName }}
                  </h6>
                  <p class="card-text">
                    <strong>Head Coach:</strong>
                    {{ team.HeadCoach }}
                  </p>
                  <span class="mx-4">{{ team.Conference }}</span>
                  <span class="mx-4">{{ team.Division }}</span>
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
  Axios.get("http://localhost:3000/").then((response) => {
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
  created: function () {
    Axios.get("http://localhost:3000/").then((response) => {
      this.teams = response.data;
      console.log(response.data);
    });
  },
  data() {
    return {
      teams: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 500px;

  .welcome-home {
    text-align: center;
    margin-top: 100px;
  }

  .carousel-style {
    width: 900px;
    margin-top: 170px;
  }

  .logo-team {
    width: 100px;
    border-radius: 50%;
  }
}
</style>
