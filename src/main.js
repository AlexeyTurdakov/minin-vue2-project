import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router"; // подключаем
import router from "./routes";


Vue.use(VueRouter);

new Vue({
  router, // регистрируем
  render: (h) => h(App),
}).$mount("#app");
