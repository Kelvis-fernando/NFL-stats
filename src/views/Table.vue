<template>
  <div class="table">
    <div class="afc">
      <div class="north">
        <h2>AFC NORTH</h2>
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
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="south"></div>
      <div class="west"></div>
      <div class="east"></div>
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
        console.log(el.NFC);
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
