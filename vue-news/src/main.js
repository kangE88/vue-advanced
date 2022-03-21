import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import store from './store';
//import Bus from './utils/bus'
//eventBus -> mitt
import mitt from "mitt";
export const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(router).use(store).mount("#app");

//application 설정 구조도를 파악하기 위하게 작성하는게 좋다
