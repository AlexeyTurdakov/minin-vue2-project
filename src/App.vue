<template>
  <div id="app">
    //обращаемся к диретиве
    <h2 v-colored>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "am title",
    };
  },
  components: {},

  methods: {},
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
