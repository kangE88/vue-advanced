import { createRouter, createWebHashHistory } from 'vue-router';
import NewsView from "../src/views/NewsView.vue";
import JobsView from "../src/views/JobsView.vue";
import AskView from '../src/views/AskView.vue';


//Vue.use(VueRouter);

//path : url 주소
//url 주소로 갔을 때 표시될 컴포넌트
const routes = [
        { path: '/news', name:'News', component: NewsView }, 
        { path: '/ask', name:'Ask', component: AskView },
        { path: '/jobs', name:'Jobs', component: JobsView },
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes
})

export default router