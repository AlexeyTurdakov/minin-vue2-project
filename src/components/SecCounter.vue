<template>
  <div>
    <p>Counter: {{ counter }}</p>
  </div>
</template>
  
  <script>
export default {
  computed: {
    counter() {
      // обращаемся к геттеру как к объекту, vuex сам вызовет функцию
      return this.$store.getters.computedCounter;
    },
  },
};
</script>
  
  <style lang="scss" scoped>
</style>