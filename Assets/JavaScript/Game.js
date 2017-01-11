// "red", "yellow", "green", "purple"
var answer = [];
var input = ["", "", "", ""];

var pointer = "0";
var row = 1;

//Loading of page!
(function onLoadingPage() {
		document.getElementById('Pijl1').style.backgroundImage = 'none';
		document.getElementById('Pijl2').style.background = 'none';
		document.getElementById('Pijl3').style.background = 'none';
})();

GenerateAnwser();

function GenerateAnwser() {
var colorList = ["red", "orange", "yellow", "green", "blue", "purple"];
	for (var i = 0; i < 4; i++) {
		var color = colorList[Math.floor(Math.random() * colorList.length)];
		while (answer.indexOf(color) > -1) {
			color = colorList[Math.floor(Math.random() * colorList.length)];
		}
		answer[i] = color;
	}
}




// Pointer for wich colum you place your set!
function Point(numberOfPointer) {
	switch(numberOfPointer) {
		case "0":
			document.getElementById('Pijl0').style.background = '';
			document.getElementById('Pijl1').style.background = 'none';
			document.getElementById('Pijl2').style.background = 'none';
			document.getElementById('Pijl3').style.background = 'none';
			pointer = "0";

			break;
		case "1":
			document.getElementById('Pijl0').style.background = 'none';
			document.getElementById('Pijl1').style.background = '';
			document.getElementById('Pijl2').style.background = 'none';
			document.getElementById('Pijl3').style.background = 'none';
			pointer = "1";

			break;
		case "2":
			document.getElementById('Pijl0').style.background = 'none';
			document.getElementById('Pijl1').style.background = 'none';
			document.getElementById('Pijl2').style.background = '';
			document.getElementById('Pijl3').style.background = 'none';
			pointer = "2";

			break;
		case "3":
			document.getElementById('Pijl0').style.background = 'none';
			document.getElementById('Pijl1').style.background = 'none';
			document.getElementById('Pijl2').style.background = 'none';
			document.getElementById('Pijl3').style.background = '';
			pointer = "3";

			break;
	}

}

// Pointer for wich colum you place your set!
function Color(choiseColor) {
	switch(choiseColor) {
		case "red":
			document.getElementById('Row' + row + 'Spot' + pointer).style.backgroundColor = '#e74c3c';
			input[pointer] = "red";
			break;
		case "orange":
			document.getElementById('Row' + row + 'Spot' + pointer).style.backgroundColor = '#e67e22';
			input[pointer] = "orange";
			break;
		case "yellow":
			document.getElementById('Row' + row + 'Spot' + pointer).style.backgroundColor = '#f1c40f';
			input[pointer] = "yellow";
			break;
		case "green":
			document.getElementById('Row' + row + 'Spot' + pointer).style.backgroundColor = '#2ecc71';
			input[pointer] = "green";
			break;
		case "blue":
			document.getElementById('Row' + row + 'Spot' + pointer).style.backgroundColor = '#3498db';
			input[pointer] = "blue";
			break;
		case "purple":
			document.getElementById('Row' + row + 'Spot' + pointer).style.backgroundColor = '#9b59b6';
			input[pointer] = "purple";
			break;
	}

}

function CheckAnwser() {
	if (answer[0] == input[0] & answer[1] == input[1] & answer[2] == input[2] & answer[3] == input[3]) {
		document.getElementById('Row1AsideSpot0').style.backgroundColor = '#e74c3c';
		document.getElementById('Row1AsideSpot1').style.backgroundColor = '#e74c3c';
		document.getElementById('Row1AsideSpot2').style.backgroundColor = '#e74c3c';
		document.getElementById('Row1AsideSpot3').style.backgroundColor = '#e74c3c';

		document.getElementById('Container').style.display = 'none';
		document.getElementById('ContainerTop').style.display = 'none';
		document.getElementById('ContainerWin').style.display = 'block';
		correctAnwser();
		input = ["", "", "", ""];


	} else {
		CheckPos0FromAnwser();
		if (row <= 11) {
			row++;
					
		} else {
			document.getElementById('Container').style.display = 'none';
			document.getElementById('ContainerTop').style.display = 'none';
			document.getElementById('ContainerLoss').style.display = 'block';
			correctAnwser();
			input = ["", "", "", ""];
		}
	}


}

