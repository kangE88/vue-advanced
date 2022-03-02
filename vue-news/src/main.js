import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import store from './store';

createApp(App).use(router).use(store).mount('#app')

//application 설정 구조도를 파악하기 위하게 작성하는게 좋다
