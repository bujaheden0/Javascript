var display1 = document.getElementById("p1Display");
var display2 = document.getElementById("p2Display");
var button1 = document.querySelector("#p1");
var button2 = document.querySelector("#p2");
var Reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var gameOver = false;
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
button1.addEventListener("click",function(){
	if(!gameOver){
	p1Score++;
	if(p1Score == winningScore){
		gameOver = true;
		display1.classList.add("winner");
		}
		display1.textContent = p1Score;
		}	
});
button2.addEventListener("click",function(){
	if(!gameOver){
	p2Score++;
	if(p2Score == winningScore){
		display2.classList.add("winner");
		gameOver = true;
		}
	display2.textContent = p2Score;	
		}
});

Reset.addEventListener("click",function(){
		reset();
});

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

function reset(){
		p1Score = 0;
		p2Score = 0;
		display1.textContent = p1Score;
		display2.textContent = p2Score;
		display1.classList.remove("winner")
		display2.classList.remove("winner")
		gameOver = false;
}


