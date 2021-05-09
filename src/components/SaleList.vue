<template>
  <table class="list table mb-5">
    <thead>
      <tr>
        <th scope="col">Código</th>
        <th scope="col">Nombre</th>
        <th scope="col">Stock</th>
        <th scope="col">Precio</th>
        <th scope="col">Vender</th>
      </tr>
    </thead>
    <tbody v-if="gamesAvailable && gamesAvailable.length === 0">
      <tr class="text-center">
        <td colspan="4">No hay juegos disponibles</td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr v-for="game in gamesAvailable" :key="game.codigo">
        <th scope="row">{{ game.codigo }}</th>
        <td>{{ game.nombre }}</td>
        <td>{{ game.stock }}</td>
        <td>{{ game.precio }}</td>
        <td>
          <button class="btn btn-success" @click="sell(gamesAvailable)">
            Vender
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "List",
  props: {
    saleList: {
      type: Array,
    },
  },
  computed: {
    gamesAvailable() {
      const game = this.saleList;
      if (!game) return [];
      const filteredGames = game.filter((fil) => fil.stock > 0);
      if (!filteredGames) return [];
      return filteredGames;
    },
  },
  methods: {
    ...mapMutations(["sellGame", "saveSale"]),
    sell(payload) {
      this.sellGame(payload);
      this.saveSale({
        codigo: payload,
        nombre: payload,
        precio: payload,
      });
    },
  },
};
</script>
