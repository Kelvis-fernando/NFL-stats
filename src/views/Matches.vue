<template>
  <div class="matches">
    <div v-for="(responses, index) in response" v-bind:key="responses">
      <div class="card text-center m-2">
        <div class="card-header bg-card-header">Jogo {{ index + 1 }}</div>
        <div class="card-body">
          <span class="mx-5 font-bold"><strong>{{ responses.Team }}</strong></span>
          <span class="mx-5 font-bold"><strong>{{ responses.Opponent }}</strong></span>
          <div class="grid grid-template-columns">
          </div>
          <h5 class="card-title m-3">Resultado</h5>
          <p class="card-text">
            {{ responses.Score }} - {{ responses.ScoreOpponent }}
          </p>
        </div>
        <div class="card-footer text-muted">
          {{ responses.Date.substr(0, 10) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  inheritAttrs: false,
  data() {
    return {
      response: [],
    };
  },
  created: function () {
    const baseUrl = "http://localhost:3000/";
    axios
      .get(baseUrl + "partidas")
      .then((resp) => {
        this.response = resp.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.matches {
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;

  .grid {
    display: grid;
  }

  .grid-template-columns {
    grid-template-columns: 135px 135px 135px;
    align-items: center;
  }

  .align {
    display: flex;
    flex-wrap: wrap;
  }

  .bg-card-header {
    background-color: #2048f7;
    color: #fff;
    font-weight: bold;
  }
}
</style>
