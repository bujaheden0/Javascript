//var game = {}

/*game.init = function(){
	setupModeButtons();
	setupSquares();
	reset();
}*/

//game.init();
var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
init();

function init(){
	//mode button eventsListener
setupModeButtons();
setupSquares();

reset();
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colors of squares
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
		}else{
		squares[i].style.display = "none";	
		}

	h1.style.background = "steelblue";
	
}
}

/*easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});*/

/*hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		
	}
});*/

colorDisplay.textContent = pickedColor;
resetButton.addEventListener("click",function(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colors of squares
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}

	h1.style.background = "steelblue";
	this.textContent = "New colors";
})


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	//make an Array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
	//get random color and push into arr	
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256)
	return "rgb("+ r +", " + g + ", " + b + ")";
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
		//if(this.textContent === "Easy"){
		//	numberOfSquares = 3;
		//} else{
		//	numberOfSquares = 6;
		//}
		reset();
		//figure out how many squares to show
		//pick new colors
		//pick a new pickedCOlor
		//update page to reflect changes

	})
}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}
}