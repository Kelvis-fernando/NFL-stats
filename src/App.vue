<template>
  <div class="app grid grid-template-columns">
    <Sidebar class="item" />
    <router-view class="item m-3" />
  </div>
</template>

<script>
import Sidebar from "./layout/Sidebar.vue";

export default {
  components: { Sidebar },
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
