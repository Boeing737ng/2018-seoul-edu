var year = 0;
var city = 1;
var latitude = 2;
var longitude = 3;
var passengers = 4;
var jan = 5;
var feb = 6;
var mar = 7;
var apr = 8;
var may = 9;
var jun = 10;
var jul = 11;
var aug = 12;
var sep = 13;
var oct = 14;
var nov = 15;
var dec = 16;

var incheon = [37.460191,126.440696];

var data_2015 = []
var data_2016 = []
var data_2017 = []
var data = []

function readFile() {
    var user_file = document.getElementById("file-input").files[0];
    var reader = new FileReader();
    reader.readAsText(user_file);
    reader.onload = function (e) {
        var rows = reader.result.split("\n").slice(1)
        for(var key in rows){
            rows[key] = rows[key].split(",");
            data.push(rows[key]);
            if(rows[key][year] == "2015") {
                data_2015.push(rows[key]);
            }
            else if(rows[key][year] == "2016") {
                data_2016.push(rows[key]);
            }
            else {
                data_2017.push(rows[key]);
            }
        }
        displayOnMap(data);
    }
}

function displayOnMap(data) {
    addLine(data);
    addCircle(data);
}