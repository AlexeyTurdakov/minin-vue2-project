<template>
  <div>
    <button class="btn btn-primary" @click="changeVal(1)">+</button>
    <br />
    <br />
    <button class="btn btn-primary" @click="changeVal(-1)">-</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeVal(value) {
      return this.$store.commit("changeCounter", value);

      // async action поле обращаемся
      // для передачи нескольких параметров мы можем использовать объект
      // this.$store.dispatch("asyncChangeCounter", {counterValue: val, timerDelay: 200}); // см. action в store index.js
    },
  },
};
</script>

<style lang="scss" scoped>
</style>