import { createRouter, createWebHistory } from 'vue-router';
import NewsView from "../src/views/NewsView.vue";
import JobsView from "../src/views/JobsView.vue";
import AskView from '../src/views/AskView.vue';
import UserView from "../src/views/UserView.vue";
import ItemView from "../src/views/ItemView.vue";



//Vue.use(VueRouter);

//path : url 주소
//url 주소로 갔을 때 표시될 컴포넌트
const routes = [
        { path: '/', redirect: '/news' },
        { path: '/news', name:'News', component: NewsView }, 
        { path: '/ask', name:'Ask', component: AskView },
        { path: '/jobs', name:'Jobs', component: JobsView },
        { path: '/user/:id', name:'user', component: UserView },
        { path: '/item/:id', name:'item', component: ItemView },
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router