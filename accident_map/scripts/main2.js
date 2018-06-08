var curCSVData = [];
var LOCATION_NAME = 0;
var OCCURRENCE_NUM = 1;
var CASUALTY_NUM = 2;
var DEATH_NUM = 3;
var SLANDER_NUM = 4;
var LIGHT_INJURY_NUM = 5;
var REPORTED_INJURY_NUM = 6;

function uploadFile(file) {
	var reader = new FileReader();
	var coordinate;
	reader.readAsText(file[0]);
	reader.onload = function (e) {
		var rows = e.target.result.split("\n");
		console.log(rows);
	}
}
function setCurrentCSVData(){
    csvData = $("#input-csv")[0].files[0];

    pFileReader(csvData).then(function(success){
        curCSVData = success;
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

function createChart(){
    var ctx = document.getElementById("chart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: getRandomLabelList(5),
            datasets: [{
                label: 'OCCURRENCE_NUM',
                data: getRandomList(5),
                backgroundColor: "rgb(255, 0, 0)"
            }]
        },
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
    });
}

function createChart2() {
    var ctx = document.getElementById('chart2').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: getRandomLabelList(5),
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: "rgb(255, 0, 0)",
                data: getRandomList(5)
            }, {
                label: 'Dataset 2',
                backgroundColor: "rgb(0, 255, 0)",
                data: getRandomList(5)
            }, {
                label: 'Dataset 3',
                backgroundColor: "rgb(0, 0, 255)",
                data: getRandomList(5)
            }, {
                label: 'Dataset 4',
                backgroundColor: "rgb(0, 0, 0)",
                data: getRandomList(5)
            }]
        
        },
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
    });
};

function createChart3() {
    var ctx = document.getElementById('chart3').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: getRandomLabelList(5),
            datasets: [{
                label: 'DataSet 1',
                data: getRandomList(5),
                backgroundColor: [
                    "rgb(0, 255, 255)",
                    "rgb(255, 0, 0)",
                    "rgb(0, 255, 0)",
                    "rgb(0, 0, 255)",
                    "rgb(255, 255, 0)"
                ]
            }]
        },
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
    });
};

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