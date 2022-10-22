<template>
  <div class="car">
    <h2>Name: {{ carName }} / {{ reverseName }}</h2>
    <h2>Year: {{ carYear }}</h2>
    <button @click="changeName">change name</button>
    <!-- заведем новую кнопку -->
    <button @click="changeFunc()">change name - func from parent</button>
  </div>
</template>

<script>
export default {
  props: {
    carName: String,
    carYear: {
      type: Number,
      reqired: true,
      default: 2018,
    },
    // запишем в props
    changeFunc: Function,
  },

  methods: {
    changeName: function () {
      this.carName = "Mazds";
      this.$emit("nameChanged", this.carName);
    },
  },

  computed: {
    reverseName() {
      return this.carName.split("").reverse().join("");
    },
  },

  data() {
    return {};
  },
};
</script>

<style>
.car {
  color: green;
  border: 1px solid black;
  margin: 20px 50px;
}
</style>