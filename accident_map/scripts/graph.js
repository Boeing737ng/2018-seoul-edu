$(document).ready(
    function() {
        createBarChart();
        createBarStackChart();
        createDoughnutChart();
    }
);

function createBarChart(){
    var ctx = $("#bar-chart")[0].getContext('2d')
    window.myBarChart = new Chart(ctx, barData);
}

function createBarStackChart() {
    var ctx = $("#bar-stack-chart")[0].getContext('2d');
    window.myBarStackChart = new Chart(ctx, barStackData);
};

function createDoughnutChart() {
    var ctx = $("#doughnut-chart")[0].getContext('2d');
    window.myDoughnutChart = new Chart(ctx, doughnutData);
};

var barData = {
    type: 'bar',
    data: {},
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
}

function updateBarChart(){
    barData.data = {
        labels: getRandomLabelList(5),
        datasets: [{
            label: 'DataSet',
            data: getRandomValueList(5),
            backgroundColor: getRandomColorList(1)
        }]
    };
    window.myBarChart.update();
}

var barStackData = {
    type: 'bar',
    data: {},
    options: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked'
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
}

function updateBarStackChart(){
    barStackData.data = {
        labels: getRandomLabelList(5),
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: getRandomColorList(1),
            data: getRandomValueList(5)
        }, {
            label: 'Dataset 2',
            backgroundColor: getRandomColorList(1),
            data: getRandomValueList(5)
        }, {
            label: 'Dataset 3',
            backgroundColor: getRandomColorList(1),
            data: getRandomValueList(5)
        }, {
            label: 'Dataset 4',
            backgroundColor: getRandomColorList(1),
            data: getRandomValueList(5)
        }]
    };

    window.myBarStackChart.update();
}

var doughnutData = {
    type: 'doughnut',
    data: {},
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
}

function updateDoughnutChart(){
    doughnutData.data = {
        labels: getRandomLabelList(5),
        datasets: [{
            label: 'DataSet 1',
            data: getRandomValueList(5),
            backgroundColor: getRandomColorList(5)
        }]
    };

    window.myDoughnutChart.update();
}