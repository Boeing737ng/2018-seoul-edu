// Localhost 환경에서 동작

var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new daum.maps.LatLng(35.700094493554154, 127.8354910048338), // 지도 중심좌표
        level: 13 // 지도 확대 레벨
    };
var map = new daum.maps.Map(mapContainer, mapOption); // 지도 생성

function uploadFile(file) {
	var reader = new FileReader();
	var coordinate;
	reader.readAsText(file[0]);
	reader.onload = function (e) {
		var rows = e.target.result.split("\n");
		console.log(rows);
		coordinate = getCoordinate(rows);
		createCircle(coordinate);
	}
}

function getCoordinate(rows) {
	var coordinate = []
	for (var i = 1; i < rows.length; i++) {
		var row = [];
		var cells = rows[i].split(",");
		row.push(cells[13],cells[12]);
		coordinate.push(row);
	}
	return coordinate;
}

function createCircle(coordinate) {
	for(var i = 0; i < coordinate.length; i++) {
		var circle = new daum.maps.Circle({
			center : new daum.maps.LatLng(coordinate[i][0], coordinate[i][1]),// 원 중심좌표
			radius: 2000, // 미터 단위의 원의 반지름
			strokeWeight: 2, // 선의 두께
			strokeColor: 'red', // 선의 색깔
			strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명
			strokeStyle: 'solid', // 선의 스타일
			fillColor: '#CFE7FF', // 채우기 색깔
			fillOpacity: 0.7  // 채우기 불투명도
		});
		circle.setMap(map); // 원 추가
	}
}