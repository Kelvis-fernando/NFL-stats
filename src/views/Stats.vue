<template>
    <div class="matches">
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Jogadas Ataque</th>
                        <th scope="col">Jardas Ataque</th>
                        <th scope="col">Jardas por jogada</th>
                        <th scope="col">Touchdowns</th>
                        <th scope="col">Jardas por Passe</th>
                        <th scope="col">Jardas por Touchdowns</th>
                        <th scope="col">Jardas por Jogada</th>
                        <th scope="col">Passes Interceptados</th>
                        <th scope="col">% Passes</th>
                        <th scope="col">Penaltes</th>
                        <th scope="col">Fumbles</th>
                        <th scope="col">Sacks</th>
                        <th scope="col">FirstDowns</th>
                        <th scope="col">QuarterbackHits</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(responses, index) in response"
                        v-bind:key="responses"
                    >
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ responses.TeamName }}</td>
                        <td>{{ responses.OffensivePlays }}</td>
                        <td>{{ responses.OffensiveYards }}</td>
                        <td>{{ responses.OffensiveYardsPerPlay }}</td>
                        <td>{{ responses.Touchdowns }}</td>
                        <td>{{ responses.PassingYards }}</td>
                        <td>{{ responses.PassingTouchdowns }}</td>
                        <td>{{ responses.PassingInterceptions }}</td>
                        <td>{{ responses.CompletionPercentage }}</td>
                        <td>{{ responses.Penalties }}</td>
                        <td>{{ responses.Fumbles }}</td>
                        <td>{{ responses.TimesSacked }}</td>
                        <td>{{ responses.Kickoffs }}</td>
                        <td>{{ responses.Sacks }}</td>
                        <td>{{ responses.PassingDropbacks }}</td>
                        <td>{{ responses.FirstDowns }}</td>
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
}
</style>
