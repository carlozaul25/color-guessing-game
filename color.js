var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');

	//reset button
resetButton.addEventListener('click', function() {
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change the colors of squares
	for(i=0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";

});

colorDisplay.textContent = pickedColor;

for(i=0; i<squares.length; i++) {
	//adding initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to the squares
	squares[i].addEventListener("click", function() {
		//grab color of picked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = 'Try again';
		}
	});
}

function changeColors(color) {
	for(i=0; i<squares.length; i++) {
		//changing the colors to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//Making an array
	var array = [];
	//adding num random colors to array
	for(i=0; i<num; i++) {
	//get random color and push to the array
		array.push(randomColor());
	}
	//return that array
	return array;
}

function randomColor() {
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}




