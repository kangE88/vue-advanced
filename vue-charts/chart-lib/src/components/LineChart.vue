<template>
    <canvas id="myLineChart" width="400" height="400"></canvas>
</template>

<script>
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables);

export default {
    mounted() {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const data = {
            labels: labels,
            datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {}
        };

        const ctx = document.getElementById('myLineChart'); 
        //const myLineChart = new Chart( // eslint-disable-line no-unused-vars
        const myLineChart = new this.$_Chart( // eslint-disable-line no-unused-vars
            ctx,
            config
        );
        //console.log(this.$ref.line)
    }
}
</script>

<style>

</style>