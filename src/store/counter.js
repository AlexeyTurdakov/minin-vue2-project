export default {
  state: {
    // объект который описывает всё состояние приложения
    counter: 10,
  },
  getters: {
    // спасают от большой дубликации кода
    // сущность позволяющая изменить state и отдать на отрисовку
    computedCounter(state) {
      return state.counter * 100;
    },
  },
  mutations: {
    // по сути своей сеттеры, которые позволяют мутировать state
    // value или payload передаём вторым параметром из компонента button
    // можем передавать только один параметр в качестве payload
    // мы не должны передавать асинхронных событий в mutation

    changeCounter(state, value) {
      state.counter += value;
    },
  },
  actions: {
    // все асинхронные операции принято проводить в объекте actions
    // часто используют деструктуризацию:

    // asyncChangeCounter({commit}, payload) {
    //setTimeout(()=> {
    //  commit('changeCounter', payload)
    // }, 1000)

    asyncChangeCounter(context, payload) {
      setTimeout(() => {
        // в объекте контекст тоже есть метод commit
        // первым параметром принимает функцию mutation
        // обработать несколько параметров второго параметра, который мы передавали из
        // компонента как объект, мы можем вот так: payload.counterValue, payload.timeDelay
        context.commit("changeCounter", payload);
      }, 1000);
    },
  },
  // способ декомпозиции файла store на множества модулей
};