function CheckPos0FromAnwser() {
	if (answer[0] == input[0]) {
		CheckPos1FromAnwser();
		document.getElementById('Row' + row + 'AsideSpot0').style.backgroundColor = '#e74c3c';
	} else {
		if (input[0] == answer[0] || input[0] == answer[1] || input[0] == answer[2] || input[0] == answer[3]) {
			document.getElementById('Row' + row + 'AsideSpot0').style.backgroundColor = '#f2f2f2';
		}
		CheckPos1FromAnwser();
	}
}

function CheckPos1FromAnwser() {
	if (answer[1] == input[1]) {
		CheckPos2FromAnwser();
		document.getElementById('Row' + row + 'AsideSpot1').style.backgroundColor = '#e74c3c';
	} else {
		if (input[1] == answer[0] || input[1] == answer[1] || input[1] == answer[2] || input[1] == answer[3]) {
			document.getElementById('Row' + row + 'AsideSpot1').style.backgroundColor = '#f2f2f2';
		}
		CheckPos2FromAnwser();
	}
}

function CheckPos2FromAnwser() {
	if (answer[2] == input[2]) {
		CheckPos3FromAnwser();
		document.getElementById('Row' + row + 'AsideSpot2').style.backgroundColor = '#e74c3c';
	} else {
		if (input[2] == answer[0] || input[2] == answer[1] || input[2] == answer[2] || input[2] == answer[3]) {
			document.getElementById('Row' + row + 'AsideSpot2').style.backgroundColor = '#f2f2f2';
		}
		CheckPos3FromAnwser();
	}
}

function CheckPos3FromAnwser() {
	if (answer[3] == input[3]) {
		document.getElementById('Row' + row + 'AsideSpot3').style.backgroundColor = '#e74c3c';
		input = ["", "", "", ""];
	} else {
		if (input[3] == answer[0] || input[3] == answer[1] || input[3] == answer[2] || input[3] == answer[3]) {
			document.getElementById('Row' + row + 'AsideSpot3').style.backgroundColor = '#f2f2f2';
		}
		input = ["", "", "", ""];
	}
}
function correctAnwser() {
	for (var i = 0; i<=3; i++) {
		var color = answer[i];
		switch(color) {
			case "red":
				document.getElementById('AnwserSpot' + i).style.backgroundColor = '#e74c3c';
				document.getElementById('WrongAnwserSpot' + i).style.backgroundColor = '#e74c3c';
				break;
			case "orange":
				document.getElementById('AnwserSpot' + i).style.backgroundColor = '#e67e22';
				document.getElementById('WrongAnwserSpot' + i).style.backgroundColor = '#e67e22';
				break;
			case "yellow":
				document.getElementById('AnwserSpot' + i).style.backgroundColor = '#f1c40f';
				document.getElementById('WrongAnwserSpot' + i).style.backgroundColor = '#f1c40f';
				break;
			case "green":
				document.getElementById('AnwserSpot' + i).style.backgroundColor = '#2ecc71';
				document.getElementById('WrongAnwserSpot' + i).style.backgroundColor = '#2ecc71';
				break;
			case "blue":
				document.getElementById('AnwserSpot' + i).style.backgroundColor = '#3498db';
				document.getElementById('WrongAnwserSpot' + i).style.backgroundColor = '#3498db';
				break;
			case "purple":
				document.getElementById('AnwserSpot' + i).style.backgroundColor = '#9b59b6';
				document.getElementById('WrongAnwserSpot' + i).style.backgroundColor = '#9b59b6';
				break;
		}
	}
}