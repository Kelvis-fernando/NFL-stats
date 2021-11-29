<template>
  <div class="matches">
    <div v-for="(responses, index) in response" v-bind:key="responses">
      <div class="card text-center m-2">
        <div class="card-header bg-card-header">Jogo {{ index + 1 }}</div>
        <div class="card-body">
          <div class="grid grid-template-columns">
            <div class="teams">
              <h6>{{ responses.TeamName.toUpperCase() }}</h6>
            </div>
            <div class="teams">
              <h6>{{ responses.Opponent }}</h6>
            </div>
          </div>
          <h5 class="card-title">Resultado</h5>
          <p class="card-text">
            {{ responses.Score }} - {{ responses.ScoreOpponent }}
          </p>
        </div>
        <div class="card-footer text-muted">
          {{ responses.Date }}
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
    const baseUrl = "http://localhost:3001/";
    axios
      .get(baseUrl + "partidas")
      .then((resp) => {
        console.log(resp.data);
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
