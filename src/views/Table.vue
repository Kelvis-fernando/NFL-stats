<template>
  <div class="table">
    <div class="afc">
      <div class="north">
        <h2>NFC NORTH</h2>
        <table class="table table-striped">
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
              <td>{{N.Name}}</td>
              <td>{{N.Wins}}</td>
              <td>{{N.Losses}}</td>
              <td>{{N.Ties}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="south">
        <h2>NFC South</h2>
        <table class="table table-striped">
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
              <td>{{N.Name}}</td>
              <td>{{N.Wins}}</td>
              <td>{{N.Losses}}</td>
              <td>{{N.Ties}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="west">
        <h2>NFC West</h2>
        <table class="table table-striped">
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
              <td>{{N.Name}}</td>
              <td>{{N.Wins}}</td>
              <td>{{N.Losses}}</td>
              <td>{{N.Ties}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="east">
        <h2>NFC East</h2>
        <table class="table table-striped">
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
              <td>{{N.Name}}</td>
              <td>{{N.Wins}}</td>
              <td>{{N.Losses}}</td>
              <td>{{N.Ties}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="nfc">
      <div class="north"></div>
      <div class="south"></div>
      <div class="west"></div>
      <div class="east"></div>
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
      console.log(response.data);
      response.data.forEach((el) => {
        this.NFC = el.NFC;
        this.AFC = el.AFC;
        console.log(this.NFC);
        console.log(this.AFC);
      });
    });
  },
  data() {
    return {
      NFC: [],
      AFC: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 800px;
}
</style>
