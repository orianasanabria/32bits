<template>
  <table class="list table mb-5">
    <thead>
      <tr>
        <th scope="col">Código</th>
        <th scope="col">Nombre</th>
        <th scope="col">Stock</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody v-if="filterGames && filterGames.length === 0">
      <tr class="text-center">
        <td colspan="4">No hay juegos disponibles</td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr v-for="game in filterGames" :key="game.codigo">
        <th scope="row">{{ game.codigo }}</th>
        <td>{{ game.nombre }}</td>
        <td>{{ game.stock }}</td>
        <td>{{ game.precio }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "List",
  props: {
    gameList: {
      type: Array,
    },
  },
  computed: {
    gamesAvailable() {
      const game = this.gameList;
      if (!game) return [];
      const filteredGames = game.filter((fil) => fil.stock > 0);
      if (!filteredGames) return [];
      return filteredGames;
    },
    filterGames() {
      const games = this.gamesAvailable;
      const filterVuex = this.codeFilter;
      if (filterVuex === "") return games;
      const filtered = games.filter((fil) => fil.codigo === filterVuex);
      if (!filtered) return [];
      return filtered;
    },
    ...mapState(["codeFilter"]),
  },
};
</script>

<style></style>
