<template>
  <div
    class="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white sidebar-bg"
    style="width: 250px;"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32"></svg>
      <span class="fs-4">NFL Stats</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <i class="fas fa-home"></i>
        <a href="#" class="nav-link text-white" aria-current="page">
          <i class="fas fa-home"></i><span class="ms-2">Home</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <i class="fa fa-dashboard"></i><span class="ms-2">Partidas</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <i class="fa fa-first-order"></i
          ><span class="ms-2">Estatisticas</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <i class="fa fa-cog"></i><span class="ms-2">Tabela</span>
        </a>
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
