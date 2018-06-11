var curCSVData = [];
var LOCATION_NAME = 0;
var OCCURRENCE_NUM = 1;
var CASUALTY_NUM = 2;
var DEATH_NUM = 3;
var SLANDER_NUM = 4;
var LIGHT_INJURY_NUM = 5;
var REPORTED_INJURY_NUM = 6;

$(document).ready(
    function() {
        createBarChart();
        createBarStackChart();
        createDoughnutChart();
    }
);

function pFileReader(file){
    return new Promise((resolve, reject) => {
        var fr = new FileReader();  
        fr.readAsText(file);
        fr.onload = function (e) {
            var rows = fr.result.split("\n").slice(1)
            for(var key in rows){
                rows[key] = rows[key].split(",");
            }
            resolve(rows);
        }
    });
}

function setCurrentCSVData(){
    csvData = $("#input-csv")[0].files[0];

    pFileReader(csvData).then(function(success){
        curCSVData = success;
        alert("파일 읽기 완료");
    });
}

// 지역이름의 리스트를 가져온다.
function getLocationNameList(){
    var locationNameList = [];
    for(var key in curCSVData){
        locationNameList.push(curCSVData[key][LOCATION_NAME]);
    }
    return locationNameList;
}

// 발생건수의 리스트를 가져온다.
function getOccurrenceNumList(){
    var occurrenceNumList = [];
    for(var key in curCSVData){
        occurrenceNumList.push(parseInt(curCSVData[key][OCCURRENCE_NUM]));
    }
    return occurrenceNumList;
}

// 사상자수의 리스트를 가져온다
function getCasualtyNumList(){
    var casualtyNum = [];
    for(var key in curCSVData){
        casualtyNum.push(parseInt(curCSVData[key][CASUALTY_NUM]));
    }
    return casualtyNum;
}

// 사망자수의 리스트를 가져온다.
function getDeathNumList(){
    var deathNum = [];
    for(var key in curCSVData){
        deathNum.push(parseInt(curCSVData[key][DEATH_NUM]));
    }
    return deathNum;
}

// 경상자수의 리스트를 가져온다.
function getLightInjuryNumList(){
    var lightInjuryNumList = [];
    for(var key in curCSVData){
        lightInjuryNumList.push(parseInt(curCSVData[key][LIGHT_INJURY_NUM]));
    }
    return lightInjuryNumList;
}

// 부상자신고수의 리스트를 가져온다.
function getReportedInjuryNumList(){
    var reportedInjuryNumList = [];
    for(var key in curCSVData){
        reportedInjuryNumList.push(parseInt(curCSVData[key][REPORTED_INJURY_NUM]));
    }
    return reportedInjuryNumList;
}

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
        }
    }
}

function createBarChart(){
    var ctx = $("#bar-chart")[0].getContext('2d')
    window.myBarChart = new Chart(ctx, barData);
}

function updateBarChart(){
    barData.data = {
        labels: getRandomLabelList(5),
        datasets: [{
            label: 'DataSet',
            data: getRandomList(5),
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

function createBarStackChart() {
    var ctx = $("#bar-stack-chart")[0].getContext('2d');
    
    window.myBarStackChart = new Chart(ctx, barStackData);
};

function updateBarStackChart(){
    barStackData.data = {
        labels: getRandomLabelList(5),
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: getRandomColorList(1),
            data: getRandomList(5)
        }, {
            label: 'Dataset 2',
            backgroundColor: getRandomColorList(1),
            data: getRandomList(5)
        }, {
            label: 'Dataset 3',
            backgroundColor: getRandomColorList(1),
            data: getRandomList(5)
        }, {
            label: 'Dataset 4',
            backgroundColor: getRandomColorList(1),
            data: getRandomList(5)
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

function createDoughnutChart() {
    $("#doughnut-chart")[0]
    var ctx = $("#doughnut-chart")[0].getContext('2d');
    window.myDoughnutChart = new Chart(ctx, doughnutData);
};

function updateDoughnutChart(){
    doughnutData.data = {
        labels: getRandomLabelList(5),
        datasets: [{
            label: 'DataSet 1',
            data: getRandomList(5),
            backgroundColor: getRandomColorList(5)
        }]
    };
    window.myDoughnutChart.update();
}

function getRandomList(n){
    var randomList = [];
    for(var i = 0; i<n; i++){
        randomList.push(Math.round(Math.random()*100));
    }
    return randomList;
}

function getRandomLabelList(n){
    var randomLabelList = [];
    for(var i = 0; i<n; i++){
        randomLabelList.push("Label "+Math.round(Math.random()*100));
    }
    return randomLabelList;
}

function getRandomColorList(n){
    var randomColorList = [];
    for(var i = 0; i<n; i++){
        R = Math.round(Math.random()*255);
        G = Math.round(Math.random()*255);
        B = Math.round(Math.random()*255);
        randomColorList.push("rgb("+R+","+G+","+B+")");
    }
    if(randomColorList.length == 1){
        return randomColorList[0];
    }
    return randomColorList;
}