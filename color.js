var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
	]

var squares = document.querySelectorAll(".squares");
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");

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
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = 'Try again';
		}
	});
}

