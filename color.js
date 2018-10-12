var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var numOfSquares = 6;

//easy button
easyBtn.addEventListener('click', function() {
	hardBtn.classList.remove ('selected');
	easyBtn.classList.add ('selected');
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = 'none';
		}
	}
});

//hard button 
hardBtn.addEventListener('click', function() {
	hardBtn.classList.add ('selected');
	easyBtn.classList.remove ('selected');
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i=0; i<squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = 'block';
	}
});

	//reset button
resetButton.addEventListener('click', function() {
	//generate all new colors
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change the colors of squares
	for(i=0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";

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




