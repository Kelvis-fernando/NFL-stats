<template>
    <div class="top-bar">
        <div class="itens" v-if="true">
            <span class="mx-5">
                <button class="btn btn-outline-light">
                    Login
                </button>
            </span>
            <span class="mx-5">
                <button class="btn btn-outline-light">
                    Cadastre-se
                </button>
            </span>
        </div>
        <div class="itens" v-else>
            <span class="mx-5">
                <button class="btn btn-outline-light">
                    <i class="bi bi-person-fill mx-2"></i>
                    Perfil
                </button>
            </span>
            <span class="mx-5">
                <button class="btn btn-outline-light">
                    <i class="bi bi-box-arrow-right mx-2"></i>
                    Logout
                </button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.top-bar {
    height: 70px;
    width: 81.5%;
    margin-left: 250px;
    background-color: #2048f7;
    color: #FFF;
    position: absolute;
}

.itens {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 15px;
}
</style>
