<template>
  <div class="border">
    <h2>{{ carName }}</h2>
    <slot name="first"></slot>
    <h2>Поле name позволяет создавать именованные слоты</h2>
    <hr />
    <slot name="second"></slot>
    <button @click="addCounter">UpdateCounter</button>
  </div>
</template>

<script>
import { eventEmitter } from "@/main";

export default {
  props: {
    carName: ["carName"],
  },

  methods: {
    addCounter() {
      eventEmitter.$emit("counterUpdated", 3, "str");
    },
  },

  computed: {},

  data() {
    return {};
  },
};
</script>

<style scoped>
.border {
  border: 1px solid black;
}
</style>