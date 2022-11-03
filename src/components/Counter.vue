<template>
  <div>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      // так мы можем обратиться к store
      //   console.log(this.$store.state.counter.counter);
      return this.$store.state.counter;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>