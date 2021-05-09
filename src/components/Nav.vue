<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link :to="{ name: 'Inicio' }" class="navbar-brand"
        >32Bits</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex flex-row-reverse"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'Inicio' }" class="active nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Busquedas' }" class="nav-link"
              >Busquedas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Ventas' }" class="nav-link"
              >Ventas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Total' }" class="nav-link"
              >Total</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style></style>
