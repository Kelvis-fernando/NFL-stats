<template>
  <div class="matches">
    <div v-for="(responses, index) in response" v-bind:key="responses">
      <div class="card text-center m-2 card-image card-style">
        <div class="card-body">
          <div class="result">Game {{ index + 1 }}</div>
          <span class="mx-5 font-bold result"
            ><strong>{{ responses.Team }}</strong></span
          >
          <span class="mx-5 font-bold result"
            ><strong>{{ responses.Opponent }}</strong></span
          >
          <div class="grid grid-template-columns"></div>
          <div class="result-game">
            <h5 class="card-title m-3">Resultado</h5>
            <p class="card-text ">
              {{ responses.Score }} - {{ responses.ScoreOpponent }}
            </p>
          </div>
        </div>
        <div class="data">
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

  .card-image {
    border-radius: 50px;
    font-size: 23px;
    background-image: url("../assets/nfl-background.png");
    background-size: cover;
  }

  .card-style {
    width: 480px;
    color: #fff;
    box-shadow: 5px 2px 2px rgb(148, 148, 148);

    .result-game {
      background-color: rgb(121, 121, 121, 0.9);
      width: 150px;
      margin: 0px auto;
    }

    .result {
      background-color: rgb(121, 121, 121, 0.9);
      width: 100px;
      margin: 0px auto;
      border-radius: 30px;
    }

    .data {
      background-color: rgb(121, 121, 121, 0.7);
      width: 150px;
      margin: 0px auto;
      border-radius: 30px;
    }
  }

  .card-style:hover {
    box-shadow: 10px 5px 5px 5px rgb(148, 148, 148);
  }

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
