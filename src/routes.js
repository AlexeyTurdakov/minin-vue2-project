import VueRouter from "vue-router";
import Home from "./components/Home.vue";

// см.lazy loading
// import Cars from "./components/Cars.vue";

import Car from "./components/Car.vue";
import CarFull from "./components/CarFull.vue";
import ErrorCmp from "./components/Error.vue";

// lazy loading используется для оптимизации загрузки приложения
// это принципиально для больших модулей
const Cars = (resolve) => {
  require.ensure(["./components/Cars.vue"], () => {
    resolve(require("./components/Cars.vue"));
  });
};

export default new VueRouter({
  routes: [
    // регистрация компонентов
    {
      path: "/",
      component: Home,
    },
    {
      path: "/cars",
      component: Cars,
      name: "cars",
    },
    {
      //:id - так указывается динамическое свойство
      path: "/car/:id",
      component: Car,
      //для каждого компонента существует специальное поле children
      // в котором мы указываем вложенный компонент
      children: [
        {
          path: "full", //localhost:8000/car/10/full
          component: CarFull,
          // для генерации имени роута(нужно для упрощения отображения ссылки, что бы не писать, например: '/path/ + id + /path/')
          name: "carFull",
          // у каждого роута есть специальный метод, который принимает три параметра
          beforeEnter(to, from, next) {
            console.log("beforeenter");
            next(true);
            // if (true) {
            //   //чтобы продолжить выполнение роутинга мы должны вызвать функцию next
            //   // значение false запрещает данному роутингу выполняться
            //   // это первый способ как мы можем контролировать выполнение роутинга
            //   next(true);
            // } else {
            //   next(false);
            // }
          },
        },
      ],
    },

    // редирект
    {
      path: "/none",
      //   redirect: "/",

      // мы также модеделать навигацию по именованным роутам
      redirect: {
        name: "cars",
      },
    },

    //обработка несуществующего роута (страница 404)
    {
      path: "*",
      component: ErrorCmp,
    },
  ],
  // убрать хэш
  mode: "history",

  // специальная функция для использования тегов скролла
  scrollBehavior(to, from, savedPosition) {
    // переход к нужному месту при навигации savedPosition
    if (savedPosition) {
      return savedPosition;
    }
    //сделать скролл по текущему хэшу
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }

    return {
      x: 0,
      y: 1000,
    };
  },
});
