<template>
  <div class="container pt-2">
    <app-counter></app-counter>
    <app-counter2></app-counter2>
    <app-button></app-button>
  </div>
</template>

<script>
import AppButton from "./components/Button.vue";
import AppCounter from "./components/Counter.vue";
import AppCounter2 from "./components/SecCounter.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppButton,
    AppCounter,
    AppCounter2,
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
}
</style>
