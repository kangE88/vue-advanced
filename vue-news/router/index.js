import { createRouter, createWebHistory } from 'vue-router';
import NewsView from "../src/views/NewsView.vue";
import JobsView from "../src/views/JobsView.vue";
import AskView from '../src/views/AskView.vue';
import UserView from "../src/views/UserView.vue";
import ItemView from "../src/views/ItemView.vue";
// import createListView from '../src/views/CreateListView';
import { emitter } from "../src/main";
import store from '../src/store';


//Vue.use(VueRouter);

//path : url 주소
//url 주소로 갔을 때 표시될 컴포넌트
const routes = [
  { path: "/", redirect: "/news" },
  //hoc
  // { path: "/news", name: "news", component: createListView("NewsView") },
  // { path: "/ask", name: "ask", component: createListView("AskView") },
  // { path: "/jobs", name: "jobs", component: createListView("JobsView") },
  //mixin
  {
    path: "/news",
    name: "news",
    component: NewsView,
    beforeEnter: (to, from, next) => {
      //ex1
      // if(to.matched === ''){
      //   next();
      // }
      // //ex2
      // if(!to.auth){
      //   next();
      // } else {
      //   router.push('/login');
      // }
      emitter.emit("start:spinner");
      // store.dispatch('FETCH_LIST', this.$route.name)
      store.dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log("fetched");
          //emitter.emit("end:spinner");
          next();
        })
        .catch((error) => {
          console.log(error);
        });
      
    },
  },
  {
    path: "/ask",
    name: "ask",
    component: AskView,
    beforeEnter: (to, from, next) => {
      emitter.emit("start:spinner");
      store.dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log("fetched");
          //emitter.emit("end:spinner");
          next();
        })
        .catch((error) => {
          console.log(error);
        });
      
    },
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
    beforeEnter: (to, from, next) => {
      emitter.emit("start:spinner");
      store.dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log("fetched");
          //emitter.emit("end:spinner");
          next();
        })
        .catch((error) => {
          console.log(error);
        });
      
    },
  },
  { path: "/user/:id", name: "user", component: UserView },
  { path: "/item/:id", name: "item", component: ItemView },
];

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router