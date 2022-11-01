<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <p>
      сделаем программную навигацию для этого создадим кнопку и повесим на неёё
      обработчик click
    </p>
    <button class="btn btn-small btn-info" @click="goBackToCars">back</button>
    <br /><br />
    <p>
      воспользуемся вложенными роутами для отображения информации при клике на
      кнопку
    </p>
    <!-- 
        первый способ с длинным адресом без именования url в routes.js
        <router-link
      :to="'/car/' + id + '/full'"
      class="btn btn-small btn-info"
      @click="goBackToCars"
    >
      full info
    </router-link> -->

    <!-- второй способо используя routes.name в routes.js -->

    <!-- мы можем передать параметры в компонент используя метод query -->
    <!-- #hash мы передаём следующим праметром после query -->
    <router-link
      :to="{
        name: 'carFull',
        params: { id: id },
        query: { name: 'audi', year: 2000 },
        hash: '#scroll',
      }"
      class="btn btn-small btn-info"
      @click="goBackToCars"
    >
      full info
    </router-link>

    <p>необходимо указать куда мы будем рендерить дочерние роуты:</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //считываем динамическую переменную id которую мы передаём в routes :id
      // для этого обращаемся следующим образом:(1 подход)
      //   id: this.$router.currentRoute.params["id"],

      //можем использовать системную переменную $route которая по сутии равна this.$router.currentRoute
      id: this.$route.params["id"],
    };
  },

  watch: {
    // для отслеживания изменений мы обращаемся к функции route
    // она принимает два параметра toRoute и fromRoute
    // таким образом мы можем отслеживать динамически изменения
    $route(toR, fromR) {
      this.id = toR.params["id"];
    },
  },

  methods: {
    goBackToCars() {
      //для создания программной навигации надо обратиться к системной
      // переменной router
      // специальный метод который этим занимается называется push
      // подобным образом мы осуществляем программную навигацию без директивы router-link
      this.$router.push("/cars");
    },
  },

  //данный метод вызывается перед тем как мы хотим покинуть страницу
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    if (window.confirm("are you shure want to live?")) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>