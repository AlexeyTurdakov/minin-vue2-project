<template>
  <div>
    <!-- обработка входящих query параметров -->
    <h4>Car name: {{ $route.query.name }}</h4>
    <h4>Car year-methods: {{ year }}</h4>
    <h4>Car year: {{ $route.query.year }}</h4>

    <div class="scroll"></div>
    <!-- http://localhost:8080/car/3/full?name=audi&year=2000#scroll 
    будет скролить до элемента
    -->
    <h6 id="scroll">hello footer</h6>
  </div>
</template>

<script>
export default {
  //другой способ обработки query параметров
  computed: {
    year() {
      return this.$route.query.name;
    },
  },
  // один из способов контролировать роутинг использование функции beforeRouteEnter
  // см. routes.js beforeEnter
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next(true);
  },
};
</script>

<style scoped>
.scroll {
  width: 100px;
  height: 1000px;
  background-color: grey;
}
</style>