<template>
  <div class="ventas container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center mt-5 display-5">Venta de Juegos</h1>
        <h2 class="my-5 text-center">
          Cantidad de juegos disponibles: {{ gamesTotal }}
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12" v-if="games">
        <SaleList :saleList="games" />
      </div>
      <div class="col-12" v-else>
        <h2>No hemos encontrado juegos disponibles. Intenta de nuevo.</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SaleList from "@/components/SaleList.vue";
export default {
  name: "Ventas",
  components: {
    SaleList,
  },
  computed: {
    ...mapState(["games"]),
    ...mapGetters(["gamesTotal"]),
  },
};
</script>

<style></style>
