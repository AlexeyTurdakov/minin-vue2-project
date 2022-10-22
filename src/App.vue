<template>
  <div id="app">
    <h1>{{ carName }}</h1>
    <!-- Альтернативный способ взаимодействовать с компонентами -->
    <!-- байндим новую функцию в компонент -->
    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameAudi"
      @nameChanged="carName = $event"
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

  // заведем новый метод:
  methods: {
    changeNameAudi() {
      this.carName = "Audi";
    },
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
