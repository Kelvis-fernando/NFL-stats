<template>
  <div class="matches">
    <div>
      <table class="table align-table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Times</th>
            <th scope="col">Jogadas Ataque</th>
            <th scope="col">Jardas Ataque</th>
            <th scope="col">Jardar por Jogada</th>
            <th scope="col">Touchdowns</th>
            <th scope="col">Jardas por passe</th>
            <th scope="col">Passes p/ Touchdown</th>
            <th scope="col">Passes Interceptados</th>
            <th scope="col">%Passes Completos</th>
            <th scope="col">Ver mais</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="responses in response"
            v-bind:key="responses"
            class="colum-style"
          >
            <th scope="row"></th>
            <td class="stats-format team">{{ responses.TeamName }}</td>
            <td class="stats-format">{{ responses.OffensivePlays }}</td>
            <td class="stats-format">{{ responses.OffensiveYards }}</td>
            <td class="stats-format">{{ responses.OffensiveYardsPerPlay }}</td>
            <td class="stats-format">{{ responses.Touchdowns }}</td>
            <td class="stats-format">{{ responses.PassingYards }}</td>
            <td class="stats-format">{{ responses.PassingTouchdowns }}</td>
            <td class="stats-format">{{ responses.PassingInterceptions }}</td>
            <td class="stats-format">{{ responses.CompletionPercentage }}</td>
            <td class="stats-format">
              <button class="btn btn-outline-primary">Ver Mais</button>
            </td>
          </tr>
        </tbody>
      </table>
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
      .get(baseUrl + "estatisticas")
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

  .align-table {
    margin-left: -90px;

    .colum-style:hover {
      background-color: #999;
      color: #fff;
      font-weight: bold;
    }

    .stats-format {
      text-align: center;
      padding-top: 25px;
      height: 80px;
    }

    .team {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
