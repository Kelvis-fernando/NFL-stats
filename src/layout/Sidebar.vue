<template>
  <div
    class="flex-column vh-100 flex-shrink-0 p-3 text-white sidebar-bg"
    style="width: 250px"
  >
    <router-link
      to="/"
      class="
        d-flex
        align-items-center
        mb-3 mb-md-0
        me-md-auto
        text-white text-decoration-none
      "
    >
      <svg class="bi me-2" width="40" height="32"></svg>
      <span class="fs-4">NFL Stats</span>
      <hr />
    </router-link>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <i class="fas fa-home"></i>
        <router-link
          to="/"
          class="nav-link text-white mx-3"
          aria-current="page"
        >
          <i class="bi bi-house-fill"></i><span class="ms-2">Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/partidas" class="nav-link text-white mx-3">
          <i class="bi bi-joystick"></i><span class="ms-2">Partidas</span>
        </router-link>
      </li>
      <li>
        <router-link to="/estatisticas" class="nav-link text-white mx-3">
          <i class="bi bi-activity"></i><span class="ms-2">Estatisticas</span>
        </router-link>
      </li>
      <li>
        <router-link to="/tabela" class="nav-link text-white mx-3">
          <i class="bi bi-table"></i><span class="ms-2">Tabela</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  background-color: #eee;
}

.nav-link:hover {
  background-color: #525252 !important;
}

.nav-link .fa {
  transition: all 1s;
}

.nav-link:hover .fa {
  transform: rotate(360deg);
}

.sidebar-bg {
  background-color: #2048f7;
}
</style>
