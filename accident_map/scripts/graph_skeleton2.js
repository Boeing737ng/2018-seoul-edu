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

// TODO :: Bar 그래프의 제목 변경
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
        // TODO :: 사건 지역 리스트를 레이블로 설정한다.
        labels: ['label 1', 'label 2', 'label 3', 'label 4', 'label 5'],
        datasets: [{
            // TODO :: 알맞은 label로 설정을 한다.
            label: 'DataSet',
            // TODO :: 사건 지역의 사상자수 데이터로 그래프 데이터를 설정한다.
            data: [78, 92, 88, 71, 81],
            // TODO :: 랜덤한 색상 데이터 리스트를 통해 색상을 설정한다.
            backgroundColor: 'rgb(255, 0, 0)'
        }]
    };
    window.myBarChart.update();
}

// TODO :: Bar Stack 그래프의 제목 변경
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

// TODO :: 사망자수, 중상자수, 경상자수, 부상신고자수 각각에 알맞은 label과 data를 설정한다.
function updateBarStackChart(){
    barStackData.data = {
        // TODO :: 사건 지역 리스트를 레이블로 설정한다.
        labels: ['label 1', 'label 2', 'label 3', 'label 4', 'label 5'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: 'rgb(255, 0, 0)',
            data: [17, 23, 11, 20, 15]
        }, {
            label: 'Dataset 2',
            backgroundColor: 'rgb(0, 255, 0)',
            data: [15, 21, 19, 24, 29]
        }, {
            label: 'Dataset 3',
            backgroundColor: 'rgb(0, 0, 255)',
            data: [11, 19, 13, 27, 9]
        }, {
            label: 'Dataset 4',
            backgroundColor: 'rgb(255, 255, 0)',
            data: [9, 17, 22, 25, 16]
        }]
    };

    window.myBarStackChart.update();
}

// TODO :: Doughnut 그래프의 제목 변경
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
        // TODO :: 사건 지역 리스트를 레이블로 설정한다.
        labels: ['label 1', 'label 2', 'label 3', 'label 4', 'label 5'],
        datasets: [{
            // TODO :: 알맞은 label로 설정을 한다.
            label: 'DataSet 1',
            // TODO :: 사건 지역의 발생건수 데이터로 그래프 데이터를 설정한다.
            data: [27, 41, 16, 33, 52],
            // TODO :: 랜덤한 색상 데이터 리스트(총 54개 색상)를 통해 색상을 설정한다.
            backgroundColor: [
                'rgb(255, 0, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 0, 255)',
                'rgb(255, 255, 0)',
                'rgb(255, 0, 255)'
            ]
        }]
    };

    window.myDoughnutChart.update();
}