<template>
  <div class="table-teams">
    <div class="nfc">
      <div class="north my-5">
        <h2>NFC NORTH</h2>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">VItorias</th>
              <th scope="col">Derrotas</th>
              <th scope="col">Empates</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="N in NFC.North" :key="N">
              <td>{{ N.Name }}</td>
              <td>{{ N.Wins }}</td>
              <td>{{ N.Losses }}</td>
              <td>{{ N.Ties }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="east my-5">
        <h2>NFC NORTH</h2>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">VItorias</th>
              <th scope="col">Derrotas</th>
              <th scope="col">Empates</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="N in NFC.East" :key="N">
              <td>{{ N.Name }}</td>
              <td>{{ N.Wins }}</td>
              <td>{{ N.Losses }}</td>
              <td>{{ N.Ties }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="south my-5">
        <h2>NFC NORTH</h2>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">VItorias</th>
              <th scope="col">Derrotas</th>
              <th scope="col">Empates</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="N in NFC.South" :key="N">
              <td>{{ N.Name }}</td>
              <td>{{ N.Wins }}</td>
              <td>{{ N.Losses }}</td>
              <td>{{ N.Ties }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="west my-5">
        <h2>NFC NORTH</h2>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">VItorias</th>
              <th scope="col">Derrotas</th>
              <th scope="col">Empates</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="N in NFC.West" :key="N">
              <td>{{ N.Name }}</td>
              <td>{{ N.Wins }}</td>
              <td>{{ N.Losses }}</td>
              <td>{{ N.Ties }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

function getDataTable() {}
export default {
  name: "Table",
  methods: {
    getDataTable,
  },
  created: function () {
    axios.get("http://localhost:3000/tabela").then((response) => {
      response.data.forEach((el) => {
        this.NFC = el.NFC;
      });
    });
  },
  data() {
    return {
      NFC: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.nfc {
  margin-top: 100px;
  // display: grid;
  // grid-template-columns: 2fr 2fr;

  // .north,
  // .south,
  // .east,
  // .west {
  //   margin: 0px 25px 25px 25px;
  //   grid-template-rows: 300px 300px;
  // }
}

.afc {
  display: flex;
  flex-wrap: wrap;
}
</style>
