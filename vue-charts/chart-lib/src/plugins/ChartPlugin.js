import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
    install: (app) => {
        console.log('chart plugin loaded')
        app.config.globalProperties.$_Chart = Chart;
    }
}