<template>
    <div class="app grid grid-template-columns">
        <Sidebar class="item" />
        <router-view class="item m-3" />
        <TopBar />
    </div>
</template>

<script>
import Sidebar from "./layout/Sidebar.vue";
import TopBar from "./components/top-bar/TopBar.vue";

export default {
    components: { Sidebar, TopBar },
};
</script>

<style lang="scss">
/* Grid Container */
.grid {
    display: grid;
}

.grid-template-columns {
    grid-template-columns: 350px 600px;
}
</style>
