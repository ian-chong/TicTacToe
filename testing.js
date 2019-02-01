


//Player One is O and Player Two is X - COMPLETE
const playerOne = "O";
const playerTwo = "X";
let gameTurn = 0;

//Basic setup for board
let box1 =document.getElementById('1');
let box2 =document.getElementById('2');
let box3 =document.getElementById('3');
let box4 =document.getElementById('4');
let box5 =document.getElementById('5');
let box6 =document.getElementById('6');
let box7 =document.getElementById('7');
let box8 =document.getElementById('8');
let box9 =document.getElementById('9');

//Player on click produces X - COMPLETE
const playerClickMove = document.getElementById('big-board');
//To register click event as a const
playerClickMove.onclick = function(event){
	const boxClicked = event.target;

	//To determine which player is clicking and generate "O" or "X" respectively
	if (gameTurn == 0 || gameTurn == 2 || gameTurn == 4 || gameTurn == 6 || gameTurn == 8) {
		boxClicked.innerHTML = playerOne;
	}
	else if (gameTurn == 1 || gameTurn == 3 || gameTurn == 5 || gameTurn == 7 || gameTurn == 9) {
		boxClicked.innerHTML = playerTwo;
	} 
	//Added for game progression
	gameTurn = gameTurn + 1;

	//Validation Logic - INCOMEPLETE
	//Need to ignore click
	//reduce gameTurn by -1 so that progression is normal
	// if (boxClicked.innerHTML == playerOne || boxClicked.innerHTML == playerTwo) {
	// 	alert ('HEY THATS CHEATING!');
	// }

	// Win Condition - COMPLETE
	// players continues clicking until if "X has reached "3-in-a-row player1 wins"
	// else if "O has reached 3-in-a-row player2 wins"
	// else tie game when 9 moves has been made
	// listed all possible 17 events which playre1 wins in 8 combos, player2 wins in 8combos and draw.

	if (box1.innerHTML == playerOne && box2.innerHTML == playerOne && box3.innerHTML == playerOne){
		alert('PlayerOne Wins');
	}
	else if (box4.innerHTML == playerOne && box5.innerHTML == playerOne && box6.innerHTML == playerOne){
		alert('PlayerOne Wins');
	}
	else if (box7.innerHTML == playerOne && box8.innerHTML == playerOne && box9.innerHTML == playerOne){
		alert('PlayerOne Wins');
	}
	else if (box1.innerHTML == playerOne && box4.innerHTML == playerOne && box7.innerHTML == playerOne){
		alert('PlayerOne Wins');
	}
	else if (box2.innerHTML == playerOne && box5.innerHTML == playerOne && box8.innerHTML == playerOne){
		alert('PlayerOne Wins');
	}
	else if (box3.innerHTML == playerOne && box6.innerHTML == playerOne && box9.innerHTML == playerOne){
		alert('PlayerOne Wins');
	}
	else if (box1.innerHTML == playerOne && box5.innerHTML == playerOne && box9.innerHTML == playerOne){
		alert('PlayerOne Wins');
	}
	else if (box3.innerHTML == playerOne && box5.innerHTML == playerOne && box7.innerHTML == playerOne){
		alert('PlayerOne Wins');
	}
	else if (box1.innerHTML == playerTwo && box2.innerHTML == playerTwo && box3.innerHTML == playerTwo){
		alert('PlayerTwo Wins');
	}
	else if (box4.innerHTML == playerTwo && box5.innerHTML == playerTwo && box6.innerHTML == playerTwo){
		alert('PlayerTwo Wins');
	}
	else if (box7.innerHTML == playerTwo && box8.innerHTML == playerTwo && box9.innerHTML == playerTwo){
		alert('PlayerTwo Wins');
	}
	else if (box1.innerHTML == playerTwo && box4.innerHTML == playerTwo && box7.innerHTML == playerTwo){
		alert('PlayerTwo Wins');
	}
	else if (box2.innerHTML == playerTwo && box5.innerHTML == playerTwo && box8.innerHTML == playerTwo){
		alert('PlayerTwo Wins');
	}
	else if (box3.innerHTML == playerTwo && box6.innerHTML == playerTwo && box9.innerHTML == playerTwo){
		alert('PlayerTwo Wins');
	}
	else if (box1.innerHTML == playerTwo && box5.innerHTML == playerTwo && box9.innerHTML == playerTwo){
		alert('PlayerTwo Wins');
	}
	else if (box3.innerHTML == playerTwo && box5.innerHTML == playerTwo && box7.innerHTML == playerTwo){
		alert('PlayerTwo Wins');
	}
	else if (gameTurn == 9){
		alert('Draw - Toss a coin and battle to the death!');
	}
	// Keep Score - COMPLETE
	// Using Span ID from HTML to Link players scores
	// using the same if logic as above except removing the draw condition
	// repeat if player 1 combos is reached add to player1score and viceversa for player2
	const playerOneScore = document.getElementById('player-one-wins');
	const playerTwoScore = document.getElementById('player-two-wins');
	
	if (box1.innerHTML == playerOne && box2.innerHTML == playerOne && box3.innerHTML == playerOne){
		playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
	}
	else if (box4.innerHTML == playerOne && box5.innerHTML == playerOne && box6.innerHTML == playerOne){
		playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
	}
	else if (box7.innerHTML == playerOne && box8.innerHTML == playerOne && box9.innerHTML == playerOne){
		playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
	}
	else if (box1.innerHTML == playerOne && box4.innerHTML == playerOne && box7.innerHTML == playerOne){
		playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
	}
	else if (box2.innerHTML == playerOne && box5.innerHTML == playerOne && box8.innerHTML == playerOne){
		playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
	}
	else if (box3.innerHTML == playerOne && box6.innerHTML == playerOne && box9.innerHTML == playerOne){
		playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
	}
	else if (box1.innerHTML == playerOne && box5.innerHTML == playerOne && box9.innerHTML == playerOne){
		playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
	}
	else if (box3.innerHTML == playerOne && box5.innerHTML == playerOne && box7.innerHTML == playerOne){
		playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
	}
	else if (box1.innerHTML == playerTwo && box2.innerHTML == playerTwo && box3.innerHTML == playerTwo){
		playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
	}
	else if (box4.innerHTML == playerTwo && box5.innerHTML == playerTwo && box6.innerHTML == playerTwo){
		playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
	}
	else if (box7.innerHTML == playerTwo && box8.innerHTML == playerTwo && box9.innerHTML == playerTwo){
		playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
	}
	else if (box1.innerHTML == playerTwo && box4.innerHTML == playerTwo && box7.innerHTML == playerTwo){
		playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
	}
	else if (box2.innerHTML == playerTwo && box5.innerHTML == playerTwo && box8.innerHTML == playerTwo){
		playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
	}
	else if (box3.innerHTML == playerTwo && box6.innerHTML == playerTwo && box9.innerHTML == playerTwo){
		playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
	}
	else if (box1.innerHTML == playerTwo && box5.innerHTML == playerTwo && box9.innerHTML == playerTwo){
		playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
	}
	else if (box3.innerHTML == playerTwo && box5.innerHTML == playerTwo && box7.innerHTML == playerTwo){
		playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
	}
}

//Reset the Game - COMPLETE
const resetGame = document.getElementById('reset-button');
resetGame.onclick = function (){
	box1.innerHTML = " ";
	box2.innerHTML = " ";
	box3.innerHTML = " ";
	box4.innerHTML = " ";
	box5.innerHTML = " ";
	box6.innerHTML = " ";
	box7.innerHTML = " ";
	box8.innerHTML = " ";
	box9.innerHTML = " ";
	gameTurn = 0;
}