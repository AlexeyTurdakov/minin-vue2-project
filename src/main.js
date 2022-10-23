import Vue from "vue";
import App from "./App.vue";
//импортируем директиву
import Color from "./color.js";

// регистрируем используя метод directive
// первым паметром передаем название в виде строки
//вторым параметром передаём объект (экспортируем объект из color.js)
Vue.directive("colored", Color);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
