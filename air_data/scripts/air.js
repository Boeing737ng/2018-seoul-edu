
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