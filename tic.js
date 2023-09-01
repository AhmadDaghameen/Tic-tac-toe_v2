// Function called whenever user tab on any box
let squares = document.querySelectorAll(".ui .row .cell");
let print = document.getElementById('print');
let WinCombanations = [[1,4,7],[1,2,3],[1,5,9],[2,5,8],[3,5,7],[3,6,9],[7,8,9],[4,5,6]];
let flag = 1;
function CheckForWinning(player){
	if (squares.length == 0){
		squares = document.querySelectorAll(".ui .row .cell");
	}
	for (let i = 0; i < WinCombanations.length; i++) {
		const element = WinCombanations[i];
		if ((squares[element[0] - 1].value  == player) && (squares[element[1] - 1].value == player) && (squares[element[2] - 1].value == player)) {
			print.innerHTML = "Player " +player + " won";
			disableButtons();
			cellcolorRed(element);
			return true;
		}
	}
}
function checkForTie()
{
	if (squares.length == 0){
		squares = document.querySelectorAll(".ui .row .cell");
	}
	squares.forEach(element => {
		if (element.value == '') {
			return false;
		}
	});
	return true;
}
function myfunc() { 
	if (squares.length == 0){
		squares = document.querySelectorAll(".ui .row .cell");
	}
	if (print == null) {
		print = document.getElementById('print');
	}
	// Checking if Player X won or not and after
	// that disabled all the other fields	
	if (CheckForWinning("X")) {}
	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if (CheckForWinning("0"))	{

	}
	else if (checkForTie()) {
		print.innerHTML = "Match Tie";
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			print.innerHTML = "Player X Turn";
		}
		else {
			print.innerHTML = "Player 0 Turn";
		}
	}
}
// Function to reset game
function myfunc_2() {
	location.reload();
}
// Here onwards, functions check turn of the player
// and put accordingly value X or 0

function cellClicked(cellId) {
	
	if (squares.length == 0){
		squares = document.querySelectorAll(".ui .row .cell");
	}
	if (flag == 1) {
		squares[cellId].value = "X";
		squares[cellId].disabled = true;
		flag = 0;
	}
	else {
		squares[cellId].value = "0";
		squares[cellId].disabled = true;
		flag = 1;
	}
}
function disableButtons() {
	if (squares.length == 0){
		squares = document.querySelectorAll(".ui .row .cell");
	}
	for (var i=0 ;i< squares.length;++i ){
		squares[i].disabled = true;
	}
}
function cellcolorRed(arr) {
	if (squares.length == 0){
		squares = document.querySelectorAll(".ui .row .cell");
	}
	for (var i=0 ;i< arr.length;++i ){
		squares[arr[i] - 1].style.color = "red";
	}
}