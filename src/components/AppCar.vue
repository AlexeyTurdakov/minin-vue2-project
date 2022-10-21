<template>
  <div class="car">
    <h2>Name: {{ carName }} / {{ reverseName }}</h2>
    <h2>Year: {{ carYear }}</h2>
    <button @click="changeName">change name</button>
  </div>
</template>

<script>
export default {
  // мы меняем имя внутри компонента
  // изменения надо переать в родительский

  props: {
    carName: String,
    carYear: {
      type: Number,
      reqired: true,
      default: 2018,
    },
  },

  methods: {
    changeName: function () {
      this.carName = "Mazds";
      // у каждого компонента есть специальный
      // метод $emit(имя паметра который прослушиваем, текущее значение)
      // "nameChanged" название события которое мы слушаем в родительском компоненте
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