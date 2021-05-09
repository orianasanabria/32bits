<template>
  <div class="busquedas">
    <h1 class="display-5 mt-5 text-center">Listado de Juegos Disponibles</h1>
    <h2 class="my-5 text-center">Cantidad de juegos: {{ gamesTotal }}</h2>
    <div class="container">
      <div class="row">
        <div class="col-7 m-auto">
          <div class="form-group mb-5">
            <input
              v-model="filter"
              type="text"
              class="form-control"
              placeholder="Ingresa el código de un juego"
              @keyup.enter="filterCode"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12" v-if="games">
          <List :gameList="games" />
        </div>
        <div class="col-12" v-else>
          <h2>No hemos encontrado juegos disponibles. Intenta de nuevo.</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "Busquedas",
  components: {
    List,
  },
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    ...mapState(["games"]),
    ...mapGetters(["gamesTotal"]),
  },
  methods: {
    ...mapMutations(["addCode"]),
    filterCode() {
      this.addCode(this.filter);
    },
  },
};
</script>

<style></style>
