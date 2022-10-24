<template>
  <div id="app">
    <h2 v-colored v-if="visible">{{ title }}</h2>
    <button @click="visible = !visible">visible</button>
    <button @click="title = 'new Title'">newTitle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "am title",
      visible: true,
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
