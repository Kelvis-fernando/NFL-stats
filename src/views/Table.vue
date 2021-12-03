<template>
  <div class="table">
      <div class="nfc">
        <div class="north mx-5">
          <h2>NFC NORTH</h2>
          <table class="table table-dark w-50">
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
        <div class="south mx-5">
          <h2>NFC South</h2>
          <table class="table table-dark w-50">
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
        <div class="west mx-5">
          <h2>NFC West</h2>
          <table class="table table-dark w-50">
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
        <div class="east mx-5">
          <h2>NFC East</h2>
          <table class="table table-dark w-75">
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
        axios.get("http://localhost:3001/tabela").then((response) => {
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
    display: flex;
    flex-wrap: wrap;
}
.afc {
    display: flex;
    flex-wrap: wrap;
}
.table {
    margin-left: -90px;
    width: 900px;
}
</style>
