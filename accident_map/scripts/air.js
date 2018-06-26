function readFile() {
    var user_file = document.getElementById("file-input").files[0];
    var reader = new FileReader();
    reader.readAsText(user_file);
    reader.onload = function (e) {
        var rows = reader.result.split("\n").slice(1)
        for(var key in rows){
            rows[key] = rows[key].split(",");
        }
    }
}