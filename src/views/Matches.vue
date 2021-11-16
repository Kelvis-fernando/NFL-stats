<template>
    <div class="matches w-75">
        <div
            class="card text-center m-2"
            v-for="responses in response"
            v-bind:key="responses"
        >
            <div class="card-header">Featured</div>
            <div class="card-body">
                <div class="grid grid-template-columns">
                    <div class="teams">
                        <h6>{{ responses.Team }}</h6>
                    </div>
                    <div class="teams">
                        <h6>{{ responses.Team }}</h6>
                    </div>
                </div>
                <h5 class="card-title">Resultado</h5>
                <p class="card-text">20 - 17</p>
                <button @click="getMatches" class="btn btn-primary">
                    Ver mais
                </button>
            </div>
            <div class="card-footer text-muted">2 days ago</div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

function getMatches() {
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
}

export default {
    inheritAttrs: false,
    data() {
        return {
            response: [],
        };
    },
    methods: {
        getMatches,
    },
};
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    align-items: start;
}

.grid-template-columns {
    grid-template-columns: 200px 200px;
    align-items: center;
}
</style>
