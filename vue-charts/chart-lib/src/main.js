import { createApp } from 'vue'
import App from './App.vue'
import chartPlugin from "./plugins/ChartPlugin";

const app = createApp(App);

app.use(chartPlugin).mount("#app");
