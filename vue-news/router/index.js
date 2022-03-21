import { createRouter, createWebHistory } from 'vue-router';
// import NewsView from "../src/views/NewsView.vue";
// import JobsView from "../src/views/JobsView.vue";
// import AskView from '../src/views/AskView.vue';
import UserView from "../src/views/UserView.vue";
import ItemView from "../src/views/ItemView.vue";
import createListView from '../src/views/CreateListView'; 


//Vue.use(VueRouter);

//path : url 주소
//url 주소로 갔을 때 표시될 컴포넌트
const routes = [
  { path: "/", redirect: "/news" },
  //hoc
  { path: "/news", name: "news", component: createListView("NewsView") }, //component: NewsView },
  { path: "/ask", name: "ask", component: createListView("AskView") }, //component: AskView },
  { path: "/jobs", name: "jobs", component: createListView("JobsView") }, //component: JobsView },
  //mixin
  // { path: "/news", name: "news", component: NewsView },
  // { path: "/ask", name: "ask", component: AskView },
  // { path: "/jobs", name: "jobs", component: JobsView },
  { path: "/user/:id", name: "user", component: UserView },
  { path: "/item/:id", name: "item", component: ItemView },
];

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router