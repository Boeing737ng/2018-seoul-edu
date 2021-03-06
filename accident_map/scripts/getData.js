var curCSVData = [];
var LOCATION_NAME = 0;
var OCCURRENCE_NUM = 1;
var CASUALTY_NUM = 2;
var DEATH_NUM = 3;
var SLANDER_NUM = 4;
var LIGHT_INJURY_NUM = 5;
var REPORTED_INJURY_NUM = 6;

function pFileReader(file){
    return new Promise(function(resolve, reject){
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
    var casualtyNumList = [];
    for(var key in curCSVData){
        casualtyNumList.push(parseInt(curCSVData[key][CASUALTY_NUM]));
    }
    return casualtyNumList;
}

// 사망자수의 리스트를 가져온다.
function getDeathNumList(){
    var deathNumList = [];
    for(var key in curCSVData){
        deathNumList.push(parseInt(curCSVData[key][DEATH_NUM]));
    }
    return deathNumList;
}

// 중상자수의 리스트를 가져온다.
function getSlanderNumList(){
    var slanderNumList = [];
    for(var key in curCSVData){
        slanderNumList.push(parseInt(curCSVData[key][SLANDER_NUM]));
    }
    return slanderNumList;
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

// 그래프에 사용될 숫자 데이터를 랜덤으로 n개만큼 가져온다.
function getRandomValueList(n){
    var randomList = [];
    for(var i = 0; i<n; i++){
        randomList.push(Math.round(Math.random()*100));
    }
    return randomList;
}

// 그래프에 사용될 레이블 데이터를 랜덤으로 n개만큼 가져온다.
function getRandomLabelList(n){
    var randomLabelList = [];
    for(var i = 0; i<n; i++){
        randomLabelList.push("Label "+Math.round(Math.random()*100));
    }
    return randomLabelList;
}

// 그래프에 사용될 그래프 색상 데이터를 랜덤으로 n개만큼 가져온다.
function getRandomColorList(n){
    var randomColorList = [];
    for(var i = 0; i<n; i++){
        R = Math.round(Math.random()*255);
        G = Math.round(Math.random()*255);
        B = Math.round(Math.random()*255);
        rgb = "rgb("+R+","+G+","+B+")";
        randomColorList.push(rgb);
    }
    if(randomColorList.length == 1){
        return randomColorList[0];
    }
    return randomColorList;
}