<template>
  <div id="nav">
    <Sidebar />
  </div>
  <router-view />
</template>

<script>
import Sidebar from "./layout/Sidebar.vue";

export default {
  components: { Sidebar },
};
</script>

<style lang="scss"></style>
