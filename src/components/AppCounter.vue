<template>
  <h1>Counter: {{ counter }}</h1>
</template>

<script>
import { eventEmitter } from "@/main";
export default {
  data() {
    return {
      counter: 0,
    };
  },
  created() {
    eventEmitter.$on("counterUpdated", (num, str) => {
      this.counter += num;
      console.log(str);
    });
  },
};
</script>