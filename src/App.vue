<template>
  <div id="app">
    <h1>{{ carName }}</h1>
    <!-- ставим обработчик v-on:имя передаваемого параметра и можем назначить
      функцию или написать в in-line стиле -->
    <app-car
      @nameChanged="carName = $event"
      :carName="carName"
      :carYear="carYear"
    ></app-car>
  </div>
</template>

<script>
import Car from "./components/AppCar.vue";

export default {
  data() {
    return {
      carName: "ford",
      carYear: 2015,
    };
  },
  components: {
    appCar: Car,
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
