var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
 
 
for (var i = 0; i < modeButtons.length; i++) {
 	modeButtons[i].addEventListener("click", function() {
 	 	modeButtons[0].classList.remove("selected");
 	 	modeButtons[1].classList.remove("selected");
 	 	this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
 	 	reset();
   });
}
 
function reset() {
 	//generat all new colors
	colors = generateRandomColor(numSquares);
	//pick new random color from arr
	pickedColor = pickColor();
	//change color display to match new color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//change colors of squares
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
		//add click lisetner to squares
 	squares[i].addEventListener("click", function() {
		//grab color of clicked GRB
 		var clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
 			messageDisplay.textContent = "Correct";
 			resetButton.textContent = "Play Again?";
 			changeColors(clickedColor);
 			h1.style.background = clickedColor;
 		} else {
 			this.style.background = "#232323";
 			messageDisplay.textContent = "Try Again!!"
 		}
	});
  }
	
function changeColors(color) {
 	//loop through all squares
 	for (var i = 0; i < squares.length; i++) {
 		//change each color to match given color
 		squares[i].style.background = color;
 	}
 }
 
function pickColor() {
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

function generateRandomColor(num) {
 	//make Arr
 	var arr = [];
 	//add num random to Arr
 	for(var i = 0; i < num; i++){
 		arr.push(randomColor());
 	}
 	//return Arr
 	return arr;
}

 function randomColor() {
 	//pick red from 0-255
 	var r = Math.floor(Math.random() * 256);
 	//pick green from 0-255
 	var g = Math.floor(Math.random() * 256);
 	//pick blue from 0-255
 	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


	
 


 
 